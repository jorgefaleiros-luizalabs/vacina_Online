// var conn = require('../database/connection');
var sqlRequest = require('../utils/request');
var sql = require('../database/connection');

function getUser(id){
    return new Promise((resolve, reject) => {
        try {
           sqlRequest.makeRequest('select * from Pacientes where Matricula=' + id)
           .then((result) => {
                var res = result.recordset[0];
                resolve(res);
           })
           .catch((error) => {
               reject(error)
           })
        } catch (err) {
            reject(err);
        }
    })
}
function getInTimeVacine(id){
    return new Promise((resolve, reject) => {
        try {
            resolve('ok');
        } catch (error) {
            throw error;
        }
    })
}

function getOutTimeVacine(id){
    return new Promise((resolve, reject) => {
        try {
            resolve('ok');
        } catch (error) {
            throw error;
        }
    })
}

function getToComeVacine(id){
    return new Promise((resolve, reject) => {
        try {
            resolve('ok');
        } catch (error) {
            throw error;
        }
    })
}

module.exports = {
    getUser,
    getInTimeVacine,
    getOutTimeVacine,
    getToComeVacine
}