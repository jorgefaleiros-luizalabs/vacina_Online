// var Request = require('tedious').Request;
var sql = require('../database/connection')

function makeRequest(query) {
  sql.connection()
    .then(pool => {
      return pool.request()
        .query(query);
    })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  })
  
}

module.exports = { 
  makeRequest
}
