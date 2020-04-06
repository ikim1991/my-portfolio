// Adding Dropdown Functionality on the main index.html page

const button = document.querySelector("#myButton");
const dropMenu = document.querySelector("#dropBar");

function collapseDropDown() {
  if(dropMenu.className.indexOf("w3-show") == -1){
    dropMenu.className += " w3-show";
    button.className = button.className.replace(" fa fa-bars", " fa fa-close");
  }
}

function hideDropDown(){
  if(dropMenu.className.indexOf("w3-show") != -1){
    dropMenu.className = dropMenu.className.replace(" w3-show", "");
    button.className = button.className.replace(" fa fa-close", " fa fa-bars");
  }
}

button.addEventListener("mouseover", collapseDropDown);
button.addEventListener("mouseout", hideDropDown);
dropMenu.addEventListener("mouseover", collapseDropDown);
dropMenu.addEventListener("mouseout", hideDropDown);

// Adding functionality to the "Learn More" button
function buttonFunction() {
  document.location.href = "./about.html"
}

// NavBar routing functionality
const about = document.querySelector(".about");
const resume = document.querySelector(".resume");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");

function pageRoute(event){
  if(event.target.classList.contains("about") && !document.location.href.includes("about")){
    document.location.href = "./about.html"
  } else if(event.target.classList.contains("resume") && !document.location.href.includes("resume")){
    document.location.href = "./resume.html"
  } else if(event.target.classList.contains("projects") && !document.location.href.includes("projects")){
    document.location.href = "./projects.html"
  } else if(event.target.classList.contains("contact") && !document.location.href.includes("contact")){
    document.location.href = "./contact.html"
  }
}

about.addEventListener("click", pageRoute);
resume.addEventListener("click", pageRoute);
projects.addEventListener("click", pageRoute);
contact.addEventListener("click", pageRoute);
