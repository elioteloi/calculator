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

one.addEventListener("click", () => {
  array.push(one.value);

  localStorage.setItem("array", JSON.stringify(array));

  console.log("local", localStorage);

  displayValue();
});

two.addEventListener("click", () => {
  array.push(two.value);

  localStorage.setItem("array", JSON.stringify(array));
  console.log("local", localStorage);

  displayValue();
});

tree.addEventListener("click", () => {
  array.push(tree.value);

  localStorage.setItem("array", JSON.stringify(array));
  console.log("local", localStorage);

  displayValue();
});

four.addEventListener("click", () => {
  array.push(four.value);

  localStorage.setItem("array", JSON.stringify(array));
  console.log("local", localStorage);

  displayValue();
});

five.addEventListener("click", () => {
  array.push(five.value);

  localStorage.setItem("array", JSON.stringify(array));
  console.log("local", localStorage);

  displayValue();
});

six.addEventListener("click", () => {
  array.push(six.value);

  localStorage.setItem("array", JSON.stringify(array));
  console.log("local", localStorage);

  displayValue();
});

seven.addEventListener("click", () => {
  array.push(seven.value);

  localStorage.setItem("array", JSON.stringify(array));
  console.log("local", localStorage);

  displayValue();
});

eight.addEventListener("click", () => {
  array.push(eight.value);

  localStorage.setItem("array", JSON.stringify(array));
  console.log("local", localStorage);

  displayValue();
});

nine.addEventListener("click", () => {
  array.push(nine.value);

  localStorage.setItem("array", JSON.stringify(array));
  console.log("local", localStorage);

  displayValue();
});

zero.addEventListener("click", () => {
  array.push(zero.value);

  localStorage.setItem("array", JSON.stringify(array));
  console.log("local", localStorage);

  displayValue();
});

Addition.addEventListener("click", () => {
  array.push(Addition.value);

  localStorage.setItem("array", JSON.stringify(array));
  console.log("local", localStorage);

  displayValue();
});

Subtraction.addEventListener("click", () => {
  array.push(Subtraction.value);

  localStorage.setItem("array", JSON.stringify(array));
  console.log("local", localStorage);

  displayValue();
});

Multiplication.addEventListener("click", () => {
  array.push(Multiplication.value);

  localStorage.setItem("array", JSON.stringify(array));
  console.log("local", localStorage);

  displayValue();
});

Division.addEventListener("click", () => {
  array.push(Division.value);

  localStorage.setItem("array", JSON.stringify(array));
  console.log("local", localStorage);

  displayValue();
});

Modulus.addEventListener("click", () => {
  array.push(Modulus.value);

  localStorage.setItem("array", JSON.stringify(array));
  console.log("local", localStorage);

  displayValue();
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
