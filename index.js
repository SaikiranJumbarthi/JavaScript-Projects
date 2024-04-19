//deposit button event handler
const deposit_btn = document.getElementById("deposit-btn");
deposit_btn.addEventListener("click", function () {
  const depositStringToInt = getInputNumb("deposit-amount");
  updateSpanTest("current-deposit", depositStringToInt);
  updateSpanTest("current-balance", depositStringToInt);
  //setting up the input field blank when clicked
  document.getElementById("deposit-amount").value = " ";
});

//Withdraw Button event handler
const withdraw_btn = document.getElementById("withdraw-btn");
withdraw_btn.addEventListener("click", function () {
  const withdrawNumb = getInputNumb("withdraw-amount");
  updateSpanTest("current-withdraw", withdrawNumb);
  updateSpanTest("current-balance", -1 * withdrawNumb);
  //setting up the input field blank when cliked
  document.getElementById("withdraw-amount").value = "";
});

//function to parse string input to int
function getInputNumb(idName) {
  const amount = document.getElementById(idName).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}

function updateSpanTest(idName, addedNumber) {
  //x1.1 updating balance the same way
  const current = document.getElementById(idName).innerText;
  const currentStringToInt = parseFloat(current);
  const total = currentStringToInt + addedNumber;
  //x2. settingthis value in balance
  document.getElementById(idName).innerText = total;
}
