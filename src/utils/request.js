// var Request = require('tedious').Request;
var sql = require('../database/connection')

function makeRequest(query) {
  return new Promise((resolve, reject) => {
    try {
      sql.connection()
        .then(pool => {
          return pool.request()
            .query(query);
        })
      .then(result => {
        pool.close();
        resolve(result);
      })
      .catch(err => {
        console.log(err);
       })
    } catch (err) {
      reject(err);
    }

  })

}

module.exports = { 
  makeRequest
}
