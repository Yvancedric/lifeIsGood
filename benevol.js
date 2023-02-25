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

mySubmit = () => {
    let texta = document.getElementById("comment").value;
    (texta == "") ? alert("Vous pouvez laisser un commentaire!") : alert("Cet commentaire a été soumi!"); 
 }