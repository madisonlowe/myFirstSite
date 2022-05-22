let states = document.querySelector("#states");
states.addEventListener("click", changeState);
let index = 0;

let statesArr = [
  "bad cook",
  "Aquarius",
  "Sheffielder",
  "gardener",
  "crocheter",
  "cat person",
  "software developer",
];

// function changeState() {
//   let random = Math.floor(Math.random() * statesArr.length);
//   let randomState = statesArr[random];
//   states.textContent = `${randomState}.`;
//   return randomState;
// }

function changeState() {
  states.textContent = `${statesArr[index]}.`;
  index = (index + 1) % statesArr.length;
}
