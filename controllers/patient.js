var db_query = require('../db/executeQuery');
function savePatient(postData, next) {
    var currentDate = new Date(Date.now()).toLocaleString();
    if (!postData.name) return next("NoUserName");
    if (!postData.mobile) return next("NoMobileNumber");
    if (!postData.flag) return next("NoFlag");
    postData.deleted = 0; // default value
    var insertQuery = 'INSERT INTO cubezixpatient(name,mobile,createdDate,deleted,flag) VALUE(?,?,?,?,?)';
    db_query.paramQuery(insertQuery, [postData.name, postData.mobile, currentDate, postData.deleted,postData.flag], function (err, result) {
        if (err) return next(err);
        return next(null,result);
    });
}

function getPatients(next) {
    const selectQuery = 'SELECT * FROM cubezixpatient qp WHERE qp.deleted = ? '
    db_query.paramQuery(selectQuery,[0], function (err, result) {
        if (err) return next(err);
        return next(null,result);
    });
}

function deletepatient(pid, next) {
    if (!pid) return next("NoPatientId");
    const updateQuery = 'update cubezixpatient qp set qp.deleted= ? WHERE qp.pId = ? '
    db_query.paramQuery(updateQuery,[1,pid], function (err, result) {
        if (err) return next(err);
        return next(null,result);
    });
}

exports.savePatient = savePatient;
exports.getPatients = getPatients;
exports.deletepatient = deletepatient;
