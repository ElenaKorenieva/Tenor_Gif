const API_KEY = "LIVDSRZULELA";
const searchButton = document.querySelector(".search-btn");
const input = document.querySelector(".search-val");

let inputVal = "";

searchButton.addEventListener("click", onButtonClick);
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault()
    onButtonClick()
  }
});

function onButtonClick() {
  inputVal = input.value.trim();
  if (inputVal === "") {
    document.querySelector(
      ".gallery-wrapper"
    ).innerHTML = `<p>Please enter valid request</p>`;
  } else {
    getData();
  }
  input.value = "";
}

function getData() {
  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    `https://g.tenor.com/v1/search?q=${inputVal}&key=${API_KEY}&limit=32`,
    true
  );
  xhr.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      const res = JSON.parse(this.responseText);
      let output = "";
      for (let el of res.results) {
        output += `<div class="image-container">
            <img src="${el.media[0].gif.url}"/></div>`;
      }
      document.querySelector(".gallery-wrapper").innerHTML = output;
    }
  };
  xhr.send();
}
