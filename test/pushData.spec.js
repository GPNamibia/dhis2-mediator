const chai = require('chai')
const ptrackerData = require('../src/dhis2/pushData');
const sinon = require('sinon');
const expect = chai.expect;
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const dummyData = require('./test/dummyData/fact_anc_dhis2_export.csv')

describe('Post Ptracker Data Function: postPtrackerData()', () => {
    const sandbox = sinon.createSandbox();
    afterEach(() => { sandbox.restore() });

    it(`should return a success message when data is posted on DHIS2`, () => {
        const getStub = sandbox.stub(ptrackerData, 'postPtrackerData')
            .resolves(true)
        ptrackerData.postPtrackerData(`./test/dummyData/fact_anc_dhi2_export.csv`)
            .then((result) => {
                expect(result).to.be.equal(true);
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch();
    })
    it(`should return error if there is no parameter`, () => {
        const getStub = sandbox.stub(ptrackerData, 'postPtrackerData')
            .resolves(true)
        ptrackerData.postPtrackerData()
            .then((result) => {
                expect(result).to.be.equal('Incorrect parameter passed');
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch();
    })
});


describe('Post Ptracker Data Function: postDataToDhis2()', () => {
    const sandbox = sinon.createSandbox();
    afterEach(() => { sandbox.restore() });
    it(`should return successfully send data to DHIS2`, () => {
        const getStub = sandbox.stub(ptrackerData, 'postDataToDhis2')
            .resolves(true)
        ptrackerData.postDataToDhis2()
            .then((result) => {
                expect(result).to.be.equal(true);
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch();


        it(`should return error if there are parameters`, () => {
            const getStub = sandbox.stub(ptrackerData, 'postDataToDhis2')
                .resolves(true)
            ptrackerData.postDataToDhis2()
                .then((result) => {
                    expect(result).to.be.equal('error');
                    expect(getStub).to.have.been.calledOnce;
                    done();
                })
                .catch();
        })
    })
})
describe('Post Ptracker Data Function: saveCsvFile()', () => {
    const sandbox = sinon.createSandbox();
    afterEach(() => { sandbox.restore() });
    it(`should save data before sending it to DHIS2`, () => {
        const getStub = sandbox.stub(ptrackerData, 'saveCsvFile')
            .resolves(true)
        ptrackerData.saveCsvFile(`./test/dummyData/fact_anc_dhi2_export.csv`, './test/dummyData/api-data.js')
            .then((result) => {
                expect(result).to.be.equal(true);
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch();
        it(`should return error if there are no parameter `, () => {
            const getStub = sandbox.stub(ptrackerData, 'saveCsvFile')
                .resolves(true)
            ptrackerData.saveCsvFile(`./test/dummyData/fact_anc_dhi2_export.csv`,'./test/dummyData/api-data.js')
                .then((result) => {
                    expect(result).to.be.equal(true);
                    expect(getStub).to.have.been.calledOnce;
                    done();
                })
                .catch();
        })
    })
})
