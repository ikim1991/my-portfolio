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
