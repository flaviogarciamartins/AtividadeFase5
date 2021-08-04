module.exports.calculoResumido = function(req){

  var Calculadora = require("../domains/Calculadora");
  const taxa = 1.2;
  //const { json } = require("express");

  var calculadora = new Calculadora();
    
  calculadora.depositoInicial = req.query.depositoInicial;
  calculadora.depositoMensal = req.query.depositoMensal;
  
  calculadora.tempoResgate = req.query.tempoResgate;
  calculadora.valorFinal = calculadora.depositoInicial;

  for (var i = 0; i < calculadora.tempoResgate; i++) {

    calculadora.valorFinal = (parseFloat(calculadora.valorFinal) +
                             parseFloat(calculadora.depositoMensal) +
                             parseFloat(calculadora.valorFinal * (taxa/100))).toFixed(2);

 }
 
  return calculadora;

}

module.exports.calculoDetalhado = function(req){

  var calculoList = new Array();
  var Calculadora = require("../domains/Calculadora");
  var CalculoMensal = require("../domains/CalculoMensal")
  const taxa = 1.2;
  const { json } = require("express");
    
  var calculadora = new Calculadora();

  calculadora.depositoInicial = req.query.depositoInicial;
  calculadora.depositoMensal = req.query.depositoMensal;
  calculadora.tempoResgate = req.query.tempoResgate;
  calculadora.valorFinal = calculadora.depositoInicial;

  for (var i = 1; i <= calculadora.tempoResgate; i++) {i

    var calculoMensal = new CalculoMensal();

    calculoMensal.mes = i;
    calculoMensal.valorInicial = calculadora.valorFinal;
    calculoMensal.valorFinal = (parseFloat(calculadora.valorFinal) +
                                parseFloat(calculadora.depositoMensal) +
                                parseFloat(calculadora.valorFinal * (taxa/100))).toFixed(2);

    calculoList.push(calculoMensal);
    calculadora.valorFinal = calculoMensal.valorFinal;

  }
  
  calculadora.meses = calculoList;

  return calculadora;

}
