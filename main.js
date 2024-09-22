const donatBtn = document.getElementById("donat-btn");

// ---value function
function inputValu(id) {
  return parseFloat(document.getElementById(id).value);
}

function innerText(id) {
  return parseFloat(document.getElementById(id).innerText);
}
// Donate btn click----1
// donatBtn.addEventListener("click", function () {
//   const myBalanc = innerText("my-balanc");
//   const donateAmount = inputValu("donate-input");
//   const donetShow = innerText("main-donate");
//   // -----
//   const addDonate = donetShow + donateAmount;
//   const outDonate = myBalanc - donateAmount;
//   document.getElementById("my-balanc").innerText = outDonate;
//   document.getElementById("main-donate").innerText = addDonate;
// });

function donateButton(e) {
  const myBalanc = innerText("my-balanc");
  const donateAmount = inputValu("donate-input");
  const donetShow = innerText("main-donate");
  // -----
  const addDonate = donetShow + donateAmount;
  const outDonate = myBalanc - donateAmount;
  document.getElementById("my-balanc").innerText = outDonate;
  document.getElementById("main-donate").innerText = addDonate;
}
