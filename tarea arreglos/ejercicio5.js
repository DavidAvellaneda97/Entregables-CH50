//1. imprimir a todas las personas 
let personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(personas);

//2. eliminar a dani del array
personas.splice(personas.indexOf("Dani"), 1);
console.log(personas); // ["Maria", "Luis", "Juan", "Camila"]

//3. eliminar a Juan del array
personas.splice(personas.indexOf("Juan"), 1);
console.log(personas); // ["Maria", "Luis", "Camila"]

//4. mover a Luis al frente del array
personas.splice(personas.indexOf("Luis"), 1);
personas.unshift("Luis");
console.log(personas); // ["Luis", "Maria", "Camila"]

// agregar mi nombre al final del array
personas.push("David");
console.log(personas); // ["Luis", "Maria", "Camila", "David"]


for (let i = 0; i < people.length; i++) {
    console.log(personas[i]);
    if (personas[i] === "Maria") {
      break;
    }
  }

  let indexMaria = personas.indexOf("Maria");
  console.log(indexMaria); // Índice de "Maria"
    