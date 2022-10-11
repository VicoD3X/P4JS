// Fonction qui sert pour la navigation responsive. 
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Récupération des éléments html dont on aura besoin
const modalbg = document.querySelector(".bground");
const modalFinish = document.querySelector(".bgfinish")
const formData = document.querySelectorAll(".formData");
const formulaire = document.getElementById("formulaire")

//////////////////////////////////////////////////////////
// Gestion de l'affichage de la modale
//////////////////////////////////////////////////////////

// On récupère les deux boutons "Je m'inscris" (Celui grand écran et celui responsive)
const modalBtn = document.querySelectorAll(".modal-btn");
// Quand on clique sur n'importe lesquel des boutons, on affiche la modale. 
modalBtn.forEach((btn) => btn.addEventListener("click", afficherModal));

// Afficher la modale
function afficherModal() {
  modalbg.style.display = "block";
}

// Cette fonction ferme la modale
let boutonFermer = document.getElementById("closeBouton")
boutonFermer.addEventListener("click", closeModal)
function closeModal() {
  modalbg.style.display = "none";
  // TODO : FAIT
}


//////////////////////////////////////////////////////////
// Gestion du formulaire
//////////////////////////////////////////////////////////
let inputPrenom = document.getElementById("first")
let inputNom = document.getElementById("last")
let inputMail = document.getElementById("email")
let inputBirthdate = document.getElementById("birthdate");
let inputDataNmb = document.getElementById("quantity")
let inputCheckbox = document.querySelectorAll(".radioInput")
let inputUser = document.getElementById("checkbox1")

// ------------- Gestion des messages d'erreur 

let alertDiv = document.getElementById("warnText")
let alertDivFirst = document.getElementById("warnFirst")
let alertDivLast = document.getElementById("warnLast")
let alertDivBirthdate = document.getElementById("warnDate")
let alertDivData = document.getElementById("warnData")
let alertDivCheckbox = document.getElementById("warnCheckbox")
let alertDivUser = document.getElementById("warnUser")
let inputClose = document.getElementById("btnOut")








//////////////////////////////////////////////////////////
// Activation et appel des fonctions + Validation avant fermeture du form
//////////////////////////////////////////////////////////

function validate(event) {
  event.preventDefault();

  let isSurnameValide = checkInputPrenom(inputPrenom);
  let isNameValide = checkInputNom(inputNom);
  let isMailValide = checkInputMail(inputMail);
  let isBirthdateValide = checkInputBirthdate(inputBirthdate)
  let isDataValide = checkInputData(inputDataNmb)
  let isCheckboxValide = checkInputCheckbox()
  let isUserValide = checkUserCondition(inputUser)
  if (isCheckboxValide && isBirthdateValide && isMailValide && isDataValide && isNameValide && isSurnameValide && isUserValide) {
    closeForm()
  }

}










//////////////////////////////////////////////////////////
// Gestion et reglage des differents Input et alert du form
//////////////////////////////////////////////////////////



//----------------------------------------------------
// INPUT ET ALERT DU PRENOM

inputPrenom.addEventListener('change', function (event) {   //Gestion de la validation en continu
  checkInputPrenom(event.target);
});

function checkInputPrenom(inputPrenom) {

  let regexInputFL = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/

  if (inputPrenom.value.match(regexInputFL)) {
    alertDivFirst.style.display = "none"
    inputPrenom.style.border = "0px solid #FFFFFF"
    return true
  }
  else {
    alertDivFirst.innerHTML = "Attention, votre prenom est invalide"
    alertDivFirst.style.fontSize = "12px"
    alertDivFirst.style.color = "red"
    alertDivFirst.style.display = "contents"
    inputPrenom.style.border = "2px solid #e54858"
    return false
  }
}




//----------------------------------------------------
// INPUT ET ALERT DU NOM

inputNom.addEventListener('change', function (event) {   //Gestion de la validation en continu   
  checkInputNom(event.target);
});

function checkInputNom(inputNom) {

  let regexInputFLB = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/

  if (inputNom.value.match(regexInputFLB)) {
    alertDivLast.style.display = "none"
    inputNom.style.border = "0px solid #FFFFFF"
    return true
  }
  else {
    alertDivLast.innerHTML = "Attention, votre nom est invalide"
    alertDivLast.style.fontSize = "12px"
    alertDivLast.style.color = "red"
    alertDivLast.style.display = "contents"
    inputNom.style.border = "2px solid #e54858"
    return false
  }
}




//----------------------------------------------------
// INPUT ET ALERT DU MAIL

inputMail.addEventListener('change', function (event) {   //Gestion de la validation en continu
  checkInputMail(event.target);
});

function checkInputMail(inputMail) {

  let regexInputMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (inputMail.value.match(regexInputMail)) {
    alertDiv.style.display = "none"
    inputMail.style.border = "0px solid #FFFFFF"
    return true
  }
  else {
    alertDiv.innerHTML = "Attention, votre mail est invalide"
    alertDiv.style.fontSize = "12px"
    alertDiv.style.color = "red"
    alertDiv.style.display = "contents"
    inputMail.style.border = "2px solid #e54858"
    return false
  }
}




//----------------------------------------------------
// INPUT ET ALERT DE LA DATE DE NAISSANCE

inputBirthdate.addEventListener('change', function (event) {   //Gestion de la validation en continu
  checkInputBirthdate(event.target);
});

function checkInputBirthdate(inputBirthdate) {

  if (inputBirthdate.value != "") {
    alertDivBirthdate.style.display = "none"
    inputBirthdate.style.border = "0px solid #FFFFFF"
    return true
  }
  else {
    alertDivBirthdate.innerHTML = "Attention, votre date de naissance est invalide"
    alertDivBirthdate.style.fontSize = "12px"
    alertDivBirthdate.style.color = "red"
    alertDivBirthdate.style.display = "contents"
    inputBirthdate.style.border = "2px solid #e54858"
    return false
  }
}




//----------------------------------------------------
// INPUT ET ALERT DU NOMBRE DE COMPETION JOUÉ


inputDataNmb.addEventListener('change', function (event) {   //Gestion de la validation en continu
  checkInputData(event.target);
});

function checkInputData(inputDataNmb) {

  let regexDataNbr = /[0-9]{1,9}/

  if (inputDataNmb.value.match(regexDataNbr)) {
    alertDivData.style.display = "none"
    inputDataNmb.style.border = "0px solid #FFFFFF"
    return true
  }
  else {
    alertDivData.innerHTML = "Attention, votre nombre est invalide ou n'est pas un nombre"
    alertDivData.style.fontSize = "12px"
    alertDivData.style.color = "red"
    alertDivData.style.display = "contents"
    inputDataNmb.style.border = "2px solid #e54858"
    return false
  }
}




//----------------------------------------------------
// INPUT ET ALERT DES BOUTONS RADIO 

function checkInputCheckbox() {
  for (let i = 0; i < inputCheckbox.length; i++) {
    if (inputCheckbox[i].checked) {          //[I] = Verification de chaque checkbox radio
      alertDivCheckbox.style.display = "none"
      return true
    }
    else {
      alertDivCheckbox.innerHTML = "Attention, votre choix est invalide"
      alertDivCheckbox.style.fontSize = "12px"
      alertDivCheckbox.style.color = "red"
      alertDivCheckbox.style.display = "contents"
    }
  }
  return false

}




//----------------------------------------------------
// INPUT ET ALERT DE LA VALIDATION DES CGU

inputUser.addEventListener('change', function (event) {   //Gestion de la validation en continu
  checkUserCondition(event.target);
});

function checkUserCondition(inputUser) {
  if (inputUser.checked) {
    alertDivUser.style.display = "none"
    return true
  }
  else {
    alertDivUser.innerHTML = "Attention, vous devez accepté les CGU"
    alertDivUser.style.fontSize = "12px"
    alertDivUser.style.color = "red"
    alertDivUser.style.display = "contents"
    return false
  }
}









//////////////////////////////////////////////////////////
// Activation et mise en place du bouton de validation en fin de formulaire
//////////////////////////////////////////////////////////

formulaire.addEventListener("submit", validate)










//////////////////////////////////////////////////////////
// Activation et configuration de la pop-up de validation du form
//////////////////////////////////////////////////////////



//----------------------------------------------------
// Fermeture du form, ouverture pop-up

function closeForm() {
  modalbg.style.display = "none";
  modalFinish.style.display = "flex";
}


//----------------------------------------------------
// Gestion des boutons de fermeture

let boutonFermer3 = document.getElementById("fermerBouton")
boutonFermer3.addEventListener('click', closeForm2)
function closeForm2() {
  modalFinish.style.display = "none";
}

let boutonFermer2 = document.getElementById("closeBoutonOut")
boutonFermer2.addEventListener("click", closeModal2)
function closeModal2() {
  modalFinish.style.display = "none";
}






//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//
//                     FIN DU JS
//
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
