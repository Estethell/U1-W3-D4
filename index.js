// const numeroTabellone = 90;
const createCells = function () {
  const tabellone = document.getElementById("tabellone");
};

for (let i = 0; i < 90; i++) {
  const tombolaCellDiv = document.createElement("div");
  tombolaCellDiv.classList.add("cells");
  const tombolaCellh3 = document.createElement("h3");
  tombolaCellh3.innerText = i + 1;
  tombolaCellDiv.appendChild(tombolaCellh3);
  tabellone.appendChild(tombolaCellDiv);
  console.log(tabellone);
}

const button = document.getElementById("buttonFirst");
const numeriPescatiArr = [];

const bottoneFunzione = numeriPescatiArr.filter()
  for (i = 0; i < 90; i++) {
    const numeroGenerato = Math.floor(Math.random() * 91);

    if (parseInt(numeroGenerato) !== numeriPescatiArr[i]) {
      numeriPescatiArr.push(numeroGenerato);
    }
  }
};
function 

button.onclick = bottoneFunzione;
