// var conn = require('../utils/request');
var sqlRequest = require('../utils/request');
var sql = require('../database/connection');
var UtilsDate = require('../utils/date');

function getLogin(susCard, birthDate){
    return new Promise((resolve, reject) => {
        try {
            let birth = UtilsDate.dateToString(birthDate);
            sqlRequest.makeRequest('select Matricula from Pacientes where Cartao_Sus = \'' + susCard + '\' and Dt_Nasc = \'' + birth + '\';' )
                .then(result => {
                var res = result.recordset[0];
                resolve(res);
                })
            .catch(error => {
              reject(error);
            });
        } catch (err) {
            reject(err);
        }
    })
}

module.exports = {
    getLogin
}
