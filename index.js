function getElement(id) {
  return document.getElementById(id);
}

const historyButton = getElement("history-button");
const donationButton = getElement("donation-button");
const historyPage = getElement("history-page");
const donationPage = getElement("donate-page");
const totalMoney = parseFloat(getElement("total-money").innerHTML);
const totalElm = getElement("total-money");
const donateNoakhaliBtn = getElement("donate-noakhali");
const donateFeniBtn = getElement("donate-feni");
historyButton.addEventListener("click", () => {
  historyPage.classList.remove("hidden");
  donationPage.classList.add("hidden");

  historyButton.classList =
    "bg-[#b4f461] px-5 py-2 rounded-md text-xl font-semibold";
  donationButton.classList =
    "border border-gray-400 px-5 py-2 rounded-md text-xl font-semibold";
});

donationButton.addEventListener("click", () => {
  historyPage.classList.add("hidden");
  donationPage.classList.remove("hidden");
  donationButton.classList =
    "bg-[#b4f461] px-5 py-2 rounded-md text-xl font-semibold";
  historyButton.classList =
    "border border-gray-400 px-5 py-2 rounded-md text-xl font-semibold";
});

donateNoakhaliBtn.addEventListener("click", () => {
  const amount = parseFloat(getElement("noakhali-input").value);
  const nTotal = parseFloat(getElement("noakhali-total").innerHTML);
  const noakhaliTotal = getElement("noakhali-total");
  const modal = getElement("modal");
  const historyPage = getElement("history-page");
  if (amount < 0 || amount === NaN || amount === 0) {
    alert("Please enter a valid amount");
    return;
  }
  const remaining = totalMoney - amount;
  const total = nTotal + amount;
  totalElm.innerText = remaining;
  noakhaliTotal.innerText = total;
  modal.showModal();
  const historyItem = document.createElement("div");
  historyItem.className = "border rounded-md p-3";
  historyItem.innerHTML = `
  <h1 class="mb-3 font-bold text-xl">${amount} taka is donated for flood at Noakhali</h1>
  <p>Date: ${new Date().toLocaleString()}</p>
  `;
  historyPage.insertBefore(historyItem, historyPage.firstChild);
});

donateFeniBtn.addEventListener("click", () => {
  const amount = parseFloat(getElement("feni-input").value);
  const fTotal = parseFloat(getElement("feni-total").innerHTML);
  const feniTotal = getElement("feni-total");
  const modal = getElement("modal");
  const historyPage = getElement("history-page");
  if (amount < 0 || amount === NaN || amount === 0) {
    alert("Please enter a valid amount");
    return;
  }
  const remaining = totalMoney - amount;
  const total = fTotal + amount;
  totalElm.innerText = remaining;
  feniTotal.innerText = total;
  modal.showModal();
  const historyItem = document.createElement("div");
  historyItem.className = "border rounded-md p-3";
  historyItem.innerHTML = `
  <h1 class="mb-3 font-bold text-xl">${amount} taka is Donate for Flood Relief in Feni,Bangladesh</h1>
  <p>Date: ${new Date().toLocaleString()}</p>
  `;
  historyPage.insertBefore(historyItem, historyPage.firstChild);
});
