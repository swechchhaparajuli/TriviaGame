

var t = 5000;
var deforestationBool = false;
var cattleBool = false; 
var polarBool = false; 
var oceanBool = false; 
var ans = "";


var deforestation = {

    q1: "_____ is the leading cause of deforestation",
    q2: "___________ contributes between 12 percent and 17 percent of annual global greenhouse gas emissions.",
    q3: "If the current rate of deforestation continues, it will take less than _______ years to destroy all the rainforests on the earth.",
    q4: "The rate of deforestation equals to loss of _______ football field(s) every minute.",
    q5: "___________ of the world’s tropical forests has already been cleared.",
    q6: "The United States has less than ____ of the world’s population but consumes more than ______ of the world’s paper.",
    q7: "_____ of the world’s oxygen is produced in the Amazon forest.",

      a1 : ["Agriculture"],
      a2 : ["Loss of forests"],
      a3 : ["100 years", "10 years", "35 years", ],
      a4 : ["20", "1", "3", "80"],
      a5 : ["50%", "25%", "83%", "12%"],
      a6 : ["5% , 30%"],
      a7 : ["20%"],


    setData : function(){
        deforestationBool = true; 
        $("#question").text(this.q1); 
        for (var i = 0; i < this.a1.length; i++ ){
            var option = $("<button>");
            option.addClass("answer");
            option.attr("value", this.a1[i]);
            option.text(this.a1[i]);
            $(".answer").append(option);
            console.log(this.a1[i]);
        }

    }

};

var cattle = {
    
    q1: "A report from the World Resources Institute (WRI) in 1998, found that around ______ of coral reefs are threatened by human activity.",
    q2: "According to a study done by the University of Georgia, ________ pounds of plastic trash winds up in our oceans each year.",
    q3: "Ocean pollutions kills more than ________ sea birds each year.",
    q4: "Approximately every square mile of ocean has more than _______ of plastic floating in it.",
    q5: "There are about _____ dead zones in the ocean, which covers a similar size as the United Kingdom.",
    q6: "There’s enough plastic in the ocean to circle the Earth _____ times.",
    q7: "_______ are the most common element found in the ocean today.",
    
      a1 : ["Agriculture"],
      a2 : ["Loss of forests"],
      a3 : ["100 years", "10 years", "35 years", ],
      a4 : ["20", "1", "3", "80"],
      a5 : ["50%", "25%", "83%", "12%"],
      a6 : ["5% , 30%"],
      a7 : ["20%"],

    setData : function(){
        cattleBool = true; 
        $("#question").text(this.q1); 
        console.log(this.q1);
        for (var i = 0; i < this.a1.length; i++ ){
            var option = $("<button>");
            option.addClass("answer");
            option.attr("value", this.a1[i]);
            option.text(this.a1[i]);
            $(".answer").append(option);
            console.log(this.a1[i]);
        }

    }

};

var polar = {
    
    q1: "A report from the World Resources Institute (WRI) in 1998, found that around ______ of coral reefs are threatened by human activity.",
    q2: "According to a study done by the University of Georgia, ________ pounds of plastic trash winds up in our oceans each year.",
    q3: "Ocean pollutions kills more than ________ sea birds each year.",
    q4: "Approximately every square mile of ocean has more than _______ of plastic floating in it.",
    q5: "There are about _____ dead zones in the ocean, which covers a similar size as the United Kingdom.",
    q6: "There’s enough plastic in the ocean to circle the Earth _____ times.",
    q7: "_______ are the most common element found in the ocean today.",
    
     a1 : ["Agriculture"],
     a2 : ["Loss of forests"],
     a3 : ["100 years"],
     a4 : ["20"],
     a5 : ["50%"],
     a6 : ["5% , 30%"],
     a7 : ["20%"],


    setData : function(){
        polarBool = true; 
        $("#question").text(this.q1); 
        console.log(this.q1);
        for (var i = 0; i < this.a1.length; i++ ){
            var option = $("<button>");
            option.addClass("answer");
            option.attr("value", this.a1[i]);
            option.text(this.a1[i]);
            $(".answer").append(option);
            console.log(this.a1[i]);
        }

    }

};

var oceans = {

    q1: "A report from the World Resources Institute (WRI) in 1998, found that around ______ of coral reefs are threatened by human activity.",
    q2: "According to a study done by the University of Georgia, ________ pounds of plastic trash winds up in our oceans each year.",
    q3: "Ocean pollutions kills more than ________ sea birds each year.",
    q4: "Approximately every square mile of ocean has more than _______ of plastic floating in it.",
    q5: "There are about _____ dead zones in the ocean, which covers a similar size as the United Kingdom.",
    q6: "There’s enough plastic in the ocean to circle the Earth _____ times.",
    q7: "_______ are the most common element found in the ocean today.",
    
     a1 : ["85%", "20%" , "5%"],
     a2 : ["18 billion"],
     a3 : ["one million"],
     a4 : ["45,000"],
     a5 : ["500"],
     a6 : ["4"],
     a7 : ["Plastics"],

   
    setData : function(){
        oceansBool = true; 
        $("#question").text(this.q1); 
        console.log(this.q1);
        for (var i = 0; i < this.a1.length; i++ ){
            var option = $("<button>");
            option.addClass("answer");
            //option.attr("", this.a1[i]);
            option.text(this.a1[i]);
            $(".answer").append(option);
            console.log(this.a1[i]);
        }

    }
};

$("#Ice_Caps").on("click", function() {
   
    $('body').css("background-image", "url(file:///Users/Swechacha/Desktop/Bootcamp/week3/TriviaGame/assets/images/iceCap.jpg)"); 
    $("#notBegun").css("visibility", "collapse"); 
    $(".started").css("visibility", "visible"); 
    polar.setData();

});

$("#Deforestation").on("click", function() {
    $('body').css("background-image", "url(file:///Users/Swechacha/Desktop/Bootcamp/week3/TriviaGame/assets/images/deforestation.jpg)"); 
    $("#notBegun").css("visibility", "collapse"); 
    $(".started").css("visibility", "visible"); 
    deforestation.setData();

});

$("#Agriculture").on("click", function() {
    $('body').css("background-image", "url(file:///Users/Swechacha/Desktop/Bootcamp/week3/TriviaGame/assets/images/cattle.jpg)"); 
    $("#notBegun").css("visibility", "collapse"); 
    $(".started").css("visibility", "visible"); 
    cattle.setData();
    

});

$("#Ocean").on("click", function() {
    $("body").css("background-image", "url(file:///Users/Swechacha/Desktop/Bootcamp/week3/TriviaGame/assets/images/coral.jpg)"); 
    $("#notBegun").css("visibility", "collapse"); 
    $(".started").css("visibility", "visible"); 
    oceans.setData();


});

$("#answer").on("click", function() {
    
    

});


$("#submit").on("click", function() {

});





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
