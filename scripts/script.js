function listeProposition(proposition) {
  let zoneProposition = document.querySelector(".zoneProposition");
  zoneProposition.innerText = proposition;
}

function lancerJeu() {
  let score = 0;
  let nbMotsProposes = 0;
  let i = 0;

  let btnValider = document.getElementById("btnValiderMot");
  let inputEcriture = document.getElementById("inputEcriture");

  listeProposition(listeMots[i]);
  btnValider.addEventListener("click", (event) => {
    console.log(inputEcriture.value);
    i++;
    listeProposition(listeMots[i]);
  });

  afficherResultat(score, nbMotsProposes);
}
