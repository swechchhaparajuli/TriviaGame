

var time = 120;
var triviaTheme = "";
var ans = "";
var corrAns = "";
var qCount = 0;
var questions = [];
var answers = [];
var points = 0;
var intervalId;
var option;
var unAnswered = 0;
var timeOut;

var deforestation = {

    q: [
    "_____ is the leading cause of deforestation", 
     "___________ contribute(s) between 12-17 percent of annual global greenhouse gas emissions.",
     "If the current rate of deforestation continues, it will take less than _______ years to destroy all the rainforests on the earth.",
     "The rate of deforestation equals to loss of _______ football field(s) every minute.",
     "___________ of the world’s tropical forests has already been cleared.",
     "The United States has less than ____ of the world’s population but consumes more than ______ of the world’s paper.",
     "_____ of the world’s oxygen is produced in the Amazon forest."
    ],

      a1 : ["Agriculture", "pollution", "bykill", "oil spills"],
      a2 : ["Loss of forests", "oil spills", "cars", "all of the above"],
      a3 : ["100 years", "10 years", "35 years","1,000 years" ],
      a4 : ["20", "1", "3", "80"],
      a5 : ["50%", "25%", "83%", "12%"],
      a6 : ["5% , 30%", "50%, 3%", "20%, 3%", "2%, 30%"],
      a7 : ["20%", "95%", "25%", "65%"],


      setData : function(){
        answers.push(this.a1);
        answers.push(this.a2);
        answers.push(this.a3);
        answers.push(this.a4);
        answers.push(this.a5);
        answers.push(this.a6);
        answers.push(this.a7);
       

        
        for (var i = 0; i < 7; i++){
            questions.push(this.q[i]);
        }

        triviaTheme = "deforestation";
        $("#question").text(this.q[0]); 

        var j = Math.floor(Math.random()*4); 
        var temp = answers[qCount][0];
        var shuffled = answers[qCount];
        corrAns = answers[qCount][0];
    
        console.log("answer: " + answers[qCount][0]);
    
         shuffled[0] = answers[qCount][j];
         shuffled[j]= temp;
    
         console.log("answers[qCount]: " + shuffled );
        
        for (var i = 0; i < 4; i++ ){
            
            option = $("<button>");
            option.addClass("answer");
            option.attr("value", answers[qCount][i]);
            option.text(answers[0][i]);
            $(".choices").append(option);
           
        }  
        qCount = 1;

      //  console.log(ans);

        intervalId = setInterval(subTime, 1000); 
    }

};

var cattle = {
    
    q: [
        "_____ is the leading cause of deforestation", 
         "It takes more than _______ gallons of water to produce 1 pound of meat",
        "Animals raised for food produce approximately _____ times as much excrement as the entire human population",
        "Raising animals for food now uses a staggering _____ of the Earth’s land mass.",
        "Of all the agricultural land in the U.S., ______ is used to raise animals for food and grow grain to feed them",
        "The world’s cattle alone consume a quantity of food equal to the caloric needs of ________ people—more than the entire human population on Earth",
        "_____ football fields’ worth of land is bulldozed every minute to create more room for farmed animals and the crops that feed them."
    ],
    
      a1 : ["Agriculture", "pollution", "bykill", "oil spills"],
      a2 : ["2,400", "200", "22,000", "50"],
      a3 : ["130", "20", "100", "30"],
      a4 : ["30%", "20%", "90%", "65%"],
      a5 : ["80%","30%", "20%", "90%"],
      a6 : ["8.7 billion", "200 million", "22,000", "50 billion" ],
      a7 : ["Seven", "Eight", "Ninety", "45"],

      setData : function(){
        answers.push(this.a1);
        answers.push(this.a2);
        answers.push(this.a3);
        answers.push(this.a4);
        answers.push(this.a5);
        answers.push(this.a6);
        answers.push(this.a7);
       
        
        
        for (var i = 0; i < 7; i++){
            questions.push(this.q[i]);
        }

        triviaTheme = "cattle";
        $("#question").text(this.q[0]); 

        var j = Math.floor(Math.random()*4); 
        var temp = answers[qCount][0];
        var shuffled = answers[qCount];
        corrAns = answers[qCount][0];
    
        console.log("answer: " + answers[qCount][0]);
    
         shuffled[0] = answers[qCount][j];
         shuffled[j]= temp;
    
         console.log("answers[qCount]: " + shuffled );
        
        for (var i = 0; i < 4; i++ ){
            
            option = $("<button>");
            option.addClass("answer");
            option.attr("value", answers[qCount][i]);
            option.text(answers[0][i]);
            $(".choices").append(option);
        }  
        qCount = 1;

   //     console.log(ans);

        intervalId = setInterval(subTime, 1000); 
    }

};

var polar = {
    
    q: [
        "_____ is the leading cause of deforestation", 
        "In the last 100 years, the Environmental Protection Agency reported that the sea level has risen by ______ inches",
        "Most major cities are in low lying coastal areas. They will be inundated when sea levels rise more than _____ feet.",
        "According to NASA, the polar ice caps are melting at an alarming rate of ____ per decade.",
        "The thickness of the Arctic Ice has decreased by ______ since the 1960s.",
        "According to scientists at the U.S Center for Atmospheric Research, if the current rate of global temperature rise continues, the Arctic will be free of Ice by ______",
        "Warmer ocean temperatures will mean ______ frequent and _______ intense weather events."
    ],
    
     a1 : ["Agriculture", "pollution", "bykill", "oil spills"],
     a2 : ["6-8", "2-3", "15-16", "100-200"],
     a3 : ["6", "2", "1", "32"],
     a4 : ["9%", "29%", "90%", "20%"],
     a5 : ["40%", "20%", "9%", "85%"],
     a6 : ["2040", "2010", "2030", "2100"],
     a7 : ["more, more", "less, more", "more, less", "less, less"],


     setData : function(){
        answers.push(this.a1);
        answers.push(this.a2);
        answers.push(this.a3);
        answers.push(this.a4);
        answers.push(this.a5);
        answers.push(this.a6);
        answers.push(this.a7);
      

        
        for (var i = 0; i < 7; i++){
            questions.push(this.q[i]);
        }

        triviaTheme = "polar";
        $("#question").text(this.q[0]);
        
        var j = Math.floor(Math.random()*4); 
        var temp = answers[qCount][0];
        var shuffled = answers[qCount];
        corrAns = answers[qCount][0];
    
        console.log("answer: " + answers[qCount][0]);
    
         shuffled[0] = answers[qCount][j];
         shuffled[j]= temp;
    
         console.log("answers[qCount]: " + shuffled );
        
        for (var i = 0; i < 4; i++ ){
            
            var option = $("<button>");
            option.addClass("answer");
            option.attr("value", answers[qCount][i]);
            option.text(answers[0][i]);
            $(".choices").append(option);
        }  
        qCount = 1;

  //      console.log(ans);

        intervalId = setInterval(subTime, 1000); 
    }

};

var oceans = {

    q: ["A report from the World Resources Institute (WRI) in 1998, found that around ______ of coral reefs are threatened by human activity.",
     "According to a study done by the University of Georgia, ________ pounds of plastic trash winds up in our oceans each year.",
     "Ocean pollutions kills more than ________ sea birds each year.",
     "Approximately every square mile of ocean has more than _______ of plastic floating in it.",
     "There are about _____ dead zones in the ocean, which covers a similar size as the United Kingdom.",
     "There’s enough plastic in the ocean to circle the Earth _____ time(s).",
     "_______ is the most common element found in the ocean today."

    ],
    
     a1 : ["85%", "20%" , "5%", "9%"],
     a2 : ["18 billion", "200", "18 million", "200,000"],
     a3 : ["one million", "100", "100,000", "20"],
     a4 : ["45,000", "600", "20", "1 million" ],
     a5 : ["500", "8", "96", "1 million"],
     a6 : ["4", "300", "1", "560"],
     a7 : ["Plastic", "coral", "fish", "oil"],

   
     setData : function(){
        answers.push(this.a1);
        answers.push(this.a2);
        answers.push(this.a3);
        answers.push(this.a4);
        answers.push(this.a5);
        answers.push(this.a6);
        answers.push(this.a7);
        

        
        for (var i = 0; i < 7; i++){
            questions.push(this.q[i]);
        }

        triviaTheme = "oceans"; 
        $("#question").text(this.q[0]); 

        var j = Math.floor(Math.random()*4); 
        var temp = answers[qCount][0];
        var shuffled = answers[qCount];
        corrAns = answers[qCount][0];
    
        console.log("answer: " + answers[qCount][0]);
    
         shuffled[0] = answers[qCount][j];
         shuffled[j]= temp;
    
         console.log("answers[qCount]: " + shuffled );
        
        for (var i = 0; i < 4; i++ ){
            
            var option = $("<button>");
            option.addClass("answer");
            option.attr("value", answers[qCount][i]);
            option.text(answers[0][i]);
            $(".choices").append(option);
        }  
        qCount = 1;

  //      console.log(ans);

        intervalId = setInterval(subTime, 1000); 
    }
};

$(document).on("click", "#Ice_Caps", function() {
   
    $('body').css("background-image", "url(./assets/images/iceCap.jpg)"); 
    $("#notBegun").empty();
    //$("#notBegun").css("visibility", "collapse"); 
    $(".started").css("visibility", "visible"); 
    polar.setData();

});

$(document).on("click", "#Deforestation", function() {
    $('body').css("background-image", "url(./assets/images/deforestation.jpg)"); 
    $("#notBegun").empty();
    //$("#notBegun").css("visibility", "collapse"); 
    $(".started").css("visibility", "visible"); 
    deforestation.setData();

});

$(document).on("click", "#Agriculture", function() {
    $('body').css("background-image", "url(./assets/images/cattle.jpg)"); 
    $("#notBegun").empty();
   // $("#notBegun").css("visibility", "collapse"); 
    $(".started").css("visibility", "visible"); 
    cattle.setData();
    

});

$(document).on("click", "#Ocean", function() {
    $("body").css("background-image", "url(./assets/images/coral.jpg)"); 
    $("#notBegun").empty();
    //$("#notBegun").css("visibility", "collapse"); 
    $(".started").css("visibility", "visible"); 
    oceans.setData();
});

$(document).on("click", "#submit", function() {
    resetTime();
    $("#countDown").text ("Time Left: " + timeConverter(0));
    winOrLoss();
    computeQuestions();
    

});




function computeQuestions(){
    $(".choices").empty();
    
    console.log(ans);
    if(qCount > 6){
        
        $(".started").css("visibility", "collapse");
        console.log("started class emptied");

        $("#resultsIn").append("<p> You got " + points + " correct.<p>");
        $("#resultsIn").append("<p> You got " + (7 - (points + unAnswered)) + " incorrect.<p>");
        $("#resultsIn").append("<p> You left " + unAnswered + " unanswered.<p>");

        if (points > 3){
            $("#resultsIn").append("<p> Okay, you kinda know your environmental stuff <p>");
        }else{
            $("#resultsIn").append("<p> You really need to study up on climate change! <p>");
            
        }

      //  console.log(qCount);
        restart = $("<button>");
        restart.addClass("restart");
        restart.text("Replay");
        $("#resultsIn").append(restart);
    }else{

     //   $(".started").css("visibility", "visible");
    $("#question").text(questions[qCount]); 
    var j = Math.floor(Math.random()*4); 
    var temp = answers[qCount][0];
    var shuffled = answers[qCount];
    corrAns = answers[qCount][0];

    console.log("answer: " + answers[qCount][0]);

     shuffled[0] = answers[qCount][j];
     shuffled[j]= temp;

     console.log("answers[qCount]: " + shuffled );

    for (var i = 0; i < shuffled.length; i++ ){
       // j = Math.floor(Math.random()*4);
        option = $("<button>");
        
        option.addClass("answer");
        option.attr("value", shuffled[i]);
        option.text(shuffled[i]);
        $(".choices").append(option);

    }
    qCount++;
    intervalId = setInterval(subTime, 1000); 
    
    }

   // console.log(option);

}

$(document).on("click", ".answer", function() {
    $(".answer").css("background-color", "rgba(255, 255, 255, 0.185)");
    ans = this.value;
    //console.log(ans);
    $(this).css("background-color", "rgba(151, 180, 252, 0.26)");
 //   computeQuestions(); //take this out if you want to be able to change your mind about answers

});

function winOrLoss(){
    
    var image = $("<img>");

 //   console.log("ans: " + ans);
 //   console.log("answers[qCount][0]:" + answers[qCount-1][0] );
    if (ans == corrAns){
        points++;
        $(".started").css("visibility", "collapse");   
        image.addClass("winOrLoss");
        image.attr("src", "./assets/images/" +  triviaTheme +  "Win.jpg");
        image.attr("height", "400px");
        image.attr("width", "400px");
       // intervalId = setInterval(($(".started").append(image)), 120); 
       $("#notBegun").text("Yay! You got that right!");

       $("#notBegun").append("<p> You have gotten " + points + " right so far <p>");

       $("#notBegun").append(image);

      
       timeOut = setTimeout(contGame,2500);

      //  resetTime();
        
    }else if ( ans == ""){
        unAnswered++;

    }else{
      $(".started").css("visibility", "collapse");
        //image.addClass("winOrLoss");
        image.attr("src", "./assets/images/" + triviaTheme + "Loss.jpg");
        image.attr("height", "400px");
        image.attr("width", "400px");
        $("#notBegun").text("Sucks! The answer was " + corrAns);
        $("#notBegun").append("<p> You have gotten " + points + " right so far <p>");
        $("#notBegun").append(image);
       
        timeOut = setTimeout(contGame,2500);
        
        

       // intervalId = setInterval(contGame, 120); 
       // resetTime();
    }
    ans = ""; 
}

//starting game again withOUT refreshing 

$(document).on("click", ".restart", function() {

    $('body').css("background-image", "url(./assets/images/globalWarming.jpg)"); 


     time = 120;
     triviaTheme = "";
     ans = "";
     qCount = 0;
     questions = [];
     answers = [];
     points = 0;
     option;
     unAnswered = 0;
 

   // location.reload();



    $("#notBegun").empty();

    $("#resultsIn").empty();

    var dButton = $("<button>");
    var aButton = $("<button>");
    var oButton = $("<button>");
    var pButton = $("<button>");

    dButton.addClass("btn btn-success");
    dButton.attr("id", "Deforestation")
    aButton.addClass("btn btn-warning");
    aButton.attr("id", "Agriculture")
    oButton.addClass("btn btn-primary");
    oButton.attr("id", "Ocean")
    pButton.addClass("btn btn-info");
    pButton.attr("id", "Ice_Caps")
    dButton.text("Deforestation");
    aButton.text("Agriculture");
    oButton.text("Ocean");
    pButton.text("Ice Caps");

    dButton.text("Deforestation");
    aButton.text("Agriculture");
    oButton.text("Ocean");
    $("#notBegun").append(dButton);
    $("#notBegun").append(aButton);
    $("#notBegun").append(oButton);
    $("#notBegun").append(pButton);

});



function contGame(){

    if (qCount != 7){
        $(".started").css("visibility", "visible");
        console.log("question number:" + qCount);
    }

    $("#notBegun").empty();
    clearTimeout(timeOut);
    
    
}


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
    time = 120;
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
