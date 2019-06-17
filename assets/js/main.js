let navBtn = document.getElementById("navbar-btn");
let cards = document.querySelectorAll(".card");

cards.forEach(card => card.addEventListener('click', toggleFunc, true));

//toggle cards overlay
function toggleFunc(){
    cards.forEach((elem) => {
        if(elem != this){
            elem.getElementsByClassName("card-overlay")[0].style.height = "0%";
        }
    });

    let cardOverlay  = this.getElementsByClassName("card-overlay")[0];
    cardOverlay.style.height == "100%" ? cardOverlay.style.height = "0%" : cardOverlay.style.height = "100%";
}

//toggle navbar
 navBtn.onclick = function(e){
     document.querySelector("#navbar ul").classList.toggle("toggle");
     e.stopPropagation; 
 }  