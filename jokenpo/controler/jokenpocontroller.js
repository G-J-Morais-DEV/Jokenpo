class JokenpoController {

    constructor() {
        this._random = Math.floor((Math.random() * 3) + 1);
        this._left = document.getElementById("carouselExampleIndicators_left").style.display = 'none';
        this._right = document.getElementById("carouselExampleIndicators_right").style.display = 'none';
        this._div1 = document.getElementById('div1');
        this._div2 = document.getElementById('div2');
    }

    get left() {

        return this._left;

    }

    set left(value) {
        this.left = value;
    }

}