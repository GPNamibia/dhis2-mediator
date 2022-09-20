const express = require("express");
const privateConfig = require('./config/private-config.json');
const db = require('./models');
const app = express();
const pushData = require('./dhis2/pushData');


app.all('*', async (req, res) => {
  // Starts when a new request is triggered by the polling channel
  console.log(`\n---------------------------------------------------------------------------------`,
    `\n${ new Date().toUTCString('en-GB', { timeZone: 'UTC' }) }  - `,
    `DHIS 2 <=> PTracker Mediator has received a new request. \n`
  );
});
// app.use(fileUpload)

// app.set('view engine', 'ejs')

// app.get('/', async(req, res, next) => {
//   res.render('index')
// })

// app.post('/', async(req, res, next) => {
//   try{
//     const file = req.files.mFile
//     console.log(file)
//     const fileName = new Date().getTime.toString() + path.extname(file.name)
//     const savePath = path.join(__dirname, 'dhis2', ';pushData', file.name)
//     await file.mv(savePath)
//     res.redirect('/')
     
//   }catch(error){
//     console.log(error)
//     res.send('Error uploading file')
//   }
// })

// app.post('/', (req, res) => {
//   if(req.files){
//     console.log(req.files)
//     var file = req.files.file
//     var filename = file.name
//     console.log(filename)

//     file.mv('./dhis2/'+filename, function (err){
//       if(err){
//         res.send(err)
//       }else{
//         res.send("File Uploaded")
//       }
//     })
//   }
// })


// const fs = require("fs");
// const {Parser} = require("json2csv");

// dataValueSets = [
//     {
//         "dataElement": "qi2rTZFxfgI",
//         "period": "201906",
//         "orgUnit": "lrCTB5KwSUa",
//         "value": "NULL"
//     },
//     {
//         "dataElement": "S4IL4ti1tUA",
//         "period": "201812",
//         "orgUnit": "eIOtAZGNcim",
//         "value": "82"
//     },
//     {
//         "dataElement": "qi2rTZFxfgI",
//         "period": "201901",
//         "orgUnit": "qeii3Bj2AoE",
//         "value": "NULL"
//     },
//     {
//         "dataElement": "YVXuvootTv2",
//         "period": "201803",
//         "orgUnit": "ofxhzHlTJXc",
//         "value": "NULL"
//     }
// ]



// fs.writeFile("dumpData.csv", csv, function(err){

//     if(err){
//         throw err;
//     }
//     console.log('File saved');
// })
// app.get('/post-csv', function(req, res){
//     const json2csvParser = new Parser();
//     const csv = json2csvParser.parser(dumpData);
//     res.attachment("dumpData.csv");
//     res.status(200).send();
// });

// app.listen(6000, function(){
//     console.log("running");
// })
// console.log(csv);



pushData.postPtrackerData();

//Server PORT
db.sequelize.sync({}).then((req) => {
  app.listen(privateConfig.appConfig.PORT, (err) => {
      if (err) console.log(`Error: ${err}`)
      console.log(`${privateConfig.appConfig.Name}  listening on port ${privateConfig.appConfig.PORT}...  \n`);
  });
}).then(() => {
  console.log(`Succesfully connected to '${privateConfig.development.database}' database...  \n`)

}).catch(err => { console.log(`Error when connecting to '${privateConfig.development.database}' database...:: \n`, err) })
