
var patient = require('../controllers/patient');
var auth = require('../controllers/authenticate');
var errs = require('restify-errors');

module.exports = function (server) {
    server.use(auth.isAuthenticate);

    server.post('/savepatient', (req, res, next) => {
        const post_data = req.body;
        patient.savePatient(post_data, (err, response) => {
            if (err) return res.send(500, { ErrorMessage: err });
            return res.send(200, { data: 'One row affected' });
   
        });
    });

    server.get('/getpatients', (req, res, next) => {
        patient.getPatients((err, response) => {
            if (err) return res.send(500, { ErrorMessage: err});
            return res.send(200, response);
        });
    });

    server.get('/deletepatient', (req, res, next) => {
        const patientId = req.query.pid;
        patient.deletepatient(patientId, (err, response) => {
            if (err) return res.send(500, { ErrorMessage: err});
            return res.send(200, { data: 'One row affected' });
    
        });
    });


}