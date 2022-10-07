const express = require("express");
const privateConfig = require('./config/private-config.json');
const app = express();
const pushData = require('./dhis2/pushData');
const {getQueryParameters}= require('./openhim/initialize');
const cors =  require('cors');

app.get('/openhim', async (req, res) => {
  // Starts when a new request is triggered by the polling channel
  console.log(`\n---------------------------------------------------------------------------------`,
    `\n${ new Date().toUTCString('en-GB', { timeZone: 'UTC' }) }  - `,
    `DHIS 2 <=> Database File Mediator has received a new request. \n`
  );
   //get data from CSV and send data to DHIS2
 await pushData.getDataAndPostToDhis2()
 .then((results) => {
         res.json('PTracker data succesfully sent to DHIS2');
 }).catch(error => { res.json(`Error retrieving PTracker Data: ${error}`) })
});
//middlleware
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended: true}))

//routers
const router = require('./routes/csvRouter')
app.use('/api/csv', router)


//openhim
getQueryParameters();

//Server PORT
  app.listen(privateConfig.appConfig.PORT, (err) => {
      if (err) console.log(`Error: ${err}`)
      console.log(`${privateConfig.appConfig.Name}  listening on port ${privateConfig.appConfig.PORT}...  \n`);
  });