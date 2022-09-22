const { dhis2API } = require('./dhis2-api');
const dhis2 = new dhis2API();
const sqlBuilder = require('../db/sqlBuilder');
const { log_tables } = require('../models');

//A function that takes reponse from dhis2
async function postPtrackerData() {
  await dhis2.postPtrackerData().then((response) => {

    // convert data into JSON object
    var data = JSON.parse(response.body)
    
    //extract data from json response
    const httpStatusCode = data.httpStatusCode;
    const status = data.response.status;

    //Call insert function
    sqlBuilder.insertInLogtable(log_tables, status, httpStatusCode).then((response) => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })

  }).catch(error => {
    console.log(error)
  })
}

module.exports = {
  postPtrackerData
}