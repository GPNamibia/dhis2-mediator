const request = require('request');
const privateConfig = require('../config/private-config.json');
const FileSystem = require("fs")
const binaryCSV = require('binary-csv')
const parser = binaryCSV()


 class dhis2API {
  constructor() {}

  // sending request to dhis2
  sendRequest(options) {
    return new Promise((resolve, reject) => {
      request(options, function (err, response, body) {
        if (err) return reject(`Error sending request to DHIS2: ${err.message}`)
        const contentType = response.headers['content-type' ]
        if ( contentType && contentType.indexOf("application/csv")) {
          return resolve({ response: response, body: body })
        } else {
          return reject(null)
        }
      });
    })
  }

  
//post ptracker data to dhis2
  postPtrackerData(csvPath) {
    let options = { 
      method: 'POST',
      url: privateConfig.dhis2Config.apiURL+`/api/dataValueSets`,
      qs: {},
      headers: privateConfig.dhis2Config.headers,
      form: false,
      auth: {
        user: privateConfig.dhis2Config.username,
        pass: privateConfig.dhis2Config.password
      },
      body:FileSystem.createReadStream(csvPath)
    }
    return this.sendRequest(options)
  
}
  

}

module.exports = {
  dhis2API
};