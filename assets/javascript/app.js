

var time = 300;
var deforestationBool = false;
var cattleBool = false; 
var polarBool = false; 
var oceanBool = false; 
var ans = "";
var qCount = 0;
var questions = [];
var answers = [];
var points = 0;
var intervalId;

var deforestation = {

    q: [
    "_____ is the leading cause of deforestation", 
     "___________ contributes between 12 percent and 17 percent of annual global greenhouse gas emissions.",
     "If the current rate of deforestation continues, it will take less than _______ years to destroy all the rainforests on the earth.",
     "The rate of deforestation equals to loss of _______ football field(s) every minute.",
     "___________ of the world’s tropical forests has already been cleared.",
     "The United States has less than ____ of the world’s population but consumes more than ______ of the world’s paper.",
     "_____ of the world’s oxygen is produced in the Amazon forest."
    ],

      a1 : ["Agriculture"],
      a2 : ["Loss of forests"],
      a3 : ["100 years", "10 years", "35 years", ],
      a4 : ["20", "1", "3", "80"],
      a5 : ["50%", "25%", "83%", "12%"],
      a6 : ["5% , 30%"],
      a7 : ["20%"],


      setData : function(){
        ans = this.a1[0];
        answers.push(this.a1);
        answers.push(this.a2);
        answers.push(this.a3);
        answers.push(this.a4);
        answers.push(this.a5);
        answers.push(this.a6);
        answers.push(this.a7);
        console.log("answers");
        console.log(answers[0][0]);

        
        for (var i = 0; i < 7; i++){
            questions.push(this.q[i]);
        }

        deforestationBool = true; 
        $("#question").text(this.q[0]); 
        
        for (var i = 0; i < 4; i++ ){
            
            var option = $("<button>");
            option.addClass("answer");
            option.attr("value", answers[qCount][i]);
            option.text(answers[0][i]);
            $(".choices").append(option);
            console.log(option);
        }  
        qCount = 1;

        intervalId = setInterval(subTime, 1000); 
    }

};

var cattle = {
    
    q: [
        "_____ is the leading cause of deforestation", 
         "___________ contributes between 12 percent and 17 percent of annual global greenhouse gas emissions.",
         "If the current rate of deforestation continues, it will take less than _______ years to destroy all the rainforests on the earth.",
         "The rate of deforestation equals to loss of _______ football field(s) every minute.",
         "___________ of the world’s tropical forests has already been cleared.",
         "The United States has less than ____ of the world’s population but consumes more than ______ of the world’s paper.",
         "_____ of the world’s oxygen is produced in the Amazon forest."
    
        ],
    
      a1 : ["Agriculture"],
      a2 : ["Loss of forests"],
      a3 : ["100 years", "10 years", "35 years", ],
      a4 : ["20", "1", "3", "80"],
      a5 : ["50%", "25%", "83%", "12%"],
      a6 : ["5% , 30%"],
      a7 : ["20%"],

      setData : function(){
        ans = this.a1[0];
        answers.push(this.a1);
        answers.push(this.a2);
        answers.push(this.a3);
        answers.push(this.a4);
        answers.push(this.a5);
        answers.push(this.a6);
        answers.push(this.a7);
        console.log("answers");
        console.log(answers[0][0]);

        
        for (var i = 0; i < 7; i++){
            questions.push(this.q[i]);
        }

        cattleBool = true; 
        $("#question").text(this.q[0]); 
        
        for (var i = 0; i < 4; i++ ){
            
            var option = $("<button>");
            option.addClass("answer");
            option.attr("value", answers[qCount][i]);
            option.text(answers[0][i]);
            $(".choices").append(option);
        }  
        qCount = 1;

        intervalId = setInterval(subTime, 1000); 
    }

};

var polar = {
    
    q: [
        "_____ is the leading cause of deforestation", 
         "___________ contributes between 12 percent and 17 percent of annual global greenhouse gas emissions.",
         "If the current rate of deforestation continues, it will take less than _______ years to destroy all the rainforests on the earth.",
         "The rate of deforestation equals to loss of _______ football field(s) every minute.",
         "___________ of the world’s tropical forests has already been cleared.",
         "The United States has less than ____ of the world’s population but consumes more than ______ of the world’s paper.",
         "_____ of the world’s oxygen is produced in the Amazon forest."
    
        ],
    
     a1 : ["Agriculture"],
     a2 : ["Loss of forests"],
     a3 : ["100 years"],
     a4 : ["20"],
     a5 : ["50%"],
     a6 : ["5% , 30%"],
     a7 : ["20%"],


     setData : function(){
        ans = this.a1[0];
        answers.push(this.a1);
        answers.push(this.a2);
        answers.push(this.a3);
        answers.push(this.a4);
        answers.push(this.a5);
        answers.push(this.a6);
        answers.push(this.a7);
        console.log("answers");
        console.log(answers[0][0]);

        
        for (var i = 0; i < 7; i++){
            questions.push(this.q[i]);
        }

        polarBool = true; 
        $("#question").text(this.q[0]); 
        
        for (var i = 0; i < 4; i++ ){
            
            var option = $("<button>");
            option.addClass("answer");
            option.attr("value", answers[qCount][i]);
            option.text(answers[0][i]);
            $(".choices").append(option);
        }  
        qCount = 1;

        intervalId = setInterval(subTime, 1000); 
    }

};

var oceans = {

    q: ["A report from the World Resources Institute (WRI) in 1998, found that around ______ of coral reefs are threatened by human activity.",
     "According to a study done by the University of Georgia, ________ pounds of plastic trash winds up in our oceans each year.",
     "Ocean pollutions kills more than ________ sea birds each year.",
     "Approximately every square mile of ocean has more than _______ of plastic floating in it.",
     "There are about _____ dead zones in the ocean, which covers a similar size as the United Kingdom.",
     "There’s enough plastic in the ocean to circle the Earth _____ times.",
     "_______ are the most common element found in the ocean today."

    ],
    
     a1 : ["85%", "20%" , "5%"],
     a2 : ["18 billion"],
     a3 : ["one million"],
     a4 : ["45,000"],
     a5 : ["500"],
     a6 : ["4"],
     a7 : ["Plastics"],

   
     setData : function(){
        ans = this.a1[0];
        answers.push(this.a1);
        answers.push(this.a2);
        answers.push(this.a3);
        answers.push(this.a4);
        answers.push(this.a5);
        answers.push(this.a6);
        answers.push(this.a7);
        console.log("answers");
        console.log(answers[0][0]);

        
        for (var i = 0; i < 7; i++){
            questions.push(this.q[i]);
        }

        oceansBool = true; 
        $("#question").text(this.q[0]); 
        
        for (var i = 0; i < 4; i++ ){
            
            var option = $("<button>");
            option.addClass("answer");
            option.attr("value", answers[qCount][i]);
            option.text(answers[0][i]);
            $(".choices").append(option);
        }  
        qCount = 1;

        intervalId = setInterval(subTime, 1000); 
    }
};

$("#Ice_Caps").on("click", function() {
   
    $('body').css("background-image", "url(file:///Users/Swechacha/Desktop/Bootcamp/week3/TriviaGame/assets/images/iceCap.jpg)"); 
    $("#notBegun").empty();
    //$("#notBegun").css("visibility", "collapse"); 
    $(".started").css("visibility", "visible"); 
    polar.setData();

});

$("#Deforestation").on("click", function() {
    $('body').css("background-image", "url(file:///Users/Swechacha/Desktop/Bootcamp/week3/TriviaGame/assets/images/deforestation.jpg)"); 
    $("#notBegun").empty();
    //$("#notBegun").css("visibility", "collapse"); 
    $(".started").css("visibility", "visible"); 
    deforestation.setData();

});

$("#Agriculture").on("click", function() {
    $('body').css("background-image", "url(file:///Users/Swechacha/Desktop/Bootcamp/week3/TriviaGame/assets/images/cattle.jpg)"); 
    $("#notBegun").empty();
   // $("#notBegun").css("visibility", "collapse"); 
    $(".started").css("visibility", "visible"); 
    cattle.setData();
    

});

$("#Ocean").on("click", function() {
    $("body").css("background-image", "url(file:///Users/Swechacha/Desktop/Bootcamp/week3/TriviaGame/assets/images/coral.jpg)"); 
    $("#notBegun").empty();
    //$("#notBegun").css("visibility", "collapse"); 
    $(".started").css("visibility", "visible"); 
    oceans.setData();


});


$("#submit").on("click", function() {
    resetTime();
    $("#countDown").text ("Time Left: " + timeConverter(0));
    computeQuestions();

});




function computeQuestions(){
    $(".choices").empty();

    console.log(questions[qCount]);
    console.log(qCount);


    if(qCount > 6){
        $(".started").empty();
    }

    $("#question").text(questions[qCount]); 
    ans = answers[qCount][i];

    for (var i = 0; i < answers[qCount].length; i++ ){
        var option = $("<button>");
        option.addClass("answer");
        option.attr("value", answers[qCount][i]);
        option.text(answers[qCount][i]);
        $(".choices").append(option);
        
    }
    qCount++;

    console.log(option)

    intervalId = setInterval(subTime, 1000); 

}

$(".answer").on("click", function() {
    console.log("something worked");
    var image = $("<img>");
    if (ans == this.value){
        $(".started").css("visibility", "collapse");
        image.attr("src", "url()");
        intervalId = setInterval(($(".started").append(image)), 120); 
        resetTime();
        points++;
    }else{
        $(".started").css("visibility", "collapse");
        image.attr("src", "url()");
        intervalId = setInterval(($(".started").append(image)), 120); 
        resetTime();
    } 

    computeQuestions();

});


function subTime(){
    time--;
    $("#countDown").text ("Time Left: " + timeConverter(time));
    if (time == 0){
        resetTime();
        computeQuestions();
    }
}


function resetTime(){
    clearInterval(intervalId);
    time = 300;
}


 function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  
}
