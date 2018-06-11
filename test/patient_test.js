var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "http://localhost:3000/v1";

describe('/POST  savepatient', function () {
    it('it should save a  patients', function (done) {
        request.post({
            "headers": { "content-type": "application/json" },
            "url": baseUrl + "/savepatient",
            "body": JSON.stringify({
                "name": "sarinath",
                "mobile": "8860525328",
                "deleted": 0
            })
        }, (err, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

describe('/GET  Patients', function () {
    it('it should GET all the patients', function (done) {
        request.get({ url: baseUrl + '/getpatients' },
            function (error, response, body) {
                var bodyObj = JSON.parse(body);
                expect(response.statusCode).to.equal(200);
                done();
            });
    });
});

describe('/GET  deletepatient', function () {
    it('it should delete a  patients', function (done) {
        request.get({ url: baseUrl + '/deletepatient?pid=12' },
            function (error, response, body) {
                var bodyObj = JSON.parse(body);
                expect(response.statusCode).to.equal(200);
                done();
            });
    });
});
