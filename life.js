
getLoad = () => {
     prompt("Veuillez entrez vos prenoms:");
}

currentLife = () => {
    alert("Accedez à la page Vie Courante");
}

benevol = () => {
    alert("Accedez à la page Bénévolat");
}

getLearn = () => {
    alert("Bientôt pour l'information , veuillez patientez!");
}

getAssociate = () => {
    alert("Bientôt pour l'information , veuillez patientez!");
}

myMessage = () => {
    alert("Vous recevrez un numero ou un email pour vos messages bientôt!");
}

getGood = () => {
    const req = document.getElementById("req");
    req.innerHTML = "Oups, cette page est en contruction!";
    req.style.color = "red";
    alert("lifeIsGood plus n'est pas disponible en ce moment");
}

const prest = document.getElementById("prest");
prest.style.color = "#ffffff";
const mind = document.getElementById("mind")
mind.style.color = "#db4cdd";

mySubmit = () => {
   let texta = document.getElementById("comment").value;
   (texta == "") ? alert("Vous pouvez laisser un commentaire!") : alert("Cet commentaire a été soumi!"); 
}