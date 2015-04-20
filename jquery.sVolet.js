/*
 * jQuery sVolet
 * dependancy: jQuery
 * author: ZEFIRINI Joris
 * version : 0.1
 */


(function($){

	$.fn.sVolet = function() {

		var styleTitre = { display : 'block', backgroundColor : '#dddddd' };
		var styleOnglet = { display : 'block' };

		var lesOnglets = $(this);
		var titreOnglet = lesOnglets.find("div[data-titreOnglet]");
		var onglet = lesOnglets.find("section[data-onglet]");

		titreOnglet.css(styleTitre);

		onglet.each(function(){
			$(this).append('<button class="prevOnglet"><-</button><button class="nextOnglet">-></button>');
		});

		onglet.hide();
		onglet.first().show();

		onglet.first().find('button.prevOnglet').attr('disabled', 'disabled');
		onglet.last().find('button.nextOnglet').attr('disabled', 'disabled');

		$(lesOnglets).find("button.nextOnglet").click(function(){
			ongletSuivant(this, lesOnglets);
		});

		$(lesOnglets).find("button.prevOnglet").click(function(){
			ongletPrecedent(this, lesOnglets);
		});


    };
    
    $.fn.sVolet.defaults = {

    };
    
    function sVoletInit() {

    };

    function ongletSuivant(leBouton, lesOnglets){
    	next = $(leBouton).parent().data('onglet')+1;
    	$(leBouton).parent().hide();
    	$(lesOnglets).find('section[data-onglet='+next+']').show();
    };

    function ongletPrecedent(leBouton, lesOnglets){
    	prev = $(leBouton).parent().data('onglet')-1;
    	$(leBouton).parent().hide();
    	$(lesOnglets).find('section[data-onglet='+prev+']').show();
    };



})(jQuery)

