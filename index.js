let cards = {
    suits: ['<i class="fab fa-envira fa-5x"></i>', '<i class="fab fa-canadian-maple-leaf fa-5x"></i>', '<i class="fas fa-gem fa-5x"></i>', '<i class="fas fa-heart fa-5x"></i>'],
    value:['1','2','3','4','5','6','7','8','9','10','J','Q','K','A']
}
let classIcons = document.querySelectorAll(".icons");
let randomCard = Math.floor(Math.random()*4)
for(i=0;i<classIcons.length; i++){
    classIcons[i].innerHTML = cards.suits[randomCard];
}

let classValue = document.querySelectorAll("h1");
let randomValue = Math.floor(Math.random()*13)
for(i=0;i<classValue.length; i++){
    classValue[i].innerHTML = cards.value[randomValue];
}

switch(cards.value[randomValue]){
    case "J":
        document.querySelector(".theCard").style.backgroundImage = 'url("https://cdn4.iconfinder.com/data/icons/playing-card-thinline/32/ico-jack-of-clubs-512.png")';
        break;
    case "Q": document.querySelector(".theCard").style.backgroundImage = 'url("https://petapixel.com/assets/uploads/2019/02/mooncompositemain-800x800.jpg")';
        break;
    case "K": document.querySelector(".theCard").style.backgroundImage = 'url("https://cdn1.vectorstock.com/i/1000x1000/90/00/king-card-icon-vector-10789000.jpg")';
        break;
    }

