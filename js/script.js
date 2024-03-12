// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

let mydarken = document.getElementById("darkmode");

function darken() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  mydarken.style.display = "none"
  mydarken2.style.display = "flex"

  var img = document.getElementById("main-img");
  img.src="/image/minecraft_black.png";
} 

let mydarken2 = document.getElementById("darkmode2");

function darken2() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  mydarken2.style.display = "none"
  mydarken.style.display = "flex"

  var img = document.getElementById("main-img");
  img.src="/image/minecraft.png";
} 
// loader
$(window).on("load",function(){
  setTimeout(function(){ 
    $(".loader-wrapper").fadeOut("slow");
  }, 2000); // Setter forsinkelsestid til 5000 millisekunder (5 sekunder)
});