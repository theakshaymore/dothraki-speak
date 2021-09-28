var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var errorDiv = document.querySelector("#errorMessage");

var baseUrl = "https://api.funtranslations.com/translate/dothraki.json";

const getTranslationUrl = (text) => {
  return baseUrl + "?" + "text=" + text;
};

const errorHandler = (error) => {
  errorDiv.innerText =
    "We are sorry. You can only use this for 5 times per hour. Try again later!";
};

btnTranslate.addEventListener("click", () => {
  errorDiv.innerText = "";
  outputDiv.innerText = "";
  clickEventHandler();
});

const clickEventHandler = () => {
  var inputText = txtInput.value;
  if (inputText === "") {
    errorDiv.innerText = "Please enter some text";
  } else {
    fetch(getTranslationUrl(inputText))
      .then((response) => response.json())
      .then((json) => (outputDiv.innerText = json.contents.translated))
      .catch(errorHandler);
  }
};
