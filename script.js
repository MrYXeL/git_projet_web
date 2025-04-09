const couleurs = ["rouge", "bleu", "vert", "jaune"];
const son = {
    "rouge": new Audio("sons/re.mp3"),
    "bleu": new Audio("sons/fa.mp3"),
    "vert": new Audio("sons/do.mp3"),
    "jaune": new Audio("sons/mi.mp3")
};

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function couleur_aleatoire() {
    return couleurs[Math.floor(Math.random() * 4)];
}

async function afficherSequence(sequence){
    await delay(1000); // Attendre 1 seconde pour finir le son du joueur
    const boutons = document.querySelectorAll("input");
    boutons.forEach(bouton => bouton.disabled = true); // Désactiver les boutons

    // Montrer la séquence au joueur
    for (let i = 0; i < sequence.length; i++) {
        const couleur = sequence[i];
        document.getElementById(couleur).style.backgroundColor = "white";
        son[couleur].play();
        await delay(1000); // Attend 1 seconde
        document.getElementById(couleur).style.backgroundColor = ""; // Réinitialiser la couleur
        await delay(500); // Pause entre les couleurs
    }

    boutons.forEach(bouton => bouton.disabled = false); // Réactiver les boutons
}

async function jouer(sequence) {
    return new Promise(resolve => {
        let joueurSequence = [];
        const boutons = document.querySelectorAll("input");

        // Ajouter un écouteur d'événement sur chaque bouton
        boutons.forEach(bouton => {
            let temps = Date.now()
            bouton.addEventListener("click", function handleClick() {
                const couleurCliquee = this.id;
                joueurSequence.push(couleurCliquee);
                son[couleurCliquee].play(); // Jouer le son correspondant

                // Vérifier si la séquence du joueur est correcte jusqu'à présent
                for (let i = 0; i < joueurSequence.length; i++) {
                    if (joueurSequence[i] !== sequence[i]) {
                        boutons.forEach(b => b.removeEventListener("click", handleClick)); // Supprimer les écouteurs
                        resolve(0); // Retourner 0 si la séquence est incorrecte
                        return;
                    }
                }

                // Si la séquence est complète et correcte
                if (joueurSequence.length === sequence.length) {
                    boutons.forEach(b => b.removeEventListener("click", handleClick)); // Supprimer les écouteurs
                    document.getElementById("temps").innerHTML = "Temps de réaction : " + (Date.now() - temps) / 1000 +" s";
                    resolve(1); // Retourner 1 si la séquence est correcte
                }
            });
        });
    });
}

async function jeu(){
    await delay(2500);
    let suite = [];
    let continueJeu = 1;

    while (continueJeu == 1){
        suite.push(couleur_aleatoire())
        console.log(suite)

        document.getElementById("statut").innerText = "Regarde la séquence !";
        await afficherSequence(suite)
        document.getElementById("statut").innerText = "À toi de jouer !";
        continueJeu = await jouer(suite)
        document.getElementById("niveau").innerText = "Niveau : " + suite.length;
        if (continueJeu == 0){
            document.getElementById("temps").innerHTML = "Perdu";
        }
    }
}

//lorsque le document est chargé, on lance le jeu
document.addEventListener("DOMContentLoaded", function() {
    jeu();
});