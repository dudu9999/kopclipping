var tweetsPositivos = [
		/te amo/,
		/s2/,
		/S2/,
		/<3/,
		/ótimo/,
		/otimo/,
		/ótima/,
		/otima/,
		/excelente/,
		/exelente/,
		/bom/,
		/whinlovers/,
		/boa/,
		/obrigado/
	];

var tweetsNegativos = [
		/pnc/,
		/PNC/,
		/horrível/,
		/horrivel/,
		/Pau no cu/,
		/Desgraçado/,
		/idiota/,
		/seu bosta/,
		/seu merda/,
		/feio/,
		/trouxa/,
		/troxa/,
		/no cu/,
		/tnc/,
		/toma no seu cu/,
		/fdp/,
		/filho da puta/,
		/ridiculo/,
		/ridículo/,
		/sem nosção/,
		/sem condicão/,
		/sem condiçao/,
		/sem graca/,
		/sem graça/,
		/é um criaça/
		];

var countTweetPositivo = db.posts.find({owner:"user2", text:{$in: tweetsPositivos}}).count();

var countTweetNegativo = db.posts.find({owner:"user2", text:{$in: tweetsNegativos}}).count();


print("Positivos: "+countTweetPositivo +
	"\nNegativos: "+countTweetNegativo);