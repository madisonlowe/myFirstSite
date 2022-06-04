let states = document.querySelector("#states");
states.addEventListener("click", changeState);
let index = 0;

let statesArr = [
  "Sheffielder",
  "Aquarius",
  "hobby gardener",
  "middling cook",
  "crochetier",
  "cat person",
  "lake swimmer",
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
