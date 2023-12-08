const provoBtn = document.querySelector('#provo-btn');
const rifilloBtn = document.querySelector('#rifillo-btn');
const inputi = document.querySelector('#numri');
const tekstiProvo = document.querySelector('#teksti-provo');
const historiaNumrave = document.querySelector('#historia-numrave');

let numriRendomte = Math.ceil(Math.random() * 100);
let historia = [];
let numriPerdoruesit = 0;

provoBtn.addEventListener('click', (event) => {
  event.preventDefault();
  numriPerdoruesit = +inputi.value;
  historia.push(numriPerdoruesit)
  historiaNumrave.innerText = historia;
  if (numriPerdoruesit === numriRendomte) {
    tekstiProvo.innerText = `E gjete me ${historia.length} perpjekje. Numri eshte: ${numriRendomte}`
  } else {
    if (numriPerdoruesit > numriRendomte) {
      tekstiProvo.innerText = `Provo numer me te vogel!`;
    } else if (numriPerdoruesit < numriRendomte) {
      tekstiProvo.innerText = `Provo numer me te madh!`;
    }
  }
  inputi.value = '';
})

rifilloBtn.addEventListener('click', (event) => {
  event.preventDefault();
  tekstiProvo.innerText = '';
  historia = [];
  historiaNumrave.innerText = historia;
  numriRendomte = Math.ceil(Math.random() * 100);
})