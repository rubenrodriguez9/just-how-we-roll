/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}




/*******************
 * YOUR CODE BELOW *
 *******************/




//  * Dice Photos *
let d6Image = document.querySelector('#d6-roll');
d6Image.src = './images/start/d6.png';

let d6Double = document.querySelector('#double-d6-roll-1');
d6Double.src = './images/start/d6.png';
let d6Double2 = document.querySelector('#double-d6-roll-2');
d6Double2.src = './images/start/d6.png';

let d12Image = document.querySelector('#d12-roll');
d12Image.src = './images/start/d12.jpeg';

let d20Image = document.querySelector('#d20-roll');
d20Image.src = './images/start/d20.jpg';
//  * Dice Photos *


// * Mean Median and Mosts *
let d6Mean = document.querySelector('#d6-rolls-mean')
let d6Median = document.querySelector('#d6-rolls-median')
let d6Mode = document.querySelector('#d6-rolls-mode')

let d6DoubleMean = document.querySelector('#double-d6-rolls-mean')
let d6DoubleMedian = document.querySelector('#double-d6-rolls-median')
let d6DoubleMode = document.querySelector('#double-d6-rolls-mode')

let d12Mean = document.querySelector('#d12-rolls-mean')
let d12Median = document.querySelector('#d12-rolls-median')
let d12Mode = document.querySelector('#d12-rolls-mode')

let d20Mean = document.querySelector('#d20-rolls-mean');
let d20Median = document.querySelector('#d20-rolls-median');
let d20Mode = document.querySelector('#d20-rolls-mode');
// * Mean Median and Mosts *



/*******************
 * Functions *
 *******************/

let resultsToSixes = function(){
  //****************************************************************************************
  let number = getRandomNumber(6)                      //This section works the first dye  *
  sixes.push(number) //                                                                    
 d6Image.src = `./images/d6/${number}.png`; //                                             *   
   meanResults(sixes)                                   //MEAN                             *
  



   newSixesArr = sortByNumber(sixes)//                                                     *
   if(newSixesArr.length === 1){
    let numby =newSixesArr[0]                       //MEDIAN
     d6Median.innerHTML = numby                   
   }else if(newSixesArr.length > 1 && newSixesArr.length % 2 === 0){//                     *
     let evenMiddleIndex = newSixesArr.length /2;
    d6Median.innerHTML = newSixesArr[Math.ceil(evenMiddleIndex)]
   }else if(newSixesArr.length > 1 && newSixesArr.length % 2 === 1){//                     *
     let oddMiddleIndex = newSixesArr.length/2
    d6Median.innerHTML = newSixesArr[Math.floor(oddMiddleIndex)]
   }                                          



   //****************************************************************************************


  }
//**********************************************************************************************
let returnToDoubleSixes = function(){                       // THis sections works pair of dye 
                      //                                                                       * 
  let number = getRandomNumber(6)
  d6Double.src = `./images/d6/${number}.png`;//                                                *
let rando = getRandomNumber(6)                      //MEAN
  d6Double2.src = `./images/d6/${rando}.png`;
doubleSixes.push(rando + number)  //                                                           *
let newDoubleSixes = sortByNumber(doubleSixes)
  doubleSixesResults(newDoubleSixes)

  if(newDoubleSixes.length === 1){
    let numby =newDoubleSixes[0]                        //MEDIAN
     d6DoubleMedian.innerHTML = numby                       
   }else if(newDoubleSixes.length > 1 && newDoubleSixes.length % 2 === 0){//                   *
     let evenMiddleIndex = newDoubleSixes.length /2;
    d6DoubleMedian.innerHTML = newDoubleSixes[Math.ceil(evenMiddleIndex)]
   }else if(newDoubleSixes.length > 1 && newDoubleSixes.length % 2 === 1){//                   *
     let oddMiddleIndex = newDoubleSixes.length/2
    d6DoubleMedian.innerHTML = newDoubleSixes[Math.floor(oddMiddleIndex)]
   }



}
//***********************************************************************************************

/*******************
 * Event Listeners *
 *******************/

let firstDye = document.querySelector('#d6-roll');
firstDye.addEventListener('click', resultsToSixes)

let firstDoubled = document.querySelector('#double-d6-roll-1');
firstDoubled.addEventListener('click', returnToDoubleSixes)
let secondDoubled = document.querySelector('#double-d6-roll-2');
secondDoubled.addEventListener('click', returnToDoubleSixes)


/******************
 * RESET FUNCTION *
 ******************/

 
 const reset = function(){

  sixes.length = 0;
  doubleSixes.length = 0;
  twelves.length = 0;
  twenties.length = 0;
  
  d6Image.src = './images/start/d6.png';
  d6Double.src = './images/start/d6.png';
  d6Double2.src = './images/start/d6.png';
  d12Image.src = './images/start/d12.jpeg';
  d20Image.src = './images/start/d20.jpg';
   
  d6Mean.innerHTML = '&nbsp';
  d6Median.innerHTML = '&nbsp';
  d6Mode.innerHTML = '&nbsp';
  d6DoubleMean.innerHTML = '&nbsp';
  d6DoubleMedian.innerHTML ='&nbsp';
  d6DoubleMode.innerHTML ='&nbsp';
  d12Mean.innerHTML = '&nbsp';
  d12Median.innerHTML = '&nbsp';
  d12Mode.innerHTML = '&nbsp';
  d20Mean.innerHTML = '&nbsp';
  d20Median.innerHTML = '&nbsp';
  d20Mode.innerHTML = '&nbsp';
}
const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener('click', reset)








/****************
 * MATH SECTION *
 ****************/

let meanResults = function(arr){
  let total = 0
  for(const value of arr){
    total = total + value
  }
  d6Mean.innerHTML = (total / arr.length);
}





let doubleSixesResults = function(arr){
  //⬇Calculates and changes the mean value for global variable; doubleSixes.
  let total = 0
  for(const value of arr){
    total = total + value
  }
  d6DoubleMean.innerHTML = (total / arr.length);

  }