const numeros = [1, 2, 3, 4, 5, 6];

const sumAllElements = (array) => {
  return array.reduce((acc, item) => acc + item, 0);
};

console.log("suma de todos: ", sumAllElements(numeros));