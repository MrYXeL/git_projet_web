let couleur = ["rouge", "bleu", "vert", "jaune", "blanc", "orange"]

function suite_aleatoire{
	let suite;
	for (var i = 0; i >= 5; i++) {
		suite[i] = Math.random(0, 5);
	}
	return suite
}

console.log(suite_aleatoire())
//Rouge Bleu Vert Jaune Blanc Orange