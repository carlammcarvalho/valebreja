
var inputfuncionarios = document.querySelector('#func');
var inputvale = document.querySelector('#vale');
var inputtotal = document.querySelector('#total');

function calcular (){
  if (inputfuncionarios <= 100 && inputfuncionarios < 200){
    var total1 = (inputfuncionarios.value * inputvale.value) * 1.05;
    inputtotal.value = total1;
}
  else if (inputfuncionarios >=200){
  var total1 = (inputfuncionarios.value * inputvale.value) * 1.1;
  inputtotal.value = total2;
}

  else if(inputfuncionarios < 100){
    var total3 = inputfuncionarios.value * inputvale.value;
    inputtotal.value = total3;
  }
}
