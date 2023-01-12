var numero = 0;

const btn_comecar = document.querySelector('.comecar');
const btn_chutar = document.querySelector('#chute');
const texto1 = document.querySelector('.div1');
const texto2 = document.querySelector('.div2');
const texto_principal = document.querySelector('p#texto');
const tentativa = document.querySelector('#tentativa');
const errou = document.querySelector('.erro');
const acertou = document.querySelector('.acerto');
const btn_reiniciar = document.querySelector('#play_again');

btn_comecar.onclick = () => {
    
    texto1.style.display = 'none';
    texto2.style.display = 'block';
    acertou.style.display = 'none';
    btn_reiniciar.style.display = 'none';

    numero = Math.floor(Math.random() * 100)
    
}


btn_chutar.onclick = () => {
    if(tentativa.value == numero){
        errou.style.display = 'none';
        acertou.style.display = 'block';

        btn_chutar.style.display = 'none';
        btn_reiniciar.style.display = 'initial';
    }else{

        if(tentativa.value < numero){
            errou.innerHTML = 'Você errou 😥 chute mais alto ⬆⬆⬆';
        }else{
            errou.innerHTML = 'Você errou 😥 chute mais baixo ⬇⬇⬇';
        }

        acertou.style.display = 'none';
        errou.style.display = 'block';
    }
}


btn_reiniciar.onclick = () => {
    
    btn_chutar.style.display = 'initial';
    btn_reiniciar.style.display = 'none';
    acertou.style.display = 'none';
    texto1.style.display = 'block';
    texto2.style.display = 'none';

}