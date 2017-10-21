// var conn = require('../utils/request');
var sqlRequest = require('../utils/request');
var sql = require('../database/connection');

function getLogin(susCard, birthDate){
    return new Promise((resolve, reject) => {
        try {
          sqlRequest.makeRequest('select Matricula from Pacientes where Cartao_Sus = \'' + susCard + '\' and Dt_Nasc = \'' + birthDate + '\'')
            .then(result => {
              var res = result.recordset[0];
              resolve(res);
              console.log(res);
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
