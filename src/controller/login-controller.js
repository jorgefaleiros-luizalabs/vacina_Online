// var conn = require('../database/connection');

function getLogin(id){
    return new Promise((resolve, reject) => {
        try {
            resolve('ok');
        } catch (err) {
            reject(err);
        }
    })
}

module.exports = {
    getLogin
}