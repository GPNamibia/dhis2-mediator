const assert = require("assert");
const { dhis2API } = require('../src/dhis2/dhis2-api');
const dhis2 = new dhis2API();
const { expect } = require('chai')
const sinon = require('sinon');
const express = require('express');
const { options } = require("request");
const app = express();

const {
    success_response,
    error_response 
} = require('./dummyData/api-data');


describe("DHIS2 API Function: sendRequest()", () => {
    const sandbox = sinon.createSandbox();
    afterEach(() => { sandbox.restore() });
    it(`should return a response with the SUCCESS status`, (done) => {
        const getStub = sandbox.stub(dhis2, 'sendRequest')
            .resolves({ response: { statusCode: 200 }, body: success_response })
            dhis2.postPtrackerData('./test/dummyData/fact_anc_dhis2_export.csv')
            .then((result) => {
                expect(result.response.statusCode).to.be.eq(200);
                let res = result.body;
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch(done);
    })

    it(`should return a response with conflict error, data element is not correct`, (done) => {
        const getStub = sandbox.stub(dhis2, 'sendRequest')
            .resolves({ response: { statusCode: 409 }, body: error_response })
            dhis2.postPtrackerData('./test/dummyData/fact_anc_dhis2_export.csv')
            .then((result) => {
                expect(result.response.statusCode).to.be.eq(409);
                let res = result.body;
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch(done);
    })

    
})