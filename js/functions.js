function ol() {

    document.addEventListener('keydown', function (e){  // ajoute d'evenement avec le clavier keydown
        let code = e.key; // je lie mes id a mes touches de clavier
        let monAudio = document.getElementById(code); // je lie l'id avec mon html
        if (!monAudio) return; // condition tous ce qui ne fait pas parti de mon audio ne sera pas afficher

        console.log(monAudio);
        monAudio.previousElementSibling.classList.add("sound-active"); // dans le html va cibler la balise precedente de mon audio et lui ajoute une classe css
        monAudio.currentTime = 0; // remet a 0 a chaque lancement de mon audio
        monAudio.play(); // lire l'audio
        monAudio.addEventListener('ended', function (e) { // quand le son fini
            monAudio.previousElementSibling.classList.remove("sound-active"); // enleve la classe css sound active a la fin de mon audio
        })

    })

}
function om() { // click
    document.addEventListener('click', function (e) {


        let code = e.target.nextElementSibling ;

        let monAudio = document.getElementById(code);
        if (!monAudio) return;
        monAudio.previousElementSibling.classList.add("sound-active");

        
        monAudio.currentTime = 0;
        monAudio.play();
        monAudio.addEventListener('ended', function (e) {
        monAudio.previousElementSibling.classList.remove("sound-active");
        })

    })
}
export function all(){
    ol();
    om();
}