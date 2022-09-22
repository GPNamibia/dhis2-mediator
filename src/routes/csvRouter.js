//import controller
const pushDataController = require('../dhis2/pushData')

// import router
const router = require('express').Router()

//use router
router.post('/getCsv', pushDataController.getCsv)

module.exports=router;