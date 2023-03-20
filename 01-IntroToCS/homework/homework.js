"use strict";

function BinarioADecimal(num) {
  num = num.split("").reverse();
  let suma = 0;
  for (let i = 0; i < num.length; i++) {
    // suma += Math.pow(2);
    suma += num[i] * 2 ** i;
  }
  return suma;
  //otra opcion
  let decimal = Number("0b" + num);
  return decimal;
}

function DecimalABinario(decimal) {
  // return decimal.toString(2)
  let binario2 = "";

  while (decimal > 0) {
    let residuo = decimal % 2;
    binario2 = residuo.toString() + binario2;
    decimal = Math.floor(decimal / 2);
  }

  return binario2;
  //   let binario = "";

  //   while (decimal > 0) {
  //     // Divide el decimal entre 2 y obtiene el residuo
  //     let residuo = decimal % 2;

  //     // Agrega el residuo al comienzo de la cadena binaria
  //     binario = residuo.toString() + binario;

  //     // Divide el decimal entre 2 para la siguiente iteración
  //     decimal = Math.floor(decimal / 2);
  //   }

  //   // Si el número es 0, la representación binaria es 0
  //   if (binario === "") {
  //     binario = "0";
  //   }

  //   return binario;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
