var back = $("#btnBack");

back.on("click", function(){
  $(location).attr("href", "D:/Жанна/2 семестр/Програмування в інтернеті/zhanna2012.github.io/index.html" );
})

var userName = prompt("Enter your username: ", "Гравець");
while(userName.length == 0){
  userName = prompt("Enter the username again: ", "Гравець");
}
document.getElementById('name').innerHTML = userName;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var count_1=0;
var count_2=0;
function Generate(){
  let point_1 = [];
  point_1.push(getRndInteger(1,10));
  console.log(point_1)
  document.getElementById('point_1').innerHTML = point_1;
  let point_2 = [];
  point_2.push(getRndInteger(1,10));
  console.log(point_2);
  document.getElementById('point_2').innerHTML = point_2;
  if(point_1>point_2){
    count_1++;      
    document.getElementById('score_1').innerHTML = count_1;
    document.getElementById('pic1').classList.remove("invisible");
    setTimeout(function(){
      document.getElementById('pic1').classList.add("invisible");}, 950);
  }
  else if(point_2>point_1){
    count_2++;
    document.getElementById('score_2').innerHTML = count_2;
    document.getElementById('pic2').classList.remove("invisible");
    setTimeout(function(){
      document.getElementById('pic2').classList.add("invisible");}, 950);
  }
  else {
    document.getElementById('pic3').classList.remove("invisible");
    setTimeout(function(){
      document.getElementById('pic3').classList.add("invisible");}, 950);
  }
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
  count_1 = 0;
  count_2 = 0;
  clearInterval(limitedInterval);
}
},  1000);
}
function Erase(){
document.getElementById('score_1').innerHTML = 0;
document.getElementById('score_2').innerHTML = 0;
}
function Laoding(){

}
document.getElementById('btnGenerate').onclick = function (){
Result()
setTimeout(Erase(), 2000);
}



