// var conn = require('../database/connection');

function getVacineStatus(id){
    return new Promise((resolve, reject) => {
        try {
            resolve('ok');
        } catch (err) {
            reject(err);
        }
    })
}

module.exports = {
    getVacineStatus
}