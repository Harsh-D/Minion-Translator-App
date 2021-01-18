  var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");
var loader = document.querySelector(".loader");
var translatedSection = document.querySelector(".translated-section");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function clickEventHandler() {
  let inputText = textInput.value;
  
// Loader state: ON
loader.style.display = "block";

// Hide output section
translatedSection.style.display = "none";

  //call server for processing
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      loader.style.display = "none";
      translatedSection.style.display = "unset";
      outputDiv.innerText = json.contents.translated;
    })
    .catch((error) => {
      translatedSection.innerHTML = "<p>Server error <br/> You have run out of tries; Please try after some time</p>"
      translatedSection.style.fontFamily = "Arial, sans-serif";
      translatedSection.style.color = "red";
    });
}

btnTranslate.addEventListener("click", clickEventHandler);