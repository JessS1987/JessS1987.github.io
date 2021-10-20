//week 3 homework - Javascript game
//game of heads or tails

var personName;
personName = prompt("what's your name?");
alert("Hello " + personName + ". Nice to make your aquaintance.");

var play = confirm("Would you like the play heads or tails with me? If so just flip this coin!");
if (play==true) {
   if (Math.floor(Math.random() * 2) == 0) {
      alert("Heads!");
   } else {
      alert("Tails!");
   }
} else {
   alert("uh oh. Somethings gone wrong!");
}

alert("Thanks for playing " + personName + "!");