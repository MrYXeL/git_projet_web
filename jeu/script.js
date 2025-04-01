const couleurs = ["rouge", "bleu", "vert", "jaune"];
const son = {"rouge": new Audio("sons/re.mp3"), "bleu": new Audio("sons/fa.mp3"), "vert": new Audio("sons/do.mp3"), "jaune": new Audio("sons/mi.mp3")};

function couleur_aleatoire(){
	return couleurs[Math.floor(Math.random() * 4)];
}

function on_continue(suite){
	//Montre la suite au joueur
	for(var i = 0; i < suite.length; i++){

		if (suite[i] == "rouge"){
			document.getElementById("rouge").style.backgroundColor = "rgb(255,80,80)";
			son["rouge"].play();
			setTimeout(function(){document.getElementById("rouge").style.backgroundColor = "rgb(250,0,0)"},1000);

		}
		else if (suite[i] == "bleu"){
			document.getElementById("bleu").style.backgroundColor = "rgb(150, 150, 255)";
			son["bleu"].play();
			setTimeout(function(){document.getElementById("rouge").style.backgroundColor = "rgb(0, 0, 255)"},1000);
		}
		else if (suite[i] == "vert"){
			document.getElementById("vert").style.backgroundColor = "rgb(150, 255, 150)";
			son["vert"].play();
			setTimeout(function(){document.getElementById("rouge").style.backgroundColor = "rgb(0, 255, 0)"},1000);
		}
		else if (suite[i] == "jaune"){
			document.getElementById("jaune").style.backgroundColor = "rgb(255,255,150)";
			son["jaune"].play();
			setTimeout(function(){document.getElementById("rouge").style.backgroundColor = "rgb(250,255,0)"},1000);
		}
	};
}

function jeu(){
	var suite = [];
	var jeu_en_cour = true;
	while(jeu_en_cour = true){
		couleur = couleur_aleatoire();
		suite.push(couleur);
		console.log(suite);
		jeu_en_cour = on_continue(suite);
	};
}

//jeu();



//pour sleep() on peut faire avec datetime (prendre le time de maintenant et le comparer avec le time de maintenant + le temps qu'on veut attendre)
//voir setIntervall()

//await()