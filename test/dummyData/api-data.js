const empty_response = {
    results: []
}

const success_response = {
    "succcess": {
        "httpStatus": "OK",
        "httpStatusCode": 200,
        "status": "OK",
        "message": "Import was successful.",
        "response": {
            "responseType": "ImportSummary",
            "status": "SUCCESS",
            "importOptions": {
                "idSchemes": {},
                "dryRun": false,
                "async": false,
                "importStrategy": "CREATE_AND_UPDATE",
                "mergeMode": "REPLACE",
                "reportMode": "FULL",
                "skipExistingCheck": false,
                "sharing": false,
                "skipNotifications": false,
                "skipAudit": false,
                "datasetAllowsPeriods": false,
                "strictPeriods": false,
                "strictDataElements": false,
                "strictCategoryOptionCombos": false,
                "strictAttributeOptionCombos": false,
                "strictOrganisationUnits": false,
                "requireCategoryOptionCombo": false,
                "requireAttributeOptionCombo": false,
                "skipPatternValidation": false,
                "ignoreEmptyCollection": false,
                "force": false,
                "firstRowIsHeader": true,
                "skipLastUpdated": false,
                "mergeDataValues": false,
                "skipCache": false
            },
            "description": "Import process completed successfully",
            "importCount": {
                "imported": 0,
                "updated": 3,
                "ignored": 0,
                "deleted": 0
            },
            "conflicts": [],
            "dataSetComplete": "false"
        }
    }
}


const error_response = {
    "error": {
        "httpStatus": "Conflict",
        "httpStatusCode": 409,
        "status": "ERROR",
        "message": "An error occurred, please check import summary.",
        "response": {
            "responseType": "ImportSummary",
            "status": "ERROR",
            "importOptions": {
                "idSchemes": {},
                "dryRun": false,
                "async": false,
                "importStrategy": "CREATE_AND_UPDATE",
                "mergeMode": "REPLACE"
                ,
                "reportMode": "FULL",
                "skipExistingCheck": false,
                "sharing": false,
                "skipNotifications": false,
                "skipAudit": false,
                "datasetAllowsPeriods": false,
                "strictPeriods": false,
                "strictDataElements": false,
                "strictCategoryOptionCombos": false,
                "strictAttributeOptionCombos": false,
                "strictOrganisationUnits": false,
                "requireCategoryOptionCombo": false,
                "requireAttributeOptionCombo": false,
                "skipPatternValidation": false,
                "ignoreEmptyCollection": false,
                "force": false,
                "firstRowIsHeader": true,
                "skipLastUpdated": false,
                "mergeDataValues": false,
                "skipCache": false
            },

            "conflicts": []
        }
    }
}

module.exports={
    success_response,
    error_response
}

