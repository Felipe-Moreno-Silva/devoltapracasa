//CARROSSEL

	
	let indice = 0;

function moverImg(direcao){


	const imgsCarrossel = document.querySelector('.imgs-carrossel');
	const quantidadeImgs = imgsCarrossel.children.length;

    indice = (indice + direcao + quantidadeImgs) % quantidadeImgs;
    const translateXValue = -indice * 100 + '%';
    imgsCarrossel.style.transition = 'transform 0.5s ease';
    imgsCarrossel.style.transform = 'translateX(' + translateXValue + ')';
}

//função que transforma o botão em modal

function conteudoFacilitadores(event){

	var botao = event.currentTarget;

	
	var botaoId = botao.id;

	var modalMichel = "<section id='sessao-michel' class='sessao-facilitadores'> <div> <h3 id='nome-michel'>- Michel Moreno -</h3> <button class='botao-fechar' onclick='ocultarConteudo(event)'> <span class='linha-fechar1'></span> <span class='linha-fechar2'></span> </button> </div> <p id='conteudo-michel'>Mahatma, Professor e master coach há mais de duas décadas, professor de yoga certificado internacionalmente, estudioso do yoga pré-clássico, raja yoga e hatha yoga, jnana yoga além de neurociência, física quântica e espiritualidade.</p> </section>";
	var modalCarla = "<section id='sessao-carla' class='sessao-facilitadores'> <div> <h3 id='nome-carla'>- Carla Shakti Moreno -</h3> <button class='botao-fechar' onclick='ocultarConteudo(event)'> <span class='linha-fechar1'></span> <span class='linha-fechar2'></span> </button> </div> <p id='conteudo-carla'>Professora de Yoga certificada desde 1998, especialista em vinyasa Yoga, yoga medicina/vibracional, sacerdotisa do sagrado ser, espiritualista, terapeuta holística, mulher medicina da nação sioux, conhecedora das ervas, medicina do cacau e óleos essenciais. Sua guiança ancestral e toda sua sensibilidade oferece uma experiência energética e transcendental.</p></section>"

	var sessao = "";


	if(botaoId == "botao-michel"){

		botao.outerHTML = modalMichel;

		var sessaoMichel = document.getElementById("sessao-michel");

		 sessao = sessaoMichel;

		 var txtFacilitadores = sessao.children[1];
    	txtFacilitadores.style.display = "inline";

		sessaoTransicaoAbrir(sessao,txtFacilitadores);
		sessaoTransicaoAbrirMichel(sessao);


	}else if(botaoId == "botao-carla"){

		botao.outerHTML = modalCarla;

		var sessaoCarla = document.getElementById("sessao-carla");

		sessao = sessaoCarla;

		var txtFacilitadores = sessao.children[1];
	   	txtFacilitadores.style.display = "inline";

		sessaoTransicaoAbrir(sessao,txtFacilitadores);
		sessaoTransicaoAbrirCarla(sessao);

	}

};

function sessaoTransicaoAbrir(sessao,txtFacilitadores){

		var sessaoImg = sessao.parentNode.children[1];
		var nomeFacilitadores = sessao.children[0].children[0];
		var botaoFechar = sessao.children[0].children[1];
		var linhasBotaoFechar = botaoFechar.children;
		


	setTimeout(function tempoAbrir(){

        sessao.style.transition = "all .5s ease";
        sessao.style.width = "calc(100% - 40px)";
        sessao.style.left = "20px";
        sessao.style.bottom = "20px";
        sessao.style.padding = "20px";
        //sessao.style.backgroundColor = "rgba(0,0,0,.55)";
        sessao.style.border = "solid 2px #fff";
        sessao.style.borderRadius ="20px";
        sessao.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.35)";
        sessao.style.boxSizing = "border-box";
        sessao.style.zIndex = "10"

        //sessaoImg.style.backgroundColor = "rgba(0,0,0,.35)";
  
        nomeFacilitadores.style.transition = "all .5s ease";
        nomeFacilitadores.style.marginBottom = "10px";
        nomeFacilitadores.style.width = "220px";

		for(i = 0; i < linhasBotaoFechar.length; i++){
        	
			linhasBotaoFechar[i].style.transition = "all .5s ease";
			linhasBotaoFechar[i].style.opacity = "1";
        }

     	txtFacilitadores.style.transition = "all .75s ease";
    	txtFacilitadores.style.opacity = "1";
	

    	sessaoImg.style.transition = "all .75s ease";
    	sessaoImg.classList.toggle('imagem-em-escala-de-cinza');

    }, 1);

}

function sessaoTransicaoAbrirMichel(sessao){
	setTimeout(function tempoAbrir(){
	sessao.style.height = "180px";
	}, 1);
}

function sessaoTransicaoAbrirCarla(sessao){
	setTimeout(function tempoAbrir(){
	sessao.style.height = "240px";
	}, 1);
}



//função que transforma o modal em botão

function ocultarConteudo(botaoFechar){

	var botaoFechar = event.currentTarget;
	var sessao = botaoFechar.parentNode.parentNode;
	var sessaoId = sessao.id;
	var botaoMichel = "<button id='botao-michel' class='botao-facilitadores'onclick='conteudoFacilitadores(event)'> <h3 id='nome-michel'>- Michel Moreno -</h3> <p id='conteudo-michel'>Mahatma, Professor e master coach há mais de duas décadas, professor de yoga certificado internacionalmente, estudioso do yoga pré-clássico, raja yoga e hatha yoga, jnana yoga além de neurociência, física quântica e espiritualidade.</p> </button>"
	var botaoCarla = "<button id='botao-carla' class='botao-facilitadores'onclick='conteudoFacilitadores(event)'> <h3 id='nome-carla'>- Carla Shakti Moreno -</h3> <p id='conteudo-carla'>Professora de Yoga certificada desde 1998, especialista em vinyasa Yoga, yoga medicina/vibracional, sacerdotisa do sagrado ser, espiritualista, terapeuta holística, mulher medicina da nação sioux, conhecedora das ervas, medicina do cacau e óleos essenciais. Sua guiança ancestral e toda sua sensibilidade oferece uma experiência energética e transcendental.</p> </button>"


	if(sessaoId == "sessao-michel"){


		setTimeout(function tempoFechar() {

			sessao.outerHTML = botaoMichel;
			
    	}, 360);
		

	}else if(sessaoId == "sessao-carla"){
		
	

		setTimeout(function tempoFechar() {

			sessao.outerHTML = botaoCarla;
			
    	}, 360);
		
	}

	sessaoTransicaoFechar(botaoFechar);

};

 function sessaoTransicaoFechar(botaoFechar){
		var linhasBotaoFechar = botaoFechar.children;
		var sessao = botaoFechar.parentNode.parentNode;

		var nomeFacilitadores = sessao.children[0].children[0];
		var txtFacilitadores = sessao.children[1];

		var sessaoImg = sessao.parentNode.children[1];

		nomeFacilitadores.style.transition = "all .5s ease";
		nomeFacilitadores.style.marginBottom = "0";
        nomeFacilitadores.style.width = "160px";

   		txtFacilitadores.style.transition = "all .5s ease";
    	txtFacilitadores.style.opacity = "0";

        sessao.style.transition = "all .5s ease";
        sessao.style.width = "160px";
        sessao.style.height = "40px";
        sessao.style.left = "calc(50% - 80px)";
        sessao.style.padding = "0";
        sessao.style.backgroundColor = "rgba(13,75,200,1)";
        sessao.style.zIndex = "10"

        
    	for(i = 0; i < linhasBotaoFechar.length; i++){
        	linhasBotaoFechar[i].style.transition = "opacity .5s ease";
			linhasBotaoFechar[i].style.opacity = "0"
        }

    	sessaoImg.style.transition = "all .75s ease";
    	sessaoImg.classList.toggle('imagem-em-escala-de-cinza');
 }

function sessaoTransicaoFecharMichel(botaoFechar){

}

function sessaoTransicaoFecharCarla(botaoFechar){

}

/* function ocultarConteudo(botaoFechar){

	var botaoFechar = event.currentTarget;
	var linhasBotaoFechar = botaoFechar.children;
	var sessao = botaoFechar.parentNode.parentNode;
	
	for(i = 0; i < linhasBotaoFechar.length; i++){
        	linhasBotaoFechar[i].style.transition = "opacity 1.75s ease";
			linhasBotaoFechar[i].style.opacity = "0"
        }

	var botao = "<button id='botao-michel' class='botao-facilitadores'onclick='conteudoFacilitadores(event)'> <h3 id='nome-michel'>- Michel Moreno -</h3> <p id='conteudo-michel'>Mahatma, Professor e master coach há mais de duas décadas, professor de yoga certificado internacionalmente, estudioso do yoga pré-clássico, raja yoga e hatha yoga, jnana yoga além de neurociência, física quântica e espiritualidade.</p> </button>"

	sessao.outerHTML = botao;
	
	var classeBotaoFacilitadores = document.querySelector('.botao-facilitadores');

		classeBotaoFacilitadores.style.transition = "all .75s ease";
        classeBotaoFacilitadores.style.width = "calc(100% - 40px)";
        classeBotaoFacilitadores.style.height = "180px";
        classeBotaoFacilitadores.style.left = "20px";
        classeBotaoFacilitadores.style.bottom = "60px";
        classeBotaoFacilitadores.style.padding = "20px";
        classeBotaoFacilitadores.style.backgroundColor = "rgba(0,0,0,.55)";
        classeBotaoFacilitadores.style.border = "solid 2px #fff;";
        classeBotaoFacilitadores.style.borderRadius ="20px";
        classeBotaoFacilitadores.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.35);";
        classeBotaoFacilitadores.style.boxSizing = "border-box";
        classeBotaoFacilitadores.style.position = "absolute";
		classeBotaoFacilitadores.style.bottom = "60px";
		classeBotaoFacilitadores.style.left = "calc(50% - 80px)";
		classeBotaoFacilitadores.style.display = "flex";
		classeBotaoFacilitadores.style.flexDirection = "column";

 	
	var nomeFacilitadores = classeBotaoFacilitadores.children[0];
	var txtFacilitadores = classeBotaoFacilitadores.children[1];

  	setTimeout(function tempoFechar() {


   		txtFacilitadores.style.transition = "all .75s ease";
    	txtFacilitadores.style.opacity = "0";

        classeBotaoFacilitadores.style.transition = "all .75s ease";
        classeBotaoFacilitadores.style.width = "160px";
        classeBotaoFacilitadores.style.height = "40px";
        classeBotaoFacilitadores.style.left = "calc(50% - 80px)";
        classeBotaoFacilitadores.style.padding = "0";
        classeBotaoFacilitadores.style.backgroundColor = "rgba(13,75,200,.75)";
        
        nomeFacilitadores.style.transition = "all .75s ease";
		nomeFacilitadores.style.marginBottom = "0";
        nomeFacilitadores.style.width = "160px";
        
    }, 1);
  
};*/
