var num, tentativa, pontos;
var gabarito = new Array(30);

var gabarito041 = new Array(  'A', 'D', 'B', 'C','D', 'A', 'A', 'D', 'B', 'C','C', 'B', 'D', 'D', 'C','D', 'C', 'D', 'A', 'C', 'A', 'C','D', 'A', 'B', 'A', 'B','B', 'C', 'D',);
var gabarito042 = new Array(  'A', 'C', 'A', 'C','D', 'A', 'B', 'A', 'B', 'B','C', 'D', 'D', 'D','C', 'D', 'B', 'D', 'D', 'D', 'A','B', 'A', 'A', 'C','B', 'A','A', 'C', 'A',);
var gabarito043 = new Array(  'D', 'C', 'C', 'C','B', 'D', 'B', 'C', 'D', 'D','A', 'B', 'A', 'A','C', 'D', 'C', 'A', 'D', 'C', 'C','D', 'D', 'B', 'B','C', 'A','D', 'C', 'A',);
var gabarito044 = new Array(  'D', 'C', 'C', 'D','B', 'B', 'B', 'C', 'A', 'D','C', 'A', 'D', 'A','C', 'A', 'C', 'C', 'D', 'A', 'C','D', 'A', 'C', 'B','B', 'D','D', 'B', 'B',);
var gabarito045 = new Array(  'D', 'D', 'A', 'A','B', 'D', 'C', 'C', 'D', 'D', 'C', 'C', 'D','A', 'C', 'D', 'C','C', 'B', 'A', 'C','D', 'D', 'D', 'B','D', 'B','C', 'C', 'C',);



function iniciar1() {
  alert('Parabéns você esta fazendo o livro 041')

    gabarito = gabarito041;



      pontos = 0;
      num = 1;
      tentativa = 1;

      document.getElementById('pergunta').innerHTML =  "Pergunta " + num + "";
      document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";
    }

    function jogar(resposta) {
      document.getElementById('pergunta').innerHTML =  "Pergunta " + num + "" 

      if (resposta == gabarito[num-1]) {
        if (tentativa == 1){ 
          pontos += 3 
          alert('Parabéns você acertou de primeira')
        }
        else if (tentativa == 2){ 
          pontos += 2
          alert('Parabéns você acertou na segunda tentativa')
        }
        else if (tentativa == 3){ 
          pontos++
          alert('Parabéns você acertou na última tentativa')
        }


        num++;
        tentativa = 1;	

        document.getElementById('pergunta').innerHTML =  "Pergunta " + num + " ";
        document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";
      }
      else {
        tentativa++;
        document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";

        if (tentativa > 3) {
          num++;
          tentativa = 1;
          document.getElementById('pergunta').innerHTML = "Pergunta " + num +  "";
          document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";

        }
      }

      if (num > 30) {

        document.getElementById('pergunta').innerHTML = 'FIM DO JOGO'
         document.getElementById('visor2').innerHTML = "Pontuação:" + pontos + "pontos";
      }
    }
  function recarregarPagina(){
    location.reload()
  }
//--------------------------programa 2-------------------------------------
function iniciar2() {
  alert('Parabéns você esta fazendo o livro 042')
    gabarito = gabarito042;



      pontos = 0;
      num = 1;
      tentativa = 1;

      document.getElementById('pergunta').innerHTML =  "Pergunta " + num + "";
      document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";
    }

    function jogar(resposta) {
      document.getElementById('pergunta').innerHTML =  "Pergunta " + num + "" 

      if (resposta == gabarito[num-1]) {
        if (tentativa == 1){ 
          pontos += 3 
          alert('Parabéns você acertou de primeira')
        }
        else if (tentativa == 2){ 
          pontos += 2
          alert('Parabéns você acertou na segunda tentativa')
        }
        else if (tentativa == 3){ 
          pontos++
          alert('Parabéns você acertou na última tentativa')
        }


        num++;
        tentativa = 1;	

        document.getElementById('pergunta').innerHTML =  "Pergunta " + num + " ";
        document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";
      }
      else {
        tentativa++;
        document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";

        if (tentativa > 3) {
          num++;
          tentativa = 1;
          document.getElementById('pergunta').innerHTML = "Pergunta " + num +  "";
          document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";

        }
      }

      if (num > 30) {

        document.getElementById('pergunta').innerHTML = 'FIM DO JOGO'
         document.getElementById('visor2').innerHTML = "Pontuação:" + pontos + "pontos";
      }
    }
  function recarregarPagina(){
    location.reload()
  }
//--------------------------programa 3-------------------------------------
function iniciar3() {
  alert('Parabens voce esta fazendo o livro 043')

    gabarito = gabarito043;




      pontos = 0;
      num = 1;
      tentativa = 1;

      document.getElementById('pergunta').innerHTML =  "Pergunta " + num + "";
      document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";
    }

    function jogar(resposta) {
      document.getElementById('pergunta').innerHTML =  "Pergunta " + num + "" 

      if (resposta == gabarito[num-1]) {
        if (tentativa == 1){ 
          pontos += 3 
          alert('Parabéns você acertou de primeira')
        }
        else if (tentativa == 2){ 
          pontos += 2
          alert('Parabéns você acertou na segunda tentativa')
        }
        else if (tentativa == 3){ 
          pontos++
          alert('Parabéns você acertou na última tentativa')
        }


        num++;
        tentativa = 1;	

        document.getElementById('pergunta').innerHTML =  "Pergunta " + num + " ";
        document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";
      }
      else {
        tentativa++;
        document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";

        if (tentativa > 3) {
          num++;
          tentativa = 1;
          document.getElementById('pergunta').innerHTML = "Pergunta " + num +  "";
          document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";

        }
      }

      if (num > 30) {

        document.getElementById('pergunta').innerHTML = 'FIM DO JOGO'
         document.getElementById('visor2').innerHTML = "Pontuação:" + pontos + "pontos";
      }
    }
  function recarregarPagina(){
    location.reload()
  }
//--------------------------programa 4-------------------------------------
function iniciar4() {
  alert('Parabens voce esta fazendo o livro 044')

    gabarito = gabarito044;





      pontos = 0;
      num = 1;
      tentativa = 1;

      document.getElementById('pergunta').innerHTML =  "Pergunta " + num + "";
      document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";
    }

    function jogar(resposta) {
      document.getElementById('pergunta').innerHTML =  "Pergunta " + num + "" 

      if (resposta == gabarito[num-1]) {
        if (tentativa == 1){ 
          pontos += 3 
          alert('Parabéns você acertou de primeira')
        }
        else if (tentativa == 2){ 
          pontos += 2
          alert('Parabéns você acertou na segunda tentativa')
        }
        else if (tentativa == 3){ 
          pontos++
          alert('Parabéns você acertou na última tentativa')
        }


        num++;
        tentativa = 1;	

        document.getElementById('pergunta').innerHTML =  "Pergunta " + num + " ";
        document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";
      }
      else {
        tentativa++;
        document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";

        if (tentativa > 3) {
          num++;
          tentativa = 1;
          document.getElementById('pergunta').innerHTML = "Pergunta " + num +  "";
          document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";

        }
      }

      if (num > 30) {

        document.getElementById('pergunta').innerHTML = 'FIM DO JOGO'
         document.getElementById('visor2').innerHTML = "Pontuação:" + pontos + "pontos";
      }
    }
  function recarregarPagina(){
    location.reload()
  }
//--------------------------programa 5-------------------------------------
function iniciar5() {
  alert('Parabens voce esta fazendo o livro 045')
    gabarito = gabarito045;




      pontos = 0;
      num = 1;
      tentativa = 1;

      document.getElementById('pergunta').innerHTML =  "Pergunta " + num + "";
      document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";
    }

    function jogar(resposta) {
      document.getElementById('pergunta').innerHTML =  "Pergunta " + num + "" 

      if (resposta == gabarito[num-1]) {
        if (tentativa == 1){ 
          pontos += 3 
          alert('Parabéns você acertou de primeira')
        }
        else if (tentativa == 2){ 
          pontos += 2
          alert('Parabéns você acertou na segunda tentativa')
        }
        else if (tentativa == 3){ 
          pontos++
          alert('Parabéns você acertou na última tentativa')
        }


        num++;
        tentativa = 1;	

        document.getElementById('pergunta').innerHTML =  "Pergunta " + num + " ";
        document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";
      }
      else {
        tentativa++;
        document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";

        if (tentativa > 3) {
          num++;
          tentativa = 1;
          document.getElementById('pergunta').innerHTML = "Pergunta " + num +  "";
          document.getElementById('visor2').innerHTML = "Tentativa " + tentativa + " de 3";

        }
      }

      if (num > 30) {

        document.getElementById('pergunta').innerHTML = 'FIM DO JOGO'
         document.getElementById('visor2').innerHTML = "Pontuação:" + pontos + "pontos";
      }
    }
  function recarregarPagina(){
    location.reload()
  }
