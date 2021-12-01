var back = $("#btnBack");

back.on("click", function(){
  $(location).attr("href", "D:/Жанна/3 семестр/Веб/индив задание/index.html" );
})

var userName = prompt("Enter your username: ", "Гравець");
while(userName.length == 0){
  userName = prompt("Enter the username again: ", "Гравець");
}
document.getElementById('name').innerHTML = userName;

var cards = { 
  2: 'jack',
  3: 'lady',
  4: 'king',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  11: 'ace'
};

  var nom = [2,3,4,6,7,8,9,10,11];
  var count_1, count_1;
  function Generate(){
    let point_1 = nom[Math.floor(Math.random() * nom.length)];
    let card1 = cards[point_1];
    document.getElementById('point_1').src = '${card1}.PNG';
    count_1+=point_1;
    document.getElementById('score_1').innerHTML = count_1;
    let point_2 = nom[Math.floor(Math.random() * nom.length)];
    let card2 = cards[point_2];
    document.getElementById('point_1').src = '${card2}.PNG';
    count_2+=point_2;
    document.getElementById('score_2').innerHTML = count_2;
  }
function Result(){
const limit = 3;
let i = 0;
console.log('START!');
const limitedInterval = setInterval(() => {
  if(i < limit){
    Generate()
    i++;
  }
  else if (i == limit) {
    if(count_1>count_2){
      document.getElementById('win1').classList.remove("invisible");
      setTimeout(function(){
        document.getElementById('win1').classList.add("invisible");}, 2000);
    }
    else if(count_1<count_2){
      document.getElementById('win2').classList.remove("invisible");
      setTimeout(function(){
        document.getElementById('win2').classList.add("invisible");}, 2000);
      
    }
    else if(count_1==count_2){
      document.getElementById('win3').classList.remove("invisible");
      setTimeout(function(){
        document.getElementById('win3').classList.add("invisible");}, 2000);
    }
    clearInterval(limitedInterval);
  }
},  1000);
}
function Erase(){
  document.getElementById('score_1').innerHTML = 0;
  document.getElementById('score_2').innerHTML = 0;
  }
document.getElementById('btnGenerate').onclick = function (){
  Result()
  setTimeout(Erase(), 2000);
}
  
  
  
  


