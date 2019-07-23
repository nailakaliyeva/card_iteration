let cards = {
    suits: ['<i class="fab fa-envira"></i>', '<i class="fab fa-canadian-maple-leaf"></i>', '<i class="fas fa-gem"></i>', '<i class="fas fa-heart"></i>'],
    value:['2','3','4','5','6','7','8','9','10','11','12','13','14']
}
let classIcons = document.querySelectorAll(".icons");
let randomCard = Math.floor(Math.random()*4)
for(i=0;i<classIcons.length; i++){
    classIcons[i].innerHTML = cards.suits[randomCard];
}

// let classValue = document.querySelectorAll(".cardValue");
// let randomValue = Math.floor(Math.random()*13)
// for(i=0;i<classValue.length; i++){
//     classValue[i].innerHTML = cards.value[randomValue];
// }
window.onload = function(){
function createRandomArray(inputValue){
    let randomArray = [];

    for(i=0;i<inputValue; i++){
        let randomCard = Math.floor(Math.random()*4);
        let randomValue = Math.floor(Math.random()*13);
        randomArray[i] = {suit: cards.suits[randomCard], value: cards.value[randomValue]};

    }
return randomArray;

};
console.log(createRandomArray(5));
}
// function draw(inputValue){
//     // let initialArray = new Array(input.value);
//     for (i=0; i<=; i++){
//         return (
//             initialArray.push(cards.value[randomValue])
//         );
//         document.querySelector(".cardsInline").innerHTML = <div class="card">
//                                                             <div class="top">
//                                                                 <span class="icons"><i class="fas fa-heart"></i></span>
//                                                                 <span class="cardValue"><h4>9</h4></span>
//                                                             </div>

//                                                             <div class="bottom">
//                                                                 <span class="icons"><i class="fas fa-heart"></i></span>
//                                                                 <span class="cardValue"><h4>9</h4></span>
//                                                             </div>
//                                                     </div>
// }
//     }





// // switch(cards.value[randomValue]){
// // case "J":
// //         document.querySelector(".card").style.backgroundImage = 'url("https://cdn4.iconfinder.com/data/icons/playing-card-thinline/32/ico-jack-of-clubs-512.png")';
// //         break;
// //     case "Q": document.querySelector(".card").style.backgroundImage = 'url("https://image.shutterstock.com/image-vector/beautiful-face-queen-icon-600w-315462977.jpg")';
// //         break;
// //     case "K": document.querySelector(".card").style.backgroundImage = 'url("https://cdn3.iconfinder.com/data/icons/casino-and-gambling-icons/531/King-2-512.png")';
// //         break;
// //     case "A": document.querySelector(".card").style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/4/40/Brush-calligraphy-alphabet-a.jpg")';
// //         break;
// //     case "2": document.querySelector(".card").style.backgroundImage = 'url("https://martialartsworldnews.com/wp-content/uploads/2015/11/2.jpg")';
// //         break;
// //     case "3": document.querySelector(".card").style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVcs4U8rsXVELmOVYk7pk735EaJ4AEQ33p0gQW2Pq64VcgUm8e1w")';
// //         break;
// //     case "4": document.querySelector(".card").style.backgroundImage = 'url("https://vignette.wikia.nocookie.net/phobia/images/d/d0/4.jpg/revision/latest?cb=20161127143001")';
// //         break;
// //     case "5": document.querySelector(".card").style.backgroundImage = 'url("https://vignette4.wikia.nocookie.net/phobia/images/0/03/5.jpg/revision/latest?cb=20170102100251")';
// //         break;
// //     case "6": document.querySelector(".card").style.backgroundImage = 'url("https://blognumbers.files.wordpress.com/2010/09/6.jpg")';
// //         break;
// //     case "7": document.querySelector(".card").style.backgroundImage = 'url("https://vignette.wikia.nocookie.net/phobia/images/f/fe/7.jpg/revision/latest?cb=20170121103340")';
// //         break;
// //     case "8": document.querySelector(".card").style.backgroundImage = 'url("https://eightinc.com/wp-content/uploads/eight-logo-big.png")';
// //         break;
// //     case "9": document.querySelector(".card").style.backgroundImage = 'url("https://blognumbers.files.wordpress.com/2010/09/9.jpg")';
// //         break;
// //     case "10": document.querySelector(".card").style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxI8CqOXB9u3MctnqFpE8qLpqHK2loTGLBAx958xBiUOkRR9KY_w")';
// //         break;
// //     }





















// // let cards = {
// //     suits: ['<i class="fab fa-envira"></i>', '<i class="fab fa-canadian-maple-leaf"></i>', '<i class="fas fa-gem"></i>', '<i class="fas fa-heart"></i>'],
// //     value:['1','2','3','4','5','6','7','8','9','10','J','Q','K','A']
// // }
// // // let classIcons = document.querySelectorAll(".icons");
// // // let randomCard = Math.floor(Math.random()*4)
// // for(i=0;i<classIcons.length; i++){
// //     classIcons[i].innerHTML = cards.suits[randomCard];
// // }

// // let classValue = document.querySelectorAll("h1");
// // let randomValue = Math.floor(Math.random()*13)
// // for(i=0;i<classValue.length; i++){
// //     classValue[i].innerHTML = cards.value[randomValue];
// // }
// ////

// // const cardHTML = (value, suit) => {
// //     return `
// // <div class="container">
// //     <div class="row">
// //         <!--THIS IS THE CARD-->
// //         <div class="col-1 offset-1 p-2 smallCard">
// //             <!--THIS IS THE TOP OF THE CARD-->
// //             <div class="row">
// //                 <!--THIS IS THE NORMAL ICONS-->
// //                 <div class="icons col-1 text-dark"><i class="fas fa-${suit}"></i></div>

//                 <div class="value col-1 offset-1"></div>

//             </div>
//                 <!--THIS IS THE BOTTOM OF THE CARD-->
//             <div class="row">
//                 <!--THIS IS THE ROTATED ICONS-->
//                 <div  class="icons col-1 smallIcon"><i class="fas fa-${suit}"></i></div>
//                 <div class="value col-1 offset-1"></div>
//             </div>
//         </div>
//     </div>
// </div>
// `}

// cardHTML(5,'hearts')

// let arrayOfArrays= [];
// let myArray = [11,2,9,4,12,6,14,8,3,10,1,5,13,7];

// function bubbleSort(array){

//     for(wall=array.length-1; wall>0; wall--){
//         for(x=0;x<wall;x++){
//             if(array[x]>array[x+1]){
//                 let aux = array[x];//storing
//                 array[x]=array[x+1]; //swapping
//                 array[x+1] = aux; //swapping
//                 let copyArr = array.slice();

//                 copyArr = copyArr.map(item => {
//                     if (item == 11) return "J";
//                     if (item == 12) return "Q";
//                     if (item == 13) return "K";
//                     return item;
//                 });

//                 arrayOfArrays.push(copyArr)

//             }
//         }

//     }
// }
// bubbleSort(myArray);



// //document.querySelector("body").innerHTML = arrayOfArrays;


