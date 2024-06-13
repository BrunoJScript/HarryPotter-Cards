const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");



btnAvancar.addEventListener("click", function(){
console.log("avancar");



   if (cartaoAtual === cartoes.length -1) return;

   const cartaoSelecionado = document.querySelector(".selecionado");
	cartaoSelecionado.classList.remove("selecionado");

     cartaoAtual++;
     cartoes[cartaoAtual].classList.add("selecionado"); 
})

//console.log(document.getElementById("btn-voltar"));


    btnVoltar.addEventListener("click", function(){
    console.log("voltar");
    console.log(cartaoAtual);

        if(cartaoAtual === 0)return;
        const cartaoSelecionado = document.querySelector(".selecionado");
	  cartaoSelecionado.classList.remove("selecionado");

        cartaoAtual--;
        cartoes[cartaoAtual].classList.add("selecionado");

      

     
     
     
     
     
       
})