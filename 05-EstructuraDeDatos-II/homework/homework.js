"use strict";

const { has } = require("markdown-it/lib/common/utils");

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  let node = new Node(value);
  let current = this.head;
  if (current === null) {
    this.head = node;
    return value;
  }

  while (current.next !== null) {
    current = current.next;
  }

  current.next = node;

  return node;
};
// LinkedList.prototype.search=function(elegido){
//   let current=this.head;
//   let check=true;
//   if(current.value===elegido) check=true;
//   while(!check && current.next){
//     current=current.next;
//     if(current.value===elegido) check=true
//   }
//   if(check){
//     return current
//   }else{
//     return undefined
//   }
// }
LinkedList.prototype.search = function (valor) {
  let current = this.head;
  if (!current) return false;
  if (typeof valor === "function" && valor(current.value)) {
    while (current) {
      if (valor(current.value)) {
        return current.value;
      } else {
        current = current.value;
      }
    }
    return null;
  } else {
    while (current) {
      if (current.value === valor) return valor;
      else {
        current = current.next;
      }
    }
    return null;
  }
};
// LinkedList.prototype.search = function (valor) {
//   let currentNode = this.head;

//   while (currentNode !== null) {
//     let currentNodeValue = currentNode.value;

//     if (typeof searchInput === 'function') {
//       if (searchInput(currentNodeValue)) {
//         return currentNodeValue;
//       }
//     } else if (typeof searchInput === 'string' || searchInput instanceof String) {
//       if (currentNodeValue === searchInput) {
//         return currentNodeValue;
//       }
//     } else if (typeof searchInput === 'object') {
//       if (JSON.stringify(currentNodeValue) === JSON.stringify(searchInput)) {
//         return currentNodeValue;
//       }
//     }

//     currentNode = currentNode.next;
//   }

//   return null;

// };
LinkedList.prototype.remove = function () {
  let current = this.head;
  if (!current) return null;
  if (!current.next) {
    this.head = null;
    return current.value;
  }
  if (current.next.next) {
    current = current.next;
  }
  let auxiliar = current.next.value;
  current.next = null;
  return auxiliar;
};

LinkedList.prototype.size = function () {
  let current = this.head;
  let counter = 0;

  if (current === null) {
    console.log("La lista está vacía");
    return;
  }

  while (current !== null) {
    counter++; // 1° vuelta = 1 >>> 2° vuelta = 2 >>> 3° vuelta >>> 3
    current = current.next;
  }

  return counter; // counter cerró con 3 y eso retorna
};

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.array = [];
  this.numBuckets = 35;
}
HashTable.prototype.hash = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.numBuckets;
};
HashTable.prototype.set = function (key, value) {
  if (typeof key !== "string") throw TypeError("Keys must be strings");

  let index = this.hash(key);

  if (!this.array[index]) {
    this.array[index] = {};
  }
  this.array[index][key] = value;
};
HashTable.prototype.get = function (clave) {
  let buscado = this.hash(clave);
  return this.array[buscado][clave];
};
HashTable.prototype.hasKey = function (value) {
  // doble negacion me devolvera el valor de verdad que tiene, como booleano, tambien funciona con un if
  return !!this.get(value);
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
