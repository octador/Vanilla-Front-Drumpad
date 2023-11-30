
const touches = document.querySelectorAll("div[data-key]");


// écoute de l'événement keydown
document.addEventListener("keydown", (event) => {
    // récupération de l'élément associé à la touche
    const recoverKey = event.keyCode;
    const element = document.querySelector(`div[data-key="${recoverKey}"]`);
    const myAudio = document.querySelector(`audio[data-key="${recoverKey}"]`)
    console.log(myAudio);
    // si l'élément existe, ajouter la classe "playing"
    if (element) {
        element.classList.add("playing");
        myAudio.play()
    }
});

// écoute de l'événement keyup
document.addEventListener("keyup", () => {
    // retirer la classe "playing" de tous les éléments avec la classe "key"
    const elements = document.querySelectorAll(".key");

    elements.forEach((element) => {
        element.classList.remove("playing");
    });
});
