const { dhis2API } = require('./dhis2-api');
const dhis2 = new dhis2API();
const { log_tables } = require('../models');
const fs = require("fs");
const { JSON } = require('sequelize');

//A function that takes reponse from dhis2
async function postPtrackerData(csvPath) {
  await dhis2.postPtrackerData(csvPath).then((response) => {
    console.log(response)
    // convert data into JSON object
    var data = response.body
    
    //extract data from json response
    const httpStatusCode = data.httpStatusCode;
    const status = data.response.status;


    console.log(httpStatusCode)
    console.log(status)

    //Call insert function
    // sqlBuilder.insertInLogtable(log_tables, status, httpStatusCode).then((response) => {
    //   console.log(response)
    // }).catch(error => {
    //   console.log(error)
    // })

    // //update id
    // const id = data.id;

    // //call update log table
    // sqlBuilder.updateLogtable(log_tables, id, status, httpStatusCode).then((response) => {
    //   console.log(response)
    // }).catch(error => {
    //   console.log(error)
    // })

  }).catch(error => {
    console.log(error)
  })

}


const getCsv = async (req, res) => {
  const csvData = req.body.file
  //
  postPtrackerData(csvData);

  res.status(200).send("File uploaded")
}

module.exports = {
  postPtrackerData, getCsv
}