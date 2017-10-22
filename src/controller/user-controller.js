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
                res.Dt_Nasc = dateUtil.dateMoment(res.Dt_Nasc).add(4,"hour").format('DD/MM/YYYY');
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
            sqlRequest.makeRequest('select a.Vacina, a.Dose \
            from aux_vacina as a \
            join vacina as v on v.Cod_Vacina = a.Cod_Vacina \
            join Pacientes as p on v.Matricula = p.Matricula \
            where p.Matricula = '+ id +' AND \
            a.Classificacao = \'O\' and a.Max_Idade_Meses >= 9999 or \
            a.Max_Idade_Meses < datediff("mm", p.Dt_Nasc, GETDATE()) AND \
            a.Cod_Vacina not in (select Cod_Vacina from vacina where Matricula = p.Matricula )')
            .then((response) => {
                var res = response.recordset;
                var payload = [];
                res.forEach((element) => {
                    var item = {
                        "name": null,
                        "dose": null
                    }
                    item.name = element.Vacina;
                    item.dose = element.Dose;
                    payload.push(item);
                }, this);
                resolve(payload);
            })
        } catch (error) {
            throw error;
        }
    })
}

function getToComeVacine(id){
    return new Promise((resolve, reject) => {
        try {
            sqlRequest.makeRequest('select distinct a.Vacina, a.Dose \
            from aux_vacina as a \
            join vacina as v on v.Cod_Vacina = a.Cod_Vacina \
            join Pacientes as p on v.Matricula = p.Matricula \
            where p.Matricula = '+ id +' AND \
            a.Classificacao = \'O\' and \
            a.Max_Idade_Meses >= 9999 or \
            a.Max_Idade_Meses BETWEEN DATEDIFF(\"mm\", p.Dt_Nasc, GETDATE()) and (DATEDIFF(\"mm\", p.Dt_Nasc, GETDATE()) + 12) AND \
            a.Cod_Vacina not in (select Cod_Vacina from vacina where Matricula = p.Matricula);') 
            .then((response) => {
                var res = response.recordset;
                var payload = [];
                res.forEach((element) => {
                    let item = {
                        "name": null,
                        "dose": null 
                    }
                    item.name = element.Vacina;
                    item.dose = element.Dose;
                    payload.push(item);
                })
                resolve(payload);
            })
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