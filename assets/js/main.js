const navbar = document.getElementById("navbar");
const navbarBtn =  document.getElementById("navbarBtn");
const navLinks = document.querySelectorAll("#navbar > ul > li > a");
const navList = navbar.getElementsByTagName("ul")[0];

window.onscroll = function(){ changeNavbarOnScroll(navbar); };

function changeNavbarOnScroll(navbar){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        navbar.style.backgroundColor = "#222";
    }else{
        navbar.style.backgroundColor = "";
    }
}

// toggle navbar
navbarBtn.onclick = function(){ toggleNavbar() }
function toggleNavbar(){
    navList.classList.toggle("toggleNav");
}

//close navbar if the links are clicked
navLinks.forEach((elem) => elem.addEventListener('click', clickNavLinks));

function clickNavLinks(){
    let isOpen  = navList.classList.contains("toggleNav");
    (isOpen) ? navbarBtn.click() : false
}

