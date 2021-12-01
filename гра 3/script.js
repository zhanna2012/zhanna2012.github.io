var back = $("#btnBack");

back.on("click", function(){
  $(location).attr("href", "D:/Жанна/2 семестр/Програмування в інтернеті/zhanna2012.github.io" );
})

var userName = prompt("Enter your username: ", "Гравець");
while(userName.length == 0){
  userName = prompt("Enter the username again: ", "Гравець");
}
document.getElementById('userName').innerHTML = userName;


function GenerateImg(slot, id){
  var place = document.getElementById('slot_'+id);
  switch (slot)  { 
  case 0: place.src = 'back.PNG'; break;
  case 1: place.src = '1.PNG'; break;
  case 2: place.src = '2.PNG'; break;
  case 3: place.src = '3.PNG'; break;
  case 4: place.src = '4.PNG'; break;
  case 5: place.src = '5.PNG'; break;
  case 6: place.src = '6.PNG'; break;
};
}
  var tries = 0;
  function Generate(){
    var slots = [];
    for(i = 0; i<9; i++){
      slots.push(Math.floor(Math.random() *5+1));
    }
    
    for(i = 0; i<9; i++){
    document.getElementById('slot_'+i).classList.add("circle");
    }

    for(i = 0; i<9; i++)
    {
      GenerateImg(slots[i],i);
    }
  if(tries<3) {
    if((slots[0]==slots[1]&&slots[0]==slots[2])
    ||(slots[0]==slots[3]&&slots[0]==slots[6])
    || (slots[1]==slots[4]&&slots[1]==slots[7])
    ||(slots[2]==slots[5]&&slots[2]==slots[8])
    || (slots[3]==slots[4]&&slots[3]==slots[5])
    || (slots[6]==slots[7]&&slots[6]==slots[8]))
       {
      document.getElementById('win1').classList.remove("invisible");
      setTimeout(function(){
        document.getElementById('win1').classList.add("invisible");}, 2000);
        setTimeout(() => Default(), 2000);
        console.log("winner")
    }
  }
  else if(tries==3) {
      if((slots[0]==slots[1]&&slots[0]==slots[2])
      ||(slots[0]==slots[3]&&slots[0]==slots[6])
      || (slots[1]==slots[4]&&slots[1]==slots[7])
      ||(slots[2]==slots[5]&&slots[2]==slots[8])
      || (slots[3]==slots[4]&&slots[3]==slots[5])
      || (slots[6]==slots[7]&&slots[6]==slots[8]))
      {
       document.getElementById('win1').classList.remove("invisible");
       setTimeout(function(){
         document.getElementById('win1').classList.add("invisible");}, 2000);
         setTimeout(() => Default(), 2000);
         console.log("winner")
      }
      else{
     document.getElementById('win2').classList.remove("invisible");
     setTimeout(function(){
       document.getElementById('win2').classList.add("invisible");}, 2000);
       setTimeout(() => Default(), 2000);
       console.log("lost")
    }
   }
  }
  
function Result(){
  Generate();
}

function Default(){
  for(i = 0; i<9; i++)
    {
      GenerateImg(0,i);
    }
    tries = 0;
    document.getElementById("try").innerHTML = tries;

}

function Animate(id){
  let statys = false;
  const passElem = document.getElementById("slot_" + id);
  passElem.onanimationend = function () {
    this.classList.remove("circle");
  };
   
  function Change() {
    if (statys) {
    } else {
      passElem.classList.add("circle");
    }
  }
}

document.getElementById('btnGenerate').onclick = function (){

  for(i = 0; i<9; i++){
    Animate(i);
  }
 
tries++;
document.getElementById("try").innerHTML = tries;

Result();

}
  
  
  


