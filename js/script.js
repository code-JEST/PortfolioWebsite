// ------------------Sjekker om det er firfox eller chrome (addet noe for firefox mobil)----------------------:
if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 || 
    navigator.userAgent.toLowerCase().indexOf('fennec') > -1 || 
    navigator.userAgent.toLowerCase().indexOf('fxios') > -1) {
  document.documentElement.classList.add('firefox');
  document.documentElement.style.setProperty('--my-filter', 'none');
}


// Hamburger menu:
function openMenu(){
  document.getElementById('container-hamburger').style.right='0%';
  document.getElementById('menu').style.opacity='1';
}
function closeMenu(){
  document.getElementById('container-hamburger').style.right='100%';
  document.getElementById('menu').style.opacity='0';
}

// Settings menu:
function openSettings(){
  document.getElementById('container-settings').style.right='50%';
  document.getElementById('container-settings').style.left='50%';
  document.getElementById('settings-menu').style.opacity='1';
}
function closeSettings(){
  document.getElementById('container-settings').style.right='100%';
  document.getElementById('container-settings').style.left='-50%';
  document.getElementById('settings-menu').style.opacity='0';
}
// Settings menu (change cursor)
const link = document.getElementById("cursor-change");
let cursorVisible = true;

link.addEventListener("click", function() {

  if (cursorVisible) {
    cursorDot.style.display = "none";
    cursorOutline.style.display = "none";
    cursorVisible = false;
    document.body.classList.toggle('show-cursor');

  } else {
    cursorDot.style.display = "block";
    cursorOutline.style.display = "block";
    cursorVisible = true;
    document.body.classList.toggle('show-cursor', false);
  }
});


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
} 

let mydarken2 = document.getElementById("darkmode2");

function darken2() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  mydarken2.style.display = "none"
  mydarken.style.display = "flex"
} 


// Loader
$(window).on("load",function(){
  setTimeout(function(){ 
    $(".loader-wrapper").fadeOut("slow");
  }, 2000);
});



// ----------------ABOUT------------------------
function openAbout(){
  document.getElementById('content-about').style.right='0%';
}
function hideWorkText(){
  var contentWork = document.getElementById('content-work');
  setTimeout(function() {
    contentWork.style.display = 'none';
}, 50);
  document.getElementById('content-work').style.right='200%';
}

function hideFrontText(){
  var elements = document.getElementsByClassName('content');
for(var i = 0; i < elements.length; i++){
    elements[i].style.transform = 'translateX(-100%)';
}
}



// ----------------WORK------------------------
function openWork() {
  var contentWork = document.getElementById('content-work');
  contentWork.style.display = 'grid';
  
  setTimeout(function() {
    contentWork.style.right = '25%';
    contentWork.style.transform = 'translateX(100)';
}, 50);
}

function hideAboutText(){
  document.getElementById('content-work').style.right='200%';
}
