// Sjekker om det er firfox eller chrome:
let isFirefox = typeof InstallTrigger !== 'undefined';
let isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

if (isChrome) {
    // Apply CSS filter for Chrome
    document.documentElement.style.setProperty('--my-filter', 'url(#goo) blur(40px)');
} else if (isFirefox) {
    // Remove or change CSS filter for Firefox
    document.documentElement.style.setProperty('--my-filter', 'none');
}


// Mouse Animation:
const cursor = document.querySelector(".interactive")

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

   // Calculate the center of the screen
   let centerX = window.innerWidth / 2;
   let centerY = window.innerHeight / 2;
 
   cursor.style.top = (y - centerY) + "px";
   cursor.style.left = (x - centerX) + "px";
});
// Mouse Cursor:
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
window.addEventListener("mousemove", function (e){
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  //Om du vil ha fixed cursor uten animation
  //cursorOutline.style.left = `${posX}px`;
  //cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 100, fill: "forwards"});
})

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
// Loader
$(window).on("load",function(){
  setTimeout(function(){ 
    $(".loader-wrapper").fadeOut("slow");
  }, 2000);
});