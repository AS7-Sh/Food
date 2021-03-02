var links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        e.preventDefault();
        alert("This website is currently under development level.");
    }, false);
}

function Burger(onion, meat, tomato, cucumbar, mayonnaise, cheese) {
    this.onion = onion;
    this.meat = meat;
    this.tomato = tomato;
    this.cucumbar = cucumbar;
    this.mayonnaise = mayonnaise;
    this.cheese = cheese;

    this.prices = {
        onion: 0.5,
        meat: 2,
        tomato: 0.3,
        cucumber: 0.2,
        mayonnaise: 0.4,
        cheese: 1
    };

    this.calculate = function () {
        var cost = this.mayonnaise * this.prices['mayonnaise'] +
            this.meat * this.prices['meat'] +
            this.onion * this.prices['onion'] +
            this.tomato * this.prices['tomato'] +
            this.cucumbar * this.prices['cucumber'] +
            this.cheese * this.prices['cheese'];
        return cost.toFixed(1);
    };
}

var element = document.getElementsByClassName("determine")[0];

element.addEventListener('click', function (event) {
    var target = event.target;

    if (target.innerHTML === '+') {
        var value = target.getAttribute('data-ing');
        var number = (parseInt(document.getElementById(value).innerHTML));
        document.getElementById(value).innerHTML = ++number;
    }

    else {
        var value = target.getAttribute('data-ing');
        var number = (parseInt(document.getElementById(value).innerHTML));
        if (number != 0)
            document.getElementById(value).innerHTML = --number;
    }

    var onionNumber = parseInt(document.getElementById('onion').innerHTML);
    var meatNumber = parseInt(document.getElementById('meat').innerHTML);
    var tomatoNumber = parseInt(document.getElementById('tomato').innerHTML);
    var cucumbarNumber = parseInt(document.getElementById('cucumbar').innerHTML);
    var mayonnaiseNumber = parseInt(document.getElementById('mayonnaise').innerHTML);
    var chesseNumber = parseInt(document.getElementById('cheese').innerHTML);
    var burger = new Burger(onionNumber, meatNumber, tomatoNumber,
        cucumbarNumber, mayonnaiseNumber,chesseNumber);
    document.getElementById('cost').innerHTML=burger.calculate() + " $";

}, false);