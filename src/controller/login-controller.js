var conn = require('../database/connection');

function getLogin(id){
    return new Promise((resolve, reject) => {
        try {
          conn().on('connect', (err) => {
            if (err) {
              console.log(err);
              reject(err);
            }
            resolve('ok');
          })
        } catch (err) {
            reject(err);
        }
    })
}

module.exports = {
    getLogin
}
