// var conn = require('../database/connection');

function getUser(id){
    return new Promise((resolve, reject) => {
        try {
            resolve('ok');
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