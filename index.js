let cards = {
    suits: ['<i class="fab fa-envira fa-5x"></i>', '<i class="fab fa-canadian-maple-leaf fa-5x"></i>', '<i class="fas fa-gem fa-5x"></i>', '<i class="fas fa-heart fa-5x"></i>'],
    value:['1','2','3','4','5','6','7','8','9','10','J','Q','K','A']
}
// let classIcons = document.querySelectorAll(".icons");
// let randomCard = Math.floor(Math.random()*4)
// for(i=0;i<classIcons.length; i++){
//     classIcons[i].innerHTML = cards.suits[randomCard];
// }

// let classValue = document.querySelectorAll("h1");
// let randomValue = Math.floor(Math.random()*13)
// for(i=0;i<classValue.length; i++){
//     classValue[i].innerHTML = cards.value[randomValue];
// }
////

const cardHTML = (value, suit) => {
    return `
<div class="container">
    <div class="row">
        <!--THIS IS THE CARD-->
        <div class="col-1 offset-1 p-2 smallCard">
            <!--THIS IS THE TOP OF THE CARD-->
            <div class="row">
                <!--THIS IS THE NORMAL ICONS-->
                <div class="icons col-1 text-dark"><i class="fas fa-${suit}"></i></div>

                <div class="value col-1 offset-1"></div>

            </div>
                <!--THIS IS THE BOTTOM OF THE CARD-->
            <div class="row">
                <!--THIS IS THE ROTATED ICONS-->
                <div  class="icons col-1 smallIcon"><i class="fas fa-${suit}"></i></div>
                <div class="value col-1 offset-1"></div>
            </div>
        </div>
    </div>
</div>
`}

cardHTML(5,'hearts')

let arrayOfArrays= [];
let myArray = [11,2,9,4,12,6,14,8,3,10,1,5,13,7];

function bubbleSort(array){

    for(wall=array.length-1; wall>0; wall--){
        for(x=0;x<wall;x++){
            if(array[x]>array[x+1]){
                let aux = array[x];//storing
                array[x]=array[x+1]; //swapping
                array[x+1] = aux; //swapping
                let copyArr = array.slice();

                copyArr = copyArr.map(item => {
                    if (item == 11) return "J";
                    if (item == 12) return "Q";
                    if (item == 13) return "K";
                    return item;
                });

                arrayOfArrays.push(copyArr)

            }
        }

    }
}
bubbleSort(myArray);



//document.querySelector("body").innerHTML = arrayOfArrays;


