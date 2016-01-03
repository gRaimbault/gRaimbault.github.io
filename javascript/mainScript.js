$(document).ready(function() {

	var bodyHeight = $("body").height();
	var bodyWidth = $("body").width();

	if (bodyHeight < bodyWidth) {
		$(".circle").width(bodyHeight);
		$(".circle").height(bodyHeight);
		$(".circle").css("border-radius", bodyHeight);
	} else {
		$(".circle").width(bodyWidth);
		$(".circle").height(bodyWidth);
		$(".circle").css("border-radius", bodyWidth);
	}


	$(".imgInCircle").click(function() {
		$(".imgInCircle").addClass("imgInCircleClicked");
	});

	//$(".page").click(nextPage);

	$('.nextTextButton').click(nextText);
	$('#firstBubbleChoice').click(nextText);
	$('#secondBubbleChoice').click(nextPage);
	$('#thirdBubbleChoice').click(nextPage);

	function nextPage() {
		var pageId = parseInt($(this).parents(".page").attr('id').slice(-1));
		var nextPageId = pageId + 1;

		$("#page" + pageId).fadeToggle(1000, function(){
			$("#page" + nextPageId).fadeToggle(1500);
		});
		// $("#page" + pageId).animate({opacity:0},600,function(){
		// 			$(this).css({display: 'none'});
		// 			$("#page" + nextPageId).css({
		// 		        opacity: 0,
		// 		        display: 'block'     
		// 		    }).animate({opacity:1},600);
		// 		});
	}

	function nextText() {
		var divText = $(this).siblings('.bubbleText');
		var idText = divText.attr('id').substring(0, divText.attr('id').length - 1);
		var actualText = divText.attr('id').slice(-1);
		actualText++;
		var newIdText = idText + actualText;

		divText.html("");
		divText.html(firstBubble[newIdText]);
		divText.attr('id', newIdText);

		switch(actualText) {
		    case 6:
		        $('#firstBubbleChoice').css({
			        opacity: 0,
			        display: 'inline-block'     
			    }).animate({opacity:1},600);

				$('#secondBubbleChoice').css({
			        opacity: 0,
			        display: 'inline-block'     
			    }).animate({opacity:1},600);
			    $('.nextTextButton').fadeOut("slow");
		        break;

		    case 7:
		        $('#firstBubbleChoice').animate({opacity:0},600,function(){
		        	$(this).css({display: 'none'});
		        });

				$('#secondBubbleChoice').animate({opacity:0},600,function(){
		        	$(this).css({display: 'none'});
		        });
			    $('.nextTextButton').fadeIn("slow");
		        break;

		    case 9:
		        $('#thirdBubbleChoice').css({
			        opacity: 0,
			        display: 'inline-block'     
			    }).animate({opacity:1},600);
			    $('.nextTextButton').fadeOut("slow");
		        break;

		    default:
		        break;
		}

	}


	var firstBubble = {
		firstBubble1: "\"C’est l’heure de se lever,<br> pour prendre ton petit\
					  déjeuner,<br> tes mails sont à checker\"<br><br> Ahhhh… \
					  où est cet holo réveil de malheur, il va me déglutir toutes \
					  les réclames matinales, si je l’arrête pas.",

		firstBubble2: "Mes yeux s’ouvrent péniblement, j’entends le ballet \
					  incéssant des premières navettes emmenant déjà les premières \
					  personnes à leur travail. Hum… je sens mon mal de dos \
					  chronique, la journée va être longue. Si j’avais reçu mon \
					  bitcoin du mois, j’aurais pu aller chez le médotechnologue.",

		firstBubble3: "Aujourd'hui nous sommes en 2025, les progrès de la \
					  technologie nous ouvrent de nouvelles possibilités autant au \
					  niveau matériel qu'au niveau santé : manipulations \
					  génétiques, clonage, bio et nanotechnologies, membres \
					  mécaniques... Des avancées technologiques qui permettent un \
					  certain confort de vie...quand on en a les moyens. Hum, si \
					  j’avais plus de bitcoins…",

		firstBubble4: "Une brise nostalgique m’envahit, l'environnement aussi a \
					  bien changé. Malgré les promesses de nos hommes politiques, \
					  la dégradation de l’environnement reste un problème majeur : \
					  les ressources naturelles s’amenuisent continuellement, des \
					  espèces disparaissent...",

		firstBubble5: "...Avant de me lever, je commande un petit dèj sur mon \
					  « delismart » et lance la lecture des messages importants...\
					  <br><br>Tiens,le concours auquel j'ai participé la semaine \
					  dernière...",

		firstBubble6: "\"Félicitations, vous êtes l'heureux gagnant du concours \
					  NOPEX ! Grâce à son nouveau scanner ultra-puissant, Nopex \
					  vous offre l'opportunité de détecter vos défaillances santé. \
					  Nos experts se mettent à votre service pour vous fournir les \
					  meilleurs soins et vous mettre à jour.<br><br>Pour profiter \
					  de votre cadeau : Veuillez vous présenter au 121 rue \
					  mêmepaspeur, NOPEXLAND \"",
		firstBubble7: "Créé en 2001 par Lou Nowel, prix Nobel de physique, NOPEX \
					  (centre exponentielle) est le premier centre de recherche \
					  technologique medicale et scientifique en île-de-France. \
					  Installé au cœur d'un environnement scientifique, industriel \
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
					  de budget par an,<br>200 nouveaux brevets déposés par an"
	};

	var secondBubble = {
		secongBubble1: "Whaouhh ça claque, ce batiment est immense, incroyable, \
					   effrayant. Il me trouble, j'ai l'impression de vivre \
					   quelque chose d'irréel : Est-ce vraiment pour moi tout \
					   ça ? <br>En tout cas j'espère que ma douleur au dos \
					   s'envolera !!"
	}
	
});
