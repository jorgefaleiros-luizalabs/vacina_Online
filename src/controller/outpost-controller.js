var sqlRequest = require('../utils/request');
var sql = require('../database/connection');
var dateUtil = require('../utils/date');

function getOutpost(){
    return new Promise((resolve, reject) => {
        try {
            sqlRequest.makeRequest('SELECT u.Nome_Fantasia, u.Telefone, r.Endereco, u.Nr_Casa, u.CEP \
                FROM hackatonpreta.dbo.unidades as u, hackatonpreta.dbo.AUX_rua as r \
                where u.Cod_Tp_Unidades = 2 and r.Cd_Rua = u.Cd_Rua;')
            .then((response) => {
                var res = response.recordset;
                var payload = [];
                res.forEach((element) => {
                    var item = {
                        "nome": null,
                        "telefone": null,
                        "endereco": null,
                        "numero": null,
                        "cep": null
                    }
                    item.nome = element.Nome_Fantasia;
                    item.telefone = element.Telefone;
                    item.endereco = element.Endereco;
                    item.cep = element.CEP;
                    item.numero = element.Nr_Casa;
                    payload.push(item);
                }, this);
                resolve(payload);
            }).catch((err) => {
                reject(err);
            })
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    getOutpost
}