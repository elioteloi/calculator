// + [Addition]
// - [Subtraction]
// * [Multiplication]
// / [Division]
// % [Modulus]

let array = [];
const resultInput = document.getElementById("resultInput");
const one = document.getElementById("one");
const two = document.getElementById("two");
const tree = document.getElementById("tree");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const Addition = document.getElementById("Addition");
const Subtraction = document.getElementById("Subtraction");
const Multiplication = document.getElementById("Multiplication");
const Division = document.getElementById("Division");
const Modulus = document.getElementById("Modulus");
const Equal = document.getElementById("Equal");
const Clear = document.getElementById("clear");

const elementsArray = [
  resultInput,
  one,
  two,
  tree,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  zero,
  Addition,
  Subtraction,
  Multiplication,
  Division,
  Modulus,
];

elementsArray.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element);
    array.push(element.value);

    localStorage.setItem("array", JSON.stringify(array));

    console.log("local", localStorage);

    displayValue();
  });
});

Equal.addEventListener("click", () => {
  result = array.join("");

  console.log(result);

  console.log(eval(result));
  resultInput.value = eval(result);
});

Clear.addEventListener("click", () => {
  localStorage.removeItem("array");
  console.log(localStorage);
  location.reload();
});

function displayValue() {
  numInput = array.join("");
  resultInput.value = numInput;
}
