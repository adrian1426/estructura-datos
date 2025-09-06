class People {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  sayHi() {
    return `Hi my name is ${this.name} ${this.lastName}`;
  }
}

const Adrian = new People("Adrian", "Hernandez");
console.log("Adrian: ", Adrian.sayHi());


const objetoA = {
  name: "juan",
  lastName: "perez"
};

const objetoB = { ...objetoA };

objetoB.name = "Adrian";

console.log("objetoA: ", objetoA.name);
console.log("objetoB: ", objetoB.name);