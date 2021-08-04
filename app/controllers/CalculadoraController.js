const { json } = require("express");

module.exports = function (app) {

    var calculadoraRepository = new app.app.repositorys.CalculadoraRepository();

    app.get('/calculoDetalhado', (req, res) => {

        var CalcService = require("../services/CalculadoraService");
        var Calculadora = require("../domains/Calculadora");

        var calculadora = new Calculadora();

        calculadora = CalcService.calculoDetalhado(req);

        calculadoraRepository.save(calculadora, function (error, resultClient) {

            var resultClient = new Object();

            if (error != null) {

                resultClient.code = 0;
                resultClient.message = "Erro na gravação dos dados";
                resultClient.details = error;

            }
            else {

                resultClient.code = 1;
                resultClient.message = "Registro gravado com sucesso";

            }

            res.send(calculadora);

        }) 

    });

    app.get('/calculoResumido', (req, res) => {

        var CalcService = require("../services/CalculadoraService");
        var Calculadora = require("../domains/Calculadora");

        var calculadora = new Calculadora();

        calculadora = CalcService.calculoResumido(req);

        calculadoraRepository.save(calculadora, function (error, resultClient) {

            var resultClient = new Object();

            if (error != null) {

                resultClient.code = 0;
                resultClient.message = "Erro na gravação dos dados";
                resultClient.details = error;

            }
            else {

                resultClient.code = 1;
                resultClient.message = "Registro gravado com sucesso";

            }

            res.send(calculadora);

        }) 

    });

    app.post("/calculadora", function (req, res) {


        var calculadora = req.body;

        calculadoraRepository.save(calculadora, function (error, result) {

            var resultClient = new Object();

            if (error != null) {

                resultClient.code = 0;
                resultClient.message = "Error while save one new record!";
                resultClient.details = error;

            }
            else {

                resultClient.code = 1;
                resultClient.message = "Record saved successfully!";

            }

            res.send(json(calculadora));

        });

    });

}
