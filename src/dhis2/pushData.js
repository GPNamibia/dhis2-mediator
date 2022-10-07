const { dhis2API } = require('./dhis2-api');
const dhis2 = new dhis2API();
const fs = require("fs");
const { JSON } = require('sequelize');
const multer = require("multer");
const fastcsv = require("fast-csv");
const csv = require('csv-parser');
const privateConfig = require('../config/private-config.json');

const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');



//A function that takes reponse from dhis2
async function postPtrackerData(csvPath) {
  await dhis2.postPtrackerData(`./src/csvData/${csvPath}.csv`).then((response) => {
    console.log(response.body)
  }).catch(error => {
    console.log(error)
  })
}
//post to dhis2
async function postDataToDhis2() {
  try {
    await Promise.all([
      postPtrackerData(privateConfig.table.fact_anc_dhis2_export),
      postPtrackerData(privateConfig.table.fact_mbfu_dhis2_export),
      postPtrackerData(privateConfig.table.fact_maternity_dhis2_export)
    ])
  } catch (error) {
    console.log("error sending data to dhis2", error)
  }
}

async function getDataAndPostToDhis2(){
  await this.postDataToDhis2().then(async(res)=>{
    return res;
})
}; 

//save csv data before sending to DHIS2
function saveCsvFile(csvPath, csvData) {
  console.log(csvData)
  const ws = fs.createWriteStream(`./src/csvData/${csvPath}.csv`);
  fastcsv
    .write(csvData, { headers: true })
    .on("finish", function () {
      console.log(`data saved successfully! \n`);
    })
    .pipe(ws);
  return ("Successfully save data")
}

//get csv data
const getCsv = async (req, res) => {
  const csvData = req.body.rows;
  //extract csv path
  const csvPath = req.body.table_name;

  //save data to csv
  await saveCsvFile(csvPath, csvData)
  res.status(200).send("File uploaded")
}


module.exports = {
  postPtrackerData,
  getCsv,
  saveCsvFile,
  postDataToDhis2,
  getDataAndPostToDhis2
}