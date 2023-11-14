const API_KEY = "LIVDSRZULELA";
const searchButton = document.querySelector(".search-btn");

let inputVal = "";

searchButton.addEventListener("click", onButtonClick);

function onButtonClick() {
  const input = document.querySelector(".search-val");
  inputVal = input.value.trim();
  getData();
  input.value = "";
}

function getData() {
  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    `https://g.tenor.com/v1/search?q=${inputVal}&key=${API_KEY}&limit=8`,
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
