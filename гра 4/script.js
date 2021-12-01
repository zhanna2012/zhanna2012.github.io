var answers = ['Без сумнівів',	'Можливо','Так','Думаю що так','Думаю що ні','Духи говорять так',
'Духи говорять ні', 'Є сумніви','Шансів мало', 'Не можу сказати','Не зараз','Незрозуміло','Ні','Дуже ймовірно','Запитайте пізніше',
'Запитайте знову','Точно так','Точно ні','Шанси хороші'];

let container = document.createElement('div');
container.className = "container";
container.id = "container";

let title = document.createElement('h1');
title.innerText = "Задай питання магічній кулі";
title.className = "title";
title.id = "title";

let main = document.createElement('div');
main.className = "main";
main.id = "main";

let img = document.createElement('img');
img.src = "images/shar.jpg";
img.alt = "Магічна куля";

let myInput = document.createElement('input');
myInput.setAttribute('type', 'text');
myInput.className = "myInput";
myInput.id = "myInput";

let buttonLine = document.createElement('div');
buttonLine.className = "buttonLine";
buttonLine.id = "buttonLine";

let generateBtn = document.createElement('button');
generateBtn.innerText = "Отримати відповідь";
generateBtn.className = "generateBtn";
generateBtn.id = "generateBtn";

let eraseBtn = document.createElement('button');
eraseBtn.innerText = "Очистити";
eraseBtn.className = "eraseBtn";
eraseBtn.id = "eraseBtn";

let btnBack = document.createElement('button');
btnBack.innerText = "Повернутись на головну";
btnBack.className = "btnBack";
btnBack.id = "btnBack";

let answerLine = document.createElement('p');
answerLine.className = "answerLine";
answerLine.id = "answerLine";

let body = document.querySelector('body');

body.appendChild(container);
container.appendChild(title);
container.appendChild(main);
main.appendChild(img);
main.appendChild(answerLine);
container.appendChild(myInput);
container.appendChild(buttonLine);
buttonLine.appendChild(generateBtn);
buttonLine.appendChild(eraseBtn);
container.appendChild(btnBack);

var back = $("#btnBack");

back.on("click", function(){
  $(location).attr("href", "D:/Жанна/3 семестр/Веб/индив задание/index.html" );
})



document.getElementById('generateBtn').onclick = function () {
      let x = document.getElementById('myInput').value;
      let y = document.querySelector('img');
      if (x == ""){
        alert("Задайте запитання");
      }
      else if (x.indexOf("?") == -1){
        alert("Введіть запитання");
      }
      else{
      var answer = answers[Math.floor(Math.random() * answers.length)];
      document.getElementById('answerLine').innerHTML = answer;
      y.classList.add('circle');
      setTimeout(function(){y.classList.remove('circle');}, 600);
      }
  };

document.getElementById('eraseBtn').onclick = function () {
  document.getElementById("myInput").value = "";
};