let id;
async function youcangive(loll) {
  try {
    let url = `https://www.omdbapi.com/?s=${loll}&apikey=4178641e`;
    let outone = await fetch(url);
    let outtow = await outone.json();
    return outtow.Search;
  } catch (error) {
    console.log(error);
  }
}
async function hellobro() {
  let take = document.querySelector("#boom").value;
  let give = youcangive(take);
  let make = await give;
  appendhere(make);
}

let bomma = document.querySelector("#rama");
function appendhere(data) {
  bomma.innerHTML = null;
  if (data == undefined) {
    return false;
  } else {
    data.forEach(function (ele, index) {
      let cre = document.createElement("div");

      let one = document.createElement("h3");
      one.innerText = ele.Title;
      one.addEventListener("click", function () {
        anotherfunction(ele);
      });
      cre.append(one);
      bomma.append(cre);
    });
  }
}

function debouncing(praveen, ganesh) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    praveen();
  }, ganesh);
}

let seperate = document.querySelector("#ramaone");
function anotherfunction(data) {
  seperate.innerHTML = null;
  let create = document.createElement("div");

  let praveenone = document.createElement("img");
  praveenone.setAttribute("src", data.Poster);

  let praveentwo = document.createElement("h3");
  praveentwo.innerText = `Title :${data.Title}`;

  let praveenthree = document.createElement("h3");
  praveenthree.innerText = `Year :${data.Year}`;

  let praveenfour = document.createElement("h3");
  praveenfour.innerText = `Imdb :${data.imdbID}`;

  create.append(praveenone, praveentwo, praveenthree, praveenfour);

  seperate.append(create);
}