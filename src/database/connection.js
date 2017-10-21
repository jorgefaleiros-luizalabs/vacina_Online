// var Connection = require('tedious').Connection;
var mssql = require('mssql')

var config = {
  user: 'ragnarok', // update me
  password: 'qx31hg67', // update me
  server: '172.21.29.26',
  database: 'hackatonpreta'
}


function connection() {
    try {
      return mssql.connect(config);
    } catch (err) {
      throw err;
    }
}

module.exports = { 
  connection
}
