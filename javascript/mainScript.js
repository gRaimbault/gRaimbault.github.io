$(document).ready(function() {

	var firstSong = document.getElementById("firstSong");
	var secondSong = document.getElementById("secondSong");

	firstSong.volume=0.2;
	secondSong.volume=0.2;

	$('.nextTextButton').click(nextText);
	$('#firstBubbleChoice1').click(nextText);
	$('#firstBubbleChoice2').click(nextPage);
	$('#firstBubbleChoice3').click(nextPage);

	$('#thirdBubbleChoice1').click(nextText);
	$('#thirdBubbleChoice2').click(nextPage);

	$('#validationButton').click(validateObjectPosition);


	$('#page6').click(nextPage);
	$('#page7').click(nextPage);

	function nextPage() {
		var pageId = parseInt($(".page.active").attr('id').slice(-1));
		var nextPageId = pageId + 1;

		$("#page" + pageId).removeClass("active");
		$("#page" + nextPageId).addClass("active");
		$("#page" + pageId).fadeToggle(1000, function(){
			$("#page" + nextPageId).fadeToggle(1500);
			$('.nextTextButton').fadeIn("slow");
		});

		if(nextPageId == 2) {
			firstSong.pause();
			secondSong.play();
		}
	};

	function nextText() {
		var divText = $('.bubbleText:visible');

		var idText = divText.attr('id').substring(0, divText.attr('id').indexOf("Bubble") + 6);
		var actualText = divText.attr('id').substring(divText.attr('id').indexOf("Bubble") + 6, divText.attr('id').length);
		actualText++;
		var newIdText = idText + actualText;

		if(allTextExperience[newIdText]) {
			divText.html("");
			divText.html(allTextExperience[newIdText]);
			divText.attr('id', newIdText);
		}else{
			nextPage();
		}

		if(idText == "firstBubble") {

			switch(actualText) {
				case 2:
					firstSong.play();
					break;
			    case 6:
			        $('#firstBubbleChoice1').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);

					$('#firstBubbleChoice2').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);
				    $('.nextTextButton').fadeOut("slow");
			        break;

			    case 7:
			        $('#firstBubbleChoice1').animate({opacity:0},600,function(){
			        	$(this).css({display: 'none'});
			        });

					$('#firstBubbleChoice2').animate({opacity:0},600,function(){
			        	$(this).css({display: 'none'});
			        });
				    $('.nextTextButton').fadeIn("slow");
			        break;

			    case 9:
			        $('#firstBubbleChoice3').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);
				    $('.nextTextButton').fadeOut("slow");
			        break;

			    default:
			        break;
			}
		}

		if(idText == "thirdBubble") {

			switch(actualText) {
			    case 2:
			        $('#thirdBubbleChoice1').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);

					$('#thirdBubbleChoice2').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);
					$('.nextTextButton').fadeOut("slow");
			        break;

			    case 3:
			        $('#thirdBubbleChoice1').animate({opacity:0},600,function(){
			        	$(this).css({display: 'none'});
			        });

					$('#thirdBubbleChoice2').animate({opacity:0},600,function(){
			        	$(this).css({display: 'none'});
			        });
				    $('.nextTextButton').fadeIn("slow");
			        break;

			    default:
			        break;
			}
		}

		if(idText == "fifthBubble") {

			switch(actualText) {
			    case 2:
			    	$('.connectedGlass').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);

					$('.bionicEye').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);

				    $('#validationButton').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);
					$('.nextTextButton').fadeOut("slow");
			        break;

			    case 3:
			        $('#validationButton').animate({opacity:0},600,function(){
			        	$(this).css({display: 'none'});
			        });
				    $('.nextTextButton').fadeIn("slow");
			        break;

			    case 5:
			        $('.troisDLung').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);

					$('.flowerHat').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);

				    $('#validationButton').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);
					$('.nextTextButton').fadeOut("slow");
			        break;

			    case 6:
			        $('#validationButton').animate({opacity:0},600,function(){
			        	$(this).css({display: 'none'});
			        });
				    $('.nextTextButton').fadeIn("slow");
			        break;

				case 9:
			        $('.prescription').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);

					$('.scalpelEmotion').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);

				    $('#validationButton').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);
					$('.nextTextButton').fadeOut("slow");
			        break;

			    case 10:
			        $('#validationButton').animate({opacity:0},600,function(){
			        	$(this).css({display: 'none'});
			        });
				    $('.nextTextButton').fadeIn("slow");
			        break;

			    case 11:
			        $('.pills').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);

					$('.scalpelHomoncul').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);

				    $('#validationButton').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);
					$('.nextTextButton').fadeOut("slow");
			        break;

			    case 12:
			        $('#validationButton').animate({opacity:0},600,function(){
			        	$(this).css({display: 'none'});
			        });
				    $('.nextTextButton').fadeIn("slow");
			        break;

			    case 13:
			        $('.syringe').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);

					$('.homeopathicPlants').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);

				    $('#validationButton').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);
					$('.nextTextButton').fadeOut("slow");
			        break;

			    case 14:
			        $('#validationButton').animate({opacity:0},600,function(){
			        	$(this).css({display: 'none'});
			        });
				    $('.nextTextButton').fadeIn("slow");
			        break;

			    case 16:
			        $('.chip').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);

					$('.scalpelKineuro').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);

				    $('#validationButton').css({
				        opacity: 0,
				        display: 'inline-block'     
				    }).animate({opacity:1},600);
					$('.nextTextButton').fadeOut("slow");
			        break;

			    case 17:
			        $('#validationButton').animate({opacity:0},600,function(){
			        	$(this).css({display: 'none'});
			        });
				    $('.nextTextButton').fadeIn("slow");
			        break;
			        

			    default:
			        break;

			}
		}

	};

	function validateObjectPosition () {
		var elementToConserve = null;
		
		$('.healObject:not(.placed):visible').each(function(){
			if($(this).offset().top > 354) {
				elementToConserve = $(this);
			}
		});
		if(elementToConserve) {
			elementToConserve.addClass('placed');
			$('.healObject:not(.placed):visible').animate({opacity:0},600,function(){
	        	$(this).css({display: 'none'});
	        });	
	        changeAnswerAndEnv(elementToConserve);
	     	nextText();  
		}
	};

	function changeAnswerAndEnv(elementConserved) {
		if(elementConserved.hasClass('connectedGlass')) {
			allTextExperience["fifthBubble3"] = "Très bon choix ! Malheureusement, vos yeux on tendance à fatiguer et se mettent à tourbillonner…";			 	
			$( "#transformEnv .whirlpool" ).clone().appendTo( "#transformEnvSmall" );
			$('#transformEnvSmall .whirlpool').css({
		        opacity: 0,
		        display: 'inline-block'     
		    }).animate({opacity:0.6},600);
		}
		if(elementConserved.hasClass('bionicEye')) {
			allTextExperience["fifthBubble3"] = "Cet œil vous va à ravir ! Petite précision : nous avons tenu à vous mettre notre dernière mise à jour qui permet de visionner en direct les dernières nouveautés en terme de produits. …Non… nous n’appelons pas cela de la pollution visuelle !!";
			$( "#transformEnv .advertisement" ).clone().appendTo( "#transformEnvSmall" );
			$(".advertisement").fadeToggle(600);
		}


		if(elementConserved.hasClass('flowerHat')) {
			allTextExperience["fifthBubble6"] = "C’est un très bon choix, en purifiant l’air ambiant vous contribuerez à purifier l’air de tout le monde. De plus, ce chapeau vous va à ravir!";
			$( "#transformEnv .squall" ).clone().appendTo( "#transformEnvSmall" );
			$(".squall").fadeToggle(600);
			$(".pinkCheekbone").fadeToggle(600);
		}
		if(elementConserved.hasClass('troisDLung')) {
			allTextExperience["fifthBubble6"] = "Félicitations, votre troisième poumon fonctionne parfaitement! Votre teint a changé, vous semblez plus...coloré!";
			$( "#transformEnv .fire" ).clone().appendTo( "#transformEnvSmall" );
			$(".fire").fadeToggle(600);
		}


		if(elementConserved.hasClass('prescription')) {
			allTextExperience["fifthBubble10"] = "Vos prochaines séances de yoga ont été programmées. Je trouve vraiment cette solution trop longue, n’espérez pas un résultat immédiat.";
		}
		if(elementConserved.hasClass('scalpelEmotion')) {
			allTextExperience["fifthBubble10"] = "Vous avez fait le meilleur choix! Vous allez voir la vie en rose, déjà votre sourire ne vous quitte plus.";
			$( "#transformEnv .pinkLife" ).clone().appendTo( "#transformEnvSmall" );
			$(".pinkLife").fadeToggle(600);
			$(".scalpelEmotion").fadeToggle(600);
		}


		if(elementConserved.hasClass('pills')) {
			allTextExperience["fifthBubble12"] = "Lors de votre homonculusation, un de vos sens s’est emballé et une excroissance s’est formée, vous pouvez potentiellement ressentir quelque déséquilibre.<br><br>Veuillez nous excusez par avance de la gêne occasionnée, mais vous vivrez plus longtemps grâce à nous !";
			$( "#transformEnv .algae" ).clone().appendTo( "#transformEnvSmall" );
			$(".greenPea").fadeToggle(600);
			$(".algae").fadeToggle(600);
			
		}
		if(elementConserved.hasClass('scalpelHomoncul')) {
			allTextExperience["fifthBubble12"] = "Vous serez radié de toutes activités sportives et les effets de cette plante peuvent être visibles. Mais c’est une beauté nouvelle appréciée en 2045.";
			$( "#transformEnv .ouotgrowthTree" ).clone().appendTo( "#transformEnvSmall" );
			$(".ouotgrowthTree").fadeToggle(600);
			$(".outgrowthEars").fadeToggle(600);
			$(".scalpelHomoncul").fadeToggle(600);
		}


		if(elementConserved.hasClass('syringe')) {
			allTextExperience["fifthBubble14"] = "Je vous avertis sur les effets secondaires au cas où, le dosage nanotechnologique n’a pas été respecté lors de notre intervention. Vous allez peut être ressentir des irritations et constater des irruptions cutanées d’un orange vif.<br><br>Veuillez nous excusez par avance de la gêne occasionnée, mais vous vivrez plus longtemps grâce à nous !";
			$( "#transformEnv .pollution" ).clone().appendTo( "#transformEnvSmall" );
			$(".cutaneousEruption").fadeToggle(600);
			$(".pollution").fadeToggle(600);
			
		}
		if(elementConserved.hasClass('homeopathicPlants')) {
			allTextExperience["fifthBubble14"] = "Vous allez certainement développer une dépendance aux plantes prescrites. Vos cheveux  auront tendance à saladiser. Cet effet secondaire se diffusera sur la totalité du visage avec l’apparition de petits poids vert mais comestible, vous serez auto mangeable. Heureux ?";
			$( "#transformEnv .plantsTrees" ).clone().appendTo( "#transformEnvSmall" );
			$(".plantsTrees").fadeToggle(600);
			$(".saladHair").fadeToggle(600);
		}


		if(elementConserved.hasClass('chip')) {
			allTextExperience["fifthBubble17"] = "Votre cerveau reçoit trop d’informations à la fois, vous n’êtes pas capable de le supporter ce qui crée un embrouillement des données.";
			$( "#transformEnv .tangleWords" ).clone().appendTo( "#transformEnvSmall" );
			$(".tangleWords").fadeToggle(600);
			
		}
		if(elementConserved.hasClass('scalpelKineuro')) {
			allTextExperience["fifthBubble17"] = "C’est apaisant n’est-ce pas ?! Les effets indésirables sont légerement embêtant… Vouuus aaavez unnn gonnnnflemmmeeent duuu cerveauuuuu…";
			$( "#transformEnv .tangleWords" ).clone().appendTo( "#transformEnvSmall" );
			$(".tangleWords").fadeToggle(600);
			$(".elevatedBrain").fadeToggle(600);
			$(".scalpelKineuro").fadeToggle(600);
		}

	};

	var allTextExperience = {
		firstBubble1: "\"C’est l’heure de se lever,<br> pour prendre ton petit\
					  déjeuner,<br> tes mails sont à checker\"<br><br> Ahhhh… \
					  où est cet holo réveil de malheur, il va me déglutir toutes \
					  les réclames matinales, si je l’arrête pas.",

		firstBubble2: "Mes yeux s’ouvrent péniblement, j’entends le ballet \
					  incéssant des premières navettes emmenant déjà les premières \
					  personnes à leur travail. <br><br>Hum… je sens mon mal de dos \
					  chronique, la journée va être longue. Si j’avais reçu mon \
					  bitcoin du mois, j’aurais pu aller chez le médotechnologue.",

		firstBubble3: "Aujourd'hui nous sommes en 2025, les progrès de la \
					  technologie nous ouvrent de nouvelles possibilités autant au \
					  niveau matériel qu'au niveau santé : manipulations \
					  génétiques, clonage, bio et nanotechnologies, membres \
					  mécaniques... <br><br>Des avancées technologiques qui permettent un \
					  certain confort de vie...quand on en a les moyens. Hum, si \
					  j’avais plus de bitcoins…",

		firstBubble4: "Une brise nostalgique m’envahit, l'environnement aussi a \
					  bien changé. Malgré les promesses de nos hommes politiques, \
					  la dégradation de l’environnement reste un problème majeur : \
					  les ressources naturelles s’amenuisent continuellement, des \
					  espèces disparaissent...",

		firstBubble5: "...Avant de me lever, je commande un petit dèj sur mon \
					  «&nbsp;delismart&nbsp;» et lance la lecture des messages importants...\
					  <br><br>Tiens, le concours auquel j'ai participé la semaine \
					  dernière...",

		firstBubble6: "\"Félicitations, vous êtes l'heureux gagnant du concours \
					  NOPEX ! Grâce à son nouveau scanner ultra-puissant, Nopex \
					  vous offre l'opportunité de détecter vos défaillances santé. \
					  <br>Nos experts se mettent à votre service pour vous fournir les \
					  meilleurs soins et vous mettre à jour.<br><br>Pour profiter \
					  de votre cadeau : Veuillez vous présenter au 121 rue \
					  mêmepaspeur, NOPEXLAND \"",
		firstBubble7: "Créé en 2001 par Lou Nowel, prix Nobel de physique, NOPEX \
					  (centre exponentielle) est le premier centre <br>de recherche \
					  technologique medicale et scientifique <br>en Ile-de-France. \
					  <br>Installé au cœur d'un environnement scientifique, industriel \
					  et universitaire très riche, NOPEX consacre l'essentiel de \
					  ses recherches au développement des nouvelles technologies, \
					  dans les domaines de l'énergie, de la santé et de \
					  l'information.",
		firstBubble8: "Des batteries électriques aux nanotechnologies en passant \
					  par les matériaux et les biotechnologies, NOPEX est à la \
					  pointe de la recherche technologique et participe \
					  activement au transfert de ces connaissances vers \
					  l'industrie.",
		firstBubble9: "Leader mondial des technologies et services pour \
					  l'industrie et la santé<br><br>4 700 employés,<br>350 M€ \
					  de budget par an,<br>200 nouveaux brevets déposés par an",
		secondBubble1: "Whaouhh ça claque, ce batiment est immense, incroyable, \
					   effrayant. Il me trouble, j'ai l'impression de vivre \
					   quelque chose d'irréel : Est-ce vraiment pour moi tout \
					   ça ? <br><br>En tout cas j'espère que ma douleur au dos \
					   s'envolera !!",
		thirdBubble1: "\" Bonjour,<br><br>Haaa c'est vous qui avez remporté le \
					  concours ! Toutes nos félicitations !!<br><br> Voici \
					  comment votre journée va se dérouler : Dans un premier \
					  temps nous vous proposons de passer par un scanner pour \
					  déceler vos défaillances.",
		thirdBubble2: "Ensuite nous vous proposerons un catalogue de choix \
					  favorisant votre restructuration corporelle et \
					  environnementale.<br><br>On commence ? \"",
		thirdBubble3: "\"Grâce à NOPEX vous pouvez déceler et soigner n'importe \
					  quel défaut de santé  ou défaut émotionnel ! Avec 100% de \
					  réussite NOPEX se place comme le leader mondial des \
					  technologies pour la santé et le bien être ! <br>Vous ne \
					  risquez absolument rien !! Vos maux qui vous rongent \
					  seront apaisés, et si vous n'êtes pas satisfait (ce qui \
					  n'est encore jamais arrivé) nous vous proposerons de \
					  nouvelles séances de soins jusqu'à ce que vous soyez \
					  pleinement convaincu.\"",
		fifthBubble1: "Nous avons observé au scan que vous ne possédiez pas \
					   la vision augmentée. M..M..Mais, c’est IMPENSAAABLE !! \
					   À l’heure actuelle c’est un outil qui est devenu \
					   AB-SO-LU-MENT indispensable à l’humain. Nous vous \
					   proposons donc deux manières de solutionner ce \
					   problème : ",
		fifthBubble2: "Vous pouvez choisir entre une implantation \
					   d’œil bionique vous donnant les informations que vous \
					   voulez en temps réel (consulter internet, direction \
					   gps,  prise de photo, appel & communication,  vision \
					   de danger…etc) ou l’apposition de lunettes \
					   visiaugmentées à reconnaissance vocale. <br><br>Que \
					   voulez-vous faire ?",
		fifthBubble4: "D’ici 10 ans, vous allez développer une pathologie \
					   amazonienne, une vaste végétation va prospérer dans \
					   l’intégralité de vos poumons. Cette maladie découle \
					   du nouveau climat tropical qui envahira nos villes. \
					   Nous pouvons réaliser une impression 3D d’un de vos \
					   poumons et vous l’implanter afin de désengorger les \
					   poumons existants de cette verdure chatoyante. Des \
					   aérosols seront disposés dans ce futur ventricule \
					   pour assainir votre air. ",
		fifthBubble5: "Sinon, une autre alternative est possible, \
					   l’utilisation notre Calottofleur,un formidable \
					   couvre chef qui purifiera l’air présent autour de \
					   vous en permanence. Les fleurs bioniques de ce chapeau\
					    capte et filtre l’air pour vous le restituer  sous \
					   une qualité optimale.",
		fifthBubble7: "Nous avons analysé vos radiations cérébrales et il \
					   semblerait que vous serait sujet à déprimoloïde. Il est \
					   clair que vos risques d’entrer en grave déprimoloidation \
					   sont élevés! Mais n’ayez crainte, nous avons des \
					   solutions à vous proposer. <br><br>Nous pouvons insérer un \
					   dispositif dans votre crâne qui stimulera électriquement \
					   les zones du plaisir et du bonheur de votre cerveau quand \
					   vous le désirerez.",
		fifthBubble8: "Cette solution ne nécessite qu’une simple opération et \
					   l’utilisation de votre smartphone pour déclencher les \
					   signaux électriques à volonté. Vous pourrez ainsi vous \
					   libérer facilement des coups de bluettes et autres \
					   sentiments de tristesse.",
		fifthBubble9: "La deuxième solution possible est une thérapie du rire. \
					   Il vous faudra vous rendre à des séances de yoga du rire \
					   et de sophrologie ludique régulièrement afin de voir des \
					   effets positifs sur votre psychologie. Je ne vous \
					   conseille pas cette solution, même si elle a soigné de \
					   nombreux patients, elle est assez longue à mettre en \
					   place, vous ne verrez pas les effets tout de suite.",
		fifthBubble11: "En 2045, nous allons vous proposer le job de vos rêve \
						à certaines conditions, pour cela vous devrez développer \
						certaines de vos capacités, afin d’être prêt(e) pour le \
						jour J. nous pouvons vous homonculuser c’est à dire \
						développer un de vos 5 sens ou de prendre à partir de \
						maintenant quintrahydrogestrinone qui permettra de \
						doper vos facultés dans son ensemble.",
		fifthBubble13: "Nous avons détecté un développement éventuel d’une \
						pancréatique aiguë stade 4 dû à votre soif incontestée \
						de gojibule dans votre analyse génotype. C’est une \
						maladie très grave qui vous emportera en 2 semaines. \
						Nous vous proposons différents traitements préventifs ; \
						soit nous vous injectons des nanotechnologies dans votre \
						organisme qui modifieront vos cellules, soit une thérapie \
						homéopathique.<br><br>Quel est votre choix ?",
		fifthBubble15: "Il semblerait que vous ayez 82% de chance d’être atteint \
						de l’alzeihmer vers l’âge de 70 ans. Pour pallier cette \
						défaillance avant qu’elle ne survienne, nous vous \
						proposons notre puce neurochiffonière qui permettra \
						d’avoir accès à toutes les données rangées et classées \
						dans des tiroirs-synaptiques. <br><br>Vous pourrez aussi \
						aller récupérer les sources manquante sur le réseau \
						internet directement. ",
		fifthBubble16:	"Sinon nous avons un service de \
						kineuro-thérapie qui est tout à fait opérationnel et \
						saura détendre vos neurones à base de massage relaxants \
						pour que vous recouvriez toute vos pensée par le \
						relâchement des tensions. Découvert en \
						nouvelle-martinique le massage kineuro-thérapie a eu \
						tellement de succès qu’un chef d’état l’a ancré dans \
						la culture."
	};
});
