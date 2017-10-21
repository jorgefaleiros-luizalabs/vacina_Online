var Connection = require('tedious').Connection;

var config = {
  userName: 'ragnarok', // update me
  password: 'qx31hg67', // update me
  server: '172.21.29.26',
  options: {
    port: 1433,
    database: 'hackatonpreta',
    connectTimeout: 1000,
    requestTimeout: 1000
  }
}



function connection() {

    try {
      return new Connection(config);
    } catch (err) {
      throw err;
    }
}

// connection.on('connect', function(err) {
//   if (err) {
//     console.log(err);
//   }});

module.exports = connection
