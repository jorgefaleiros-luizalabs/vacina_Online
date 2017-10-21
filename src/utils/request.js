var Request = require('tedious').Request;

function makeRequest(query) {
  var request = new Request(query, function(err, rowCount) {
    if (err) {
      console.log(err);
      return err;
    } 
    request.on('row', columns => {
      columns.forEach(column => { 
        if (column.value === null) {
          console.log('NULL');
        } else {
          console.log(column.value);
        }
      });
    });
  });
}

module.exports = makeRequest
