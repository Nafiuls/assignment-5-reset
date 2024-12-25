function getElement(id) {
  return document.getElementById(id);
}

const historyButton = getElement("history-button");
const donationButton = getElement("donation-button");
const historyPage = getElement("history-page");
const donationPage = getElement("donate-page");

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
