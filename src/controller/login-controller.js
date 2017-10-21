var conn = require('../utils/request');

function getLogin(id){
    return new Promise((resolve, reject) => {
        try {
          conn.makeRequest('select * from Pacientes');
        } catch (err) {
            reject(err);
        }
    })
}

module.exports = {
    getLogin
}
