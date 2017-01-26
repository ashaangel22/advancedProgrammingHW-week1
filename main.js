"use strict";

// console threw error: "Uncaught ReferenceError: i is not defined"
// fixed by adding this to code: var i = 0

function createBubble() {
  var bubble = document.createElement("div");
  bubble.setAttribute("class", "bubble");
  var size = Math.round(Math.random() * 100);
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.top = (window.innerHeight - size) + "px";
  bubble.style.left = (Math.round(Math.random() * (window.innerWidth + size) + 1)) + "px";

  document.body.appendChild(bubble);

  var speed = Math.round(Math.random() * 10 - 15);
  var direction = Math.round(Math.random() * 20 - 10);

  var moveInterval = setInterval(function() {
  	var newTop = parseInt(bubble.style.top) + speed;
  	var newLeft = parseInt(bubble.style.left) + direction;
  	bubble.style.top = newTop + "px";
  	bubble.style.left = newLeft + "px";

  	if (newTop < -100  ||
  		newLeft < -100 ||
  		newLeft > window.innerWidth) {
  		window.clearInterval(moveInterval);
        }
  });
}

function showText() {
	var text = document.getElementsByTagName('p')[0];
	var studentName = "Atiya";
	text.innerHTML += ", " + studentName + "!";
	text.style.opacity = 1;
}

window.onload = function() {
	var button = document.querySelector("#btn");
	button.addEventListener("click", function() {
		button.style.display = "none";
		for (var i = 0; i < 100; i++) {
			createBubble();
		}
        
        showText();
	});
};


// Researching in JS



//1. Shuffle  

//    Link: http://jsfiddle.net/9L8rs/5/
//    
//    Code: String.prototype.shuffle = function() {
//    return this.split(" ").map(function(word, i) {
//        var a = word.split(""),
//            n = a.length;
//
//        for (var i = n - 1; i > 0; i--) {
//            var j = Math.floor(Math.random() * (i + 1));
//            var tmp = a[i];
//            a[i] = a[j];
//            a[j] = tmp;
//         }
//        return a.join("");
//    }).join(" ");
//}
//
//alert("Hello".shuffle());



// 2) Common Test

//		Name: FizzBuzz Test

//		Code: (Don't understand this though.)
		
//		public static void main(String[] args) {		
//		  for(int i = 0; i < 100; i++, System.out.println(i % 3 == 0 || i % 5 == 0 ? ((i % 3) == 0 ?                "fizz" : "") + ((i % 5) == 0 ? "buzz" : "")  : i));
//	       }

//		Link: http://wiki.c2.com/?FizzBuzzTest



// 3) Email Validation 

//     Code:

//	function validateEmail(email) {
//  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//  return re.test(email);
//}
//
//function validate() {
//  $("#result").text("");
//  var email = $("#email").val();
//  if (validateEmail(email)) {
//    $("#result").text(email + " is valid :)");
//    $("#result").css("color", "green");
//  } else {
//    $("#result").text(email + " is not valid :(");
//    $("#result").css("color", "red");
//  }
//  return false;
//}
//
//$("#validate").bind("click", validate);

//     Link: http://stackoverflow.com/questions/46155/validate-email-address-in-javascript



// 4) Window Outer Width 
// Info: Browser Compatibility 

// Chrome: 1 	
// Firefox (Gecko): 1.0 (1.7 or earlier)
// Internet Explorer: 9
// Opera: 9
// Safari: 3

// Link: https://developer.mozilla.org/en-US/docs/Web/API/Window/outerWidth
