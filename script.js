$(document).ready(function(){
    console.log("done");
    Generate();
})

const $translate = {
    access : "доступ",
    event : "подія",
    customization : "налаштування",
    debugger : "налагоджувач",
    implementation  : "виконання",
    loop : "цикл",
    network : "мережа",
    software : "програмне забезпечення",
    folder : "папка",
    developer : "розробник"
};

var num = 0;
var arrayKeys = [];
var word, current;
var correct = $("#correct").val()
var incorrect = $("#incorrect").val()


var keys = Object.keys($translate);
console.log(keys);

function Generate(){
    word = keys[Math.floor(Math.random()*keys.length)];
        keys.splice(keys.indexOf(word),1);
        console.log(keys);
        $("#word").text(word);

}

 function Check(){
    var input = $("#input_word").val();
    console.log(input);
    console.log($translate[word]);
    if(num<10){
    if($translate[word] == $("#input_word").val()){
        console.log("right");
        correct++;
        $("#correct").text(correct);
    }
    else{
        console.log("false");
        incorrect++;
        $("#incorrect").text(incorrect);
    }
}
else{
    if(correct>incorrect){
        $('#win1').removeClass("invisible");
        setTimeout(function(){
          $('#win1').addClass("invisible");}, 2000); 
    }
    else if(correct<incorrect){
        $('#win2').removeClass("invisible");
        setTimeout(function(){
          $('#win2').addClass("invisible");}, 2000); 
    }
    else if(correct==incorrect){
        $('#win3').removeClass("invisible");
        setTimeout(function(){
          $('#win3').addClass("invisible");}, 2000); 
    }
    $("input").attr("disabled", "disabled");
}
 }

 $("#again").on("click", function Default(){
    keys = Object.keys($translate);
    console.log(keys);
    Generate();
    correct=0;
    $("#correct").text(correct);
    incorrect=0;
    $("#incorrect").text(incorrect);
    num=0;
    $("#translated").text(num);
    $("input").attr("disabled", false);
});


$(document).on("keypress", function translate(e){

    if(e.which == 13) {
        if($("#input_word").val()!=""){
        num++;
        $("#translated").text(num);   
        Check();
        Generate();
        $("#input_word").val("");
        }
        else{
            alert("enter translation")
        }
    }
    });







    


  
  
  


