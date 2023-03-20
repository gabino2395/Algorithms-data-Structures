function LinkedList() {
  this.head = null;
}

function Node(element) {
  //
  this.value = element;
  this.next = null;
}

LinkedList.prototype.add = function (element) {
  // 2
  let node = new Node(element); // instancia un nodo y tenemos como resultado>>> Node{value: 2, next: null}
  let current = this.head; // el HEAD contiene a TODOS los nodos>>> head: { Node: {value: 5, next: Node {value: 7, next: null}} }

  if (current === null) {
    // acá entra sólo para enganchar el primer nodo y nunca más
    this.head = node; // de esta forma this.head ya no es=> head:null, pasa a ser el nodo=> head: { Node: {value:5, next: null}}
    return node; // sólo retorna el nodo que creamos en la línea 11 >>> Node{value: 2, next: null}
  }

  while (current.next !== null) {
    // sólo entro acá si next NO es null
    current = current.next; // esto hace que podamos recorrer la lista=> si current es head, pisamos eso con el nodo que hay en la prop next
    //Ejemplo:
    // current = this.head >>> Node: {value: 5, next: Node {value: 7, next: null}}
    // current = current.next >>> current.next es => Node {value: 7, next: null} => esto pasa a ser el CURRENT
    // ahora >>> current es: Node {value: 7, next: null}
    // hace una vuelta más y tenemos que:
    // current.next = null
    // Acá corta el while
  }

  current.next = node; // current quedó con el valor que salió del while, es decir que:
  // current = Node {value: 7, next: null}
  // como ese NEXT está en null, allí ''enganchamos'' al nuevo nodo, es decir que:
  // pisamos el ''null'' de la propiedad next por el nodo y tenemos:
  // Node {value: 7, next: Node{ value: 2, next: null} }

  return node; // sólo retorna el nodo que creamos en la línea 11 >>> Node{value: 2, next: null}
};

LinkedList.prototype.size = function () {
  let current = this.head; // en este punto, this.head es >>>
  // head: { Node: {value: 5, next: Node {value: 7, next: Node{value: 2, next: null} } } }
  let counter = 0; // counter inicia en 0

  if (current === null) {
    // esto es por si no hay una lista creada,sino no entra
    console.log("La lista está vacía");
    return;
  }

  while (current !== null) {
    // con el while recorremos la lista mientras que current, es decir el nodo, no esté en null
    // 1° vuelta, current:  Node: {value: 5, next: Node {value: 7, next: Node{value: 2, next: null} } }
    // como no es null, entra al while, aumenta cunter y cambia el current
    // current = current.next >>> es decir que current va a ser lo que haya en la propiedad next, por lo cual queda:
    // current = Node {value: 7, next: Node{value: 2, next: null} }
    // 2° vuelta, current: Node {value: 7, next: Node{value: 2, next: null} }
    // como no es null, entra al while, aumenta cunter y cambia el current
    // current = current.next >>> es decir que current va a ser lo que haya en la propiedad next, por lo cual queda:
    // current = Node{value: 2, next: null}
    // 3° vuelta, current: Node{value: 2, next: null}
    // como no es null, entra al while, aumenta cunter y cambia el current
    // current = current.next >>> es decir que current va a ser lo que haya en la propiedad next, por lo cual queda:
    // current = null
    // 4° vuelta >>> ahora es null, entonces no entra más al while
    counter++; // 1° vuelta = 1 >>> 2° vuelta = 2 >>> 3° vuelta >>> 3
    current = current.next;
  }

  return counter; // counter cerró con 3 y eso retorna
};

let newList = new LinkedList();
console.log(newList.add(5)); // Node { value: 5, next: null }
console.log(newList.add(7)); // Node { value: 7, next: null }
console.log(newList.add(2)); // Node { value: 2, next: null }
console.log(newList.size()); // 3
console.log(newList); // LinkedList{ head: Node { value: 5, next: Node { value: 7, next: Node { value: 2, next: null } } } }
