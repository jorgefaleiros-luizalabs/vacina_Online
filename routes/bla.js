var express = require('express');
var router = express.Router();
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

/* GET users listing. */
router.get('/', function(req, res, next) {

  var config = {
    userName: 'ragnarok', // update me
    password: 'qw31hj67', // update me
    server: '172.21.29.26',
    options: {
      database:'hackatonpreta' 
    }
  }

  var connetion =  new Connection(config);

  connection.on('connect', function(err) {
    if(err) {
      console.log(err);
    } else {
      res.send('1');
      // request = new Request("select 123, 'hello world'", function(err, rowCount) {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     console.log(rowCount + ' rows');
      //   }
      //   connection.close();
      // });
      // request.on('row', function(columns) {
      //   columns.forEach(function(column) {
      //     if (column.value === null) {
      //       console.log('NULL');
      //     } else {
      //       console.log(column.value);
      //     }
      //   });
      // });
      // connection.execSql(request);
    }
  })
});

module.exports = router;
