// var Request = require('tedious').Request;
var conn = require('../database/connection')
var sql = require('mssql');

function makeRequest(query) {
  return new Promise((resolve, reject) => {
    try {
      var req = new sql.Request(conn.connection());
      conn.connection().connect()
      .then(() => {
        req.query(query, (err, result) => {
          conn.connection().close();
          resolve(result);
        });
      })
      .catch((error) => {
        reject(error);
      })
    } catch (err) {
      reject(err);
    }
  })
}

module.exports = { 
  makeRequest
}
