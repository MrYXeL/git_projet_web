var couleurs = ["rouge", "bleu", "vert", "jaune"];

function couleur_aleatoire(){
	return couleurs[Math.floor(Math.random() * 4)];
}

//console.log(couleur_aleatoire());		//Test la couleur aléatoire

function on_continue(){
	null;
}

function jeu(){
	var suite = [];
	var jeu_en_cour = true;
	while(jeu_en_cour = true){
		couleur = couleur_aleatoire();
		suite.push(couleur);
		console.log(suite);
	};
}