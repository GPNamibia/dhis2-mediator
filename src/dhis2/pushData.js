const {dhis2API} = require ('./dhis2-api');

const dhis2=new dhis2API();


async function postPtrackerData() {
  await dhis2.postPtrackerData().then((response)=>{
    console.log(response);
  }).catch(error=>{
    console.log(error)
  })
} 

module.exports = {
  postPtrackerData
}