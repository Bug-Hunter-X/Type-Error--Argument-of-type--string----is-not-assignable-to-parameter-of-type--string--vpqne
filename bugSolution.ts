function greeter(person: string) {
  return "Hello, " + person;
}

function greeterArray(persons: string[]) {
  return "Hello, " + persons.join(' ');
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); // Correct: Outputs 'Hello, Jane Doe'

let singleUser = "Jane Doe";

console.log(greeter(singleUser)); // Correct: Outputs 'Hello, Jane Doe' 