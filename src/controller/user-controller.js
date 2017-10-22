// var conn = require('../database/connection');
var sqlRequest = require('../utils/request');
var sql = require('../database/connection');
var dateUtil = require('../utils/date');

function getUser(id){
    return new Promise((resolve, reject) => {
        try {
           sqlRequest.makeRequest('select Nome, Dt_Nasc, Sexo, Cep, Cartao_Sus from Pacientes where Matricula=' + id)
           .then((result) => {
                var res = result.recordset[0];
                res.Dt_Nasc = dateUtil.dateMoment(res.Dt_Nasc).format('DD/MM/YYYY');
                switch (res.Sexo){
                    case 1:
                        res.Sexo = 'Masculino'
                        break;
                    case 2:
                        res.Sexo = 'Feminino'
                }
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

            sqlRequest.makeRequest('select a.Vacina, v.Lote, v.Sequencia, v.Dt_Vacina \
                                    from Pacientes as p \
                                    JOIN vacina as v on p.Matricula = v.Matricula \
                                    JOIN aux_vacina as a ON v.Cod_Vacina = a.Cod_Vacina\
                                    where v.Matricula = '+ id +';')
            .then((response) => {
                var res = response.recordset;
                var payload = [];
                res.forEach((element) => {
                    var item = {
                        "name": null,
                        "dose": null,
                        "lote": null,
                        "date": null
                    }
                    item.name = element.Vacina;
                    item.dose = element.Sequencia;
                    item.lote = element.Lote;
                    item.date = dateUtil.dateMoment(element.Dt_Vacina).format('DD/MM/YYYY');
                    payload.push(item);
                }, this);
                resolve(payload);
            })
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