const donatBtn = document.getElementById("donat-btn");

// ---value function
function inputValu(id) {
  return parseFloat(document.getElementById(id).value);
}

function innerText(id) {
  return parseFloat(document.getElementById(id).innerText);
}

function donateButton(e) {
  const myBalanc = innerText("my-balanc");
  const donateAmount = inputValu("donate-input");
  const donetShow = innerText("main-donate");
  // --if conditaion add

  if (donateAmount < 0 || isNaN(donateAmount)) {
    return alert("no");
  } else {
    const modal = document.getElementById("my-modal");
    modal.showModal();
  }
  // -----
  const addDonate = donetShow + donateAmount;
  const outDonate = myBalanc - donateAmount;
  document.getElementById("my-balanc").innerText = outDonate;
  document.getElementById("main-donate").innerText = addDonate;

  // -----Modal add
}
