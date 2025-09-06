//FIFO: Fisrt In First Out

class Stack {
  #items = [];

  push(item) {
    this.#items.push(item);
  }

  pop() {
    return this.#items.pop();
  }
}

const miPila = new Stack();

miPila.push("Adri");
miPila.push("Adri2");

console.log("miPila: ", miPila)

miPila.pop();

console.log("miPila: ", miPila)