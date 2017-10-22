var moment = require('moment-timezone');
moment.tz.setDefault('America/Sao_Paulo');

function dateToString(date) {
    var resp = moment(date).format('YYYY-MM-DD');
    return resp;
}

function dateMoment(date) {
    var resp = moment(date)
    return resp;
}

module.exports = {
    dateToString,
    dateMoment
}