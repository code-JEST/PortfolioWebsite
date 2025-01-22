
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
  document.getElementById('content-about').style.right='30%';
  document.getElementById('content-about').style.display='block';
}
function hideWorkText(){
  var contentWork = document.getElementById('content-work');
  contentWork.style.opacity = '0.5';
  setTimeout(function() {
    contentWork.style.display = 'none';
}, 100);
}


// ----------------HIDE FRONT TEXT------------------------
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
  setTimeout(function () {
    contentWork.style.opacity = '1';
  }, 10);
}

function hideAboutText(){
  document.getElementById('content-about').style.right='200%';
}

// ----------------CHANGE RANDOM COLOR------------------------
// Function to generate a random color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to change all the CSS variables with random colors
function changeColors() {
  const root = document.querySelector(':root');
  const colorVars = [
      '--up-btn', '--basic-btn', '--front-text', '--hamburger-text', '--hamburger-textHover',
      '--color-bg1', '--color-bg2', '--color1', '--color2', '--color3', '--color4', '--color5', '--color-interactive',
      '--tile1', '--tile2', '--tile3', '--tile4', '--firefox-bg1', '--firefox-bg2', '--firefox-bg3'
  ];

  colorVars.forEach(variable => {
      root.style.setProperty(variable, getRandomColor());
  });
}

// Add an event listener to the "Colors" menu item
document.getElementById('color-change').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default link behavior
  changeColors();
});




// ------------------------ GITHUB TO WORK------------------------

 // GitHub username to fetch repositories for
 const username = "code-JEST";

 // GitHub API endpoint
 const apiUrl = `https://api.github.com/users/${username}/repos`;

 // Reference to content-work container
 const contentWork = document.getElementById("content-work");

 // Fetch repositories and display them
 async function fetchRepos() {
   try {
     const response = await fetch(apiUrl);
     if (!response.ok) {
       throw new Error("Failed to fetch repositories");
     }

     const repos = await response.json();

     // Clear existing content
     contentWork.innerHTML = "";

     // Populate with repository data
     repos.forEach((repo) => {
       const repoItem = document.createElement("div");
       repoItem.className = "grid-item medium";

       // HTML content for each repository
       repoItem.innerHTML = `
         <a href="${repo.html_url}" target="_blank">
           <span>${repo.name}</span>
         </a>
         <p>${repo.description || "No description available."}</p>
       `;
       contentWork.appendChild(repoItem);
     });
   } catch (error) {
     contentWork.innerHTML = `<p>Error loading repositories: ${error.message}</p>`;
   }
 }

 // Call the function on page load
 fetchRepos();