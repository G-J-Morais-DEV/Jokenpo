let playerButton = document.querySelectorAll(".btn-player");
let carouselLeft = document.getElementById("carouselExampleIndicators_left");
let carouselRight = document.getElementById("carouselExampleIndicators_right");
let divOne = document.getElementById('div1');
let divTwo = document.getElementById('div2');


let resultChoices = [];

playerButton.forEach(function(button, index) {

    jokenpoChoices = ['Papel', "Tesoura", "Pedra"]

    button.addEventListener('click', e => {

        if (index == 0) {
            carouselLeft.style.display = 'block';
            carouselRight.style.display = 'block';
            divOne.style.display = 'none';
            divTwo.style.display = 'none';
            resultChoices = [];
            playerButton.disabled = false;

        } else if (index == 1) {
            var y = Math.floor((Math.random() * 3) + 1);

            choice(y);

            carouselLeft.style.display = 'none';

            divOne.innerHTML = `
                <img src="img/jokenpo${y}.png" style="width:300px;">`
            divOne.style.display = 'block';

            enable(button);


        } else {

            var y = Math.floor((Math.random() * 3) + 1);

            choice(y);

            carouselRight.style.display = 'none';
            divTwo.innerHTML = `
            <img src="img/jokenpo${y}.png" style="width:300px;">`
            divTwo.style.display = 'block';

            enable(button);

        }

        console.log(resultChoices);

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

function enable(button) {
    if (button.disabled == true) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

// function result