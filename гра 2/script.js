var back = $("#btnBack");

back.on("click", function(){
  $(location).attr("href", "../index.html" );
})

var userName = prompt("Enter your username: ", "Гравець");
while(userName.length == 0){
  userName = prompt("Enter the username again: ", "Гравець");
}
document.getElementById('name').innerHTML = userName;

function GenerateImg_1(card){
  var place = document.getElementById("card_place_1");
  switch (card)  { 
  case 0: place.src = 'back.PNG'; break;
  case 2: place.src = 'jack.PNG'; break;
  case 3: place.src = 'lady.PNG'; break;
  case 4: place.src = 'king.PNG'; break;
  case 6: place.src = '6.PNG'; break;
  case 7: place.src = '7.PNG'; break;
  case 8: place.src = '8.PNG'; break;
  case 9: place.src = '9.PNG'; break;
  case 10: place.src = '10.PNG'; break;
  case 11: place.src = 'ace.PNG'; break;
};
}
function GenerateImg_2(card){
  var place = document.getElementById("card_place_2");
  switch (card)  { 
  case 0: place.src = 'back.PNG'; break;
  case 2: place.src = 'jack.PNG'; break;
  case 3: place.src = 'lady.PNG'; break;
  case 4: place.src = 'king.PNG'; break;
  case 6: place.src = '6.PNG'; break;
  case 7: place.src = '7.PNG'; break;
  case 8: place.src = '8.PNG'; break;
  case 9: place.src = '9.PNG'; break;
  case 10: place.src = '10.PNG'; break;
  case 11: place.src = 'ace.PNG'; break;
};
}
  var nom = [2,3,4,6,7,8,9,10,11];
  var count_1, count_1;
  function Generate(){
    var scoreUserCur = document.getElementById("score_1");
    var count_1 = 1*scoreUserCur.innerText;
    let point_1 = nom[Math.floor(Math.random() * nom.length)];
    GenerateImg_1(point_1);
    count_1+=point_1;
    scoreUserCur.innerHTML = count_1;

    var scoreCompCur = document.getElementById("score_2");
    var count_2 = 1*scoreCompCur.innerText;
    let point_2 = nom[Math.floor(Math.random() * nom.length)];
    GenerateImg_2(point_2);
    count_2+=point_2;
    scoreCompCur.innerHTML = count_2;
  }
function Result(){
const limit = 3;
let i = 0;
console.log('START!');
const limitedInterval = setInterval(() => {
  let result_1 = 1*document.getElementById("score_1").innerText;
  let result_2 = 1*document.getElementById("score_2").innerText;
  if(i < limit){
    Generate()
    i++;
  }
  else if (i == limit) {
    if(result_1>result_2){
      document.getElementById('win1').classList.remove("invisible");
      setTimeout(function(){
        document.getElementById('win1').classList.add("invisible");}, 2000);
    }
    else if(result_1<result_2){
      document.getElementById('win2').classList.remove("invisible");
      setTimeout(function(){
        document.getElementById('win2').classList.add("invisible");}, 2000);
    }
    else if(result_1==result_2){
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
  GenerateImg_1(0);
  GenerateImg_2(0);
  }
document.getElementById('btnGenerate').onclick = function (){
  Result()
  setTimeout(Erase(), 2000);
}
  
console.log("A"-"B"+"2");
  
  


