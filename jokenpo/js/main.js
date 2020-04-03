let playerButton = document.querySelectorAll(".btn-player");
let carouselLeft = document.querySelector("#carouselExampleIndicators_left");
let carouselRight = document.querySelector("#carouselExampleIndicators_right");
let divOne = document.querySelector('#div1');
let divTwo = document.querySelector('#div2');
let resultDiv = document.querySelector('.result');
let choiceOne = document.querySelector('.choiceOne');
let choiceTwo = document.querySelector('.choiceTwo');
let resultChoices = [];


// função da escolha do jogador
playerButton.forEach(function(button, index) {

    jokenpoChoices = [1, 2, 3];
    jokenpoChoicesLyrics = ["Papel", "Tesoura", "Pedra"]

    button.addEventListener('click', e => {
        var y = Math.floor((Math.random() * 3) + 1);
        if (index == 0) {
            choice(y);
            carouselLeft.style.display = 'none';
            divOne.innerHTML = `
                <img src="img/jokenpo${y}.png" style="width:300px;">`
            divOne.style.display = 'block';
            choiceOne.innerHTML = jokenpoChoicesLyrics[y - 1];
        } else {
            choice(y);
            carouselRight.style.display = 'none';
            divTwo.innerHTML = `
            <img src="img/jokenpo${y}.png" style="width:300px;">`
            divTwo.style.display = 'block';
            choiceTwo.innerHTML = jokenpoChoicesLyrics[y - 1];
        }
        button.disabled = true;
        result();
    })
})

function choice(y) {
    switch (y) {
        case 1:
            resultChoices.push(jokenpoChoices[y - 1]);
            break;
        case 2:
            resultChoices.push(jokenpoChoices[y - 1]);
            break;
        case 3:
            resultChoices.push(jokenpoChoices[y - 1]);
            break;
    }
}

function newgame() {
    carouselLeft.style.display = 'block';
    carouselRight.style.display = 'block';
    divOne.style.display = 'none';
    divTwo.style.display = 'none';
    resultDiv.innerHTML = '';
    choiceOne.innerHTML = '';
    choiceTwo.innerHTML = '';
}
// function result
// imagem 1 = papel
// imagem 2 = tesoura
// imagem 3 = pedra
function result() {
    if (resultChoices.length > 1) {
        for (index in resultChoices) {
            if (resultChoices[0] == resultChoices[1]) {
                resultDiv.innerHTML = "Empate";
                resultDiv.style.display = 'block';
            } else if (
                ((resultChoices[0] == 1) && (resultChoices[1] == 3)) ||
                ((resultChoices[0] == 2) && (resultChoices[1] == 1)) ||
                ((resultChoices[0] == 3) && (resultChoices[1] == 2))
            ) {
                resultDiv.innerHTML = "Vitória Player 1";
                resultDiv.style.display = 'block';
            } else {
                resultDiv.innerHTML = "Vitória Player 2";
                resultDiv.style.display = 'block';
            }
        }
    }
}