const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
for(let i=0;i <botoes.length;i++){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(minutos / 60);
let dias = Math.floor(horas / 24);
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
for(let i=0; i <  botoes.length; i++){
    console.log(i);
    console.log(botoes)
}

contadores[0].textContent = calculaTempo(t);
contadores[0].textContent = "Contagem regressiva";
contadores[0].textContent = tempoObjetivo1;
contadores[0].textContent = tempoObjetivo1 - tempoAtual;

function calculaTempo(tempoObjetivo) 

