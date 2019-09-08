const navbar = document.getElementById("navbar");
const navbarBtn =  document.getElementById("navbarBtn");
const navLinks = document.querySelectorAll("a.nav"); 
let navList = navbar.getElementsByTagName("ul")[0]; 

window.addEventListener('scroll', function(){ 
    changeNavbarOnScroll(navbar); 
    setActiveOnScroll();
});

//change color of navbar when it is scrolled
function changeNavbarOnScroll(navbar){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        navbar.style.backgroundColor = "#222";
    }else{
        navbar.style.backgroundColor = "";
    }
}

//change active link onscroll function
function setActiveOnScroll(){
    const sections = document.querySelectorAll("#header, #project-section, #about-section");
    
    sections.forEach((section) => {
        if(window.pageYOffset >= section.offsetTop - 400){
            sectionTargetId = "#" + section.id;  
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("activeLink")
        if(link.getAttribute("href") == sectionTargetId){
            link.classList.add("activeLink");
        }
    });
}

// toggle navbar
navbarBtn.onclick = function(){ toggleNavbar() }
function toggleNavbar(){
    navList.classList.toggle("toggleNav");
}

//close navbar if the links are clicked
navLinks.forEach((elem) => elem.addEventListener('click', clickNavLinks));

function clickNavLinks(ev){
    let isOpen  = navList.classList.contains("toggleNav");
    (isOpen) ? navbarBtn.click() : false;

    //call smootch scroll function
    smoothScroll(ev); 
}

// hide the nav item if the target is != navbarBtn
window.onclick = function(ev){
    if(navList.classList.contains("toggleNav")){
        if(!ev.target.matches(".fa-bars")){
            navbarBtn.click();
        }
    }
}

function smoothScroll(ev){
    ev.preventDefault();

    let start = null;
    const targetId = ev.currentTarget.getAttribute("href");
    const startPos = window.pageYOffset;
    const targetPos = document.querySelector(targetId).offsetTop;
    const distance = targetPos - startPos;
    const duration = 500;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        window.scrollTo(0, easeInOutQuad(progress, startPos, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }
}