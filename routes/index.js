
var patient = require('../controllers/patient');
var auth = require('../controllers/authenticate');
var errs = require('restify-errors');

module.exports = function (server) {
    server.use(auth.isAuthenticate);

    server.post('/savepatient', (req, res, next) => {
        const post_data = req.body;
        patient.savePatient(post_data, (err, response) => {
            if (err) return res.send(400, { DisplayMessage: err });
            return res.send(200, { data: response });
        });
    });

    server.get('/getpatients', (req, res, next) => {
        const post_data = req.body;
        patient.getPatients(post_data, (err, response) => {
            if (err) return res.send(400, { DisplayMessage: err });
            return res.send(200, response);
        });
    });

    server.get('/deletepatient', (req, res, next) => {
        const patientId = req.query.pid;
        console.log("deletepatient:" + patientId);
        patient.deletepatient(patientId, (err, response) => {
            if (err) return res.send(400, { DisplayMessage: err });
            return res.send(200, response);
        });
    });


}