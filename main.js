//------DonationBtn funcation
const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");
const donationMainDiv = document.getElementById("donation-main-div");
const historyDiv = document.getElementById("history-div");
donationBtn.addEventListener("click", function () {
  historyBtn.classList.remove("bg-btn");
  donationBtn.classList.add("bg-btn");
  donationMainDiv.classList.remove("hidden");
  historyDiv.classList.add("hidden");
});

//------HistoryBtn funcation

historyBtn.addEventListener("click", function () {
  historyBtn.classList.add("bg-btn");
  donationBtn.classList.remove("bg-btn");
  historyDiv.classList.remove("hidden");
  donationMainDiv.classList.add("hidden");
});

const bolg = document.getElementById("blog");
bolg.addEventListener("click", function () {
  window.location.href = "./faq.html";
});

const donatBtn = document.getElementById("donat-btn");

// ---value function
function inputValu(id) {
  return parseFloat(document.getElementById(id).value);
}

function innerText(id) {
  return parseFloat(document.getElementById(id).innerText);
}
// -----card 1
function donateButton(e) {
  const myAmount = 5000;
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

  addHistory(donateAmount);

  // -----Modal add
}

// ------------------------ card 2
function donateButtonTwo(e) {
  const myAmount = 5000;
  const myBalanc = innerText("my-balanc");
  const donateAmount = inputValu("donate-input");
  const donetShow = innerText("main-donate-two");
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
  document.getElementById("main-donate-two").innerText = addDonate;

  addHistory(donateAmount);

  // -----Modal add
}
// -------card 3
function donateButtonThree(e) {
  const myAmount = 5000;
  const myBalanc = innerText("my-balanc");
  const donateAmount = inputValu("donate-input");
  const donetShow = innerText("main-donate-three");
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
  document.getElementById("main-donate-three").innerText = addDonate;

  addHistory(donateAmount);

  // -----Modal add
}

// // ---History active
function addHistory(donateAmount) {
  const historyDiv = document.createElement("div");
  historyDiv.className = "px-4 py-8 border-2 rounded-lg my-5 shadow-sm";
  historyDiv.innerHTML = `
  <span class="font-bold"> ${donateAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</span>
  <br />
  <p> Date : ${new Date().toLocaleDateString}</p>
  `;
  const historyShow = document.getElementById("history-div");
  historyShow.appendChild(historyDiv);
}

// // -----------------------
// function history(donateAmount) {
//   const historyDiv = document.createElement("div");
//   historyDiv.className = "bg-white border-l-2 rounded-lg border-orange-500 p-3";
//   historyDiv.innerHTML = `
//      <p>Income: $ ${donateAmount}</p>

//     `;

//   const expenseHistory = document.getElementById("history-div");
//   expenseHistory.appendChild(historyDiv);
// }
