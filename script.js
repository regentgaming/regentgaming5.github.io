var button = document.getElementById('start')
var hello = document.getElementById('hello')
var explain = document.getElementById('explain')

var message = "Hi sweetie! I'm sorry that this is all I could give you but I promise I put so much effort into it. I was so agaisnt going out to a store and just buying a gift because I wanted it to be something special and I wanted it to be perfect. So I figured that I would have the best control over it being perfect if I made it myself. I really do love you sweetie, I promise with all my heart. I know things got kind of rough yesterday, but I promise that I still love you and always will. You mean so much to me and I can't wait to see how you react when you read this. You make my life so much better and I can't wait for our future together. I know that my gift for you could have been better, but I hope that you still love it. Happy Valentines Day my love <3"

var page = document.body;

var startPuzzle = function() {
  button.parentNode.removeChild(button);
  hello.parentNode.removeChild(hello);
  explain.parentNode.removeChild(explain);
  var loveP = document.createElement('p');
  loveP.id = "message";
  loveP.innerHTML = message;
  page.appendChild(loveP);
  loveP.hidden = true;
  var cluesDiv = document.createElement("div");
  cluesDiv.id = "clues";
  page.appendChild(cluesDiv)
  for (var i = 0; i < 4; i++) {
    var test = document.createElement("div");
    test.id = `clue${i}`;
    cluesDiv.appendChild(test);
  }


//clue0 v
  document.getElementById("clue0").appendChild(document.createTextNode("When talking to each other"));
  document.getElementById("clue0").appendChild(document.createElement("br"));
  document.getElementById("clue0").appendChild(document.createTextNode("A term of endearment from lover to lover used often"));
  document.getElementById("clue0").appendChild(document.createElement("br"));
  document.getElementById("clue0").appendChild(document.createTextNode("A word we both smile"));
  document.getElementById("clue0").appendChild(document.createElement("br"));
  document.getElementById("clue0").appendChild(document.createTextNode("When the other says to us"));
  document.getElementById("clue0").appendChild(document.createElement("br"));
  document.getElementById("clue0").appendChild(document.createElement("br"));
  document.getElementById("clue0").appendChild(document.createTextNode("What am I?"));
  var input0 = document.createElement("input")
  input0.id = "answer0"
  document.getElementById("clue0").appendChild(input0);
  document.getElementById("clue0").appendChild(document.createElement("br"));
  document.getElementById("clue0").appendChild(document.createElement("br"));

//clue0 ^
//clue1 v

  document.getElementById("clue1").appendChild(document.createTextNode("In a park by the water"));
  document.getElementById("clue1").appendChild(document.createElement("br"));
  document.getElementById("clue1").appendChild(document.createTextNode("Surrounded by friends at the time"));
  document.getElementById("clue1").appendChild(document.createElement("br"));
  document.getElementById("clue1").appendChild(document.createTextNode("But forgetting about them"));
  document.getElementById("clue1").appendChild(document.createElement("br"));
  document.getElementById("clue1").appendChild(document.createTextNode("Enthralled by the music and each other"));
  document.getElementById("clue1").appendChild(document.createElement("br"));
  document.getElementById("clue1").appendChild(document.createElement("br"));
  document.getElementById("clue1").appendChild(document.createTextNode("What song am I?"));
  var input1 = document.createElement("input")
  input1.id = "answer1"
  document.getElementById("clue1").appendChild(input1);
  document.getElementById("clue1").appendChild(document.createElement("br"));
  document.getElementById("clue1").appendChild(document.createElement("br"));

//clue1 ^
//clue2 v

document.getElementById("clue2").appendChild(document.createTextNode("A flying creature"));
  document.getElementById("clue2").appendChild(document.createElement("br"));
  document.getElementById("clue2").appendChild(document.createTextNode("Named after charaters of red and blue"));
  document.getElementById("clue2").appendChild(document.createElement("br"));
  document.getElementById("clue2").appendChild(document.createTextNode("A joining of names"));
  document.getElementById("clue2").appendChild(document.createElement("br"));
  document.getElementById("clue2").appendChild(document.createTextNode("Of those who fought for the world"));
  document.getElementById("clue2").appendChild(document.createElement("br"));
  document.getElementById("clue2").appendChild(document.createElement("br"));
  document.getElementById("clue2").appendChild(document.createTextNode("Who am I?"));
  var input2 = document.createElement("input")
  input2.id = "answer2"
  document.getElementById("clue2").appendChild(input2);
  document.getElementById("clue2").appendChild(document.createElement("br"));
  document.getElementById("clue2").appendChild(document.createElement("br"));

//clue2^
//clue3v

document.getElementById("clue3").appendChild(document.createTextNode("An instrument of difficulty"));
  document.getElementById("clue3").appendChild(document.createElement("br"));
  document.getElementById("clue3").appendChild(document.createTextNode("For the hands and wrist"));
  document.getElementById("clue3").appendChild(document.createElement("br"));
  document.getElementById("clue3").appendChild(document.createTextNode("Us both pluck its strings sixfold"));
  document.getElementById("clue3").appendChild(document.createElement("br"));
  document.getElementById("clue3").appendChild(document.createTextNode("To make the music of our love"));
  document.getElementById("clue3").appendChild(document.createElement("br"));
  document.getElementById("clue3").appendChild(document.createElement("br"));
  document.getElementById("clue3").appendChild(document.createTextNode("Who am I?"));
  var input3 = document.createElement("input")
  input3.id = "answer3"
  document.getElementById("clue3").appendChild(input3);
  document.getElementById("clue3").appendChild(document.createElement("br"));
  document.getElementById("clue3").appendChild(document.createElement("br"));

//clue3 ^

  cluesDiv.appendChild(document.createElement("br"));
  var checkButton = document.createElement("button");
  checkButton.appendChild(document.createTextNode("Check your answers!"));
  checkButton.id = "check"
  cluesDiv.appendChild(checkButton);
  
  var checkAnswers = function() {
    if (input0.value.toLowerCase() === "sweetie" && input1.value.toLowerCase() === "the night we met" && input2.value.toLowerCase() === "hiro2" && input3.value.toLowerCase() === "guitar") {
      cluesDiv.hidden = true;
      loveP.hidden = false;
    } else {
      alert("Try Again!");
    }
  }
  checkButton.onclick = checkAnswers;

};

button.onclick = startPuzzle;



