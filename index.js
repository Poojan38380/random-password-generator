const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const nubmerSet = "1234567890";
const symbolSet = "!@#$%^&*()_+";

const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("totalchar");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const genPassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerSet);
  }
  if (numberInput.checked) {
    password += getRandomData(nubmerSet);
  }
  if (symbolInput.checked) {
    password += getRandomData(symbolSet);
  }
  if (password.length < totalChar.value) {
    return genPassword(password);
  }

  passBox.innerText = truncateStr(password, totalChar.value);
};

document.getElementById("btn").addEventListener("click", function () {
  genPassword();
});
document.getElementById("btn-copy").addEventListener("click", function () {
  const element = document.querySelector("#pass-box");

  const storage = document.createElement("textarea");
  storage.value = element.innerHTML;
  element.appendChild(storage);

  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand("copy");
  element.removeChild(storage);

  alert("Password copied to clipboard");
});

function truncateStr(str, num) {
  if (str.length > num) {
    let substr = str.substring(0, num);
    return substr;
  } else {
    return str;
  }
}

function myFunction() {
  const copyText = document.getElementById("pass-box");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  alert("Copied the text: " + copyText.value);
}
