$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});


//    PRICE TABLE SLIDER INDEX PAGE

const previous = document.getElementById ('prev');
const next = document.getElementById ('next');
const lists = document.getElementById ('sliderHold').children;
const allLists =  lists.length;
let index = 0;

previous.addEventListener('click', () => {
    nextImage('next');
})

next.addEventListener('click', () => {
    nextImage('prev')
})


//Changes the pricing list on click INDEX PAGE

function nextImage(direction) {
    if(direction == 'next' ) {
        index++;
        if(index == allLists) {
            index = 0;
        }
    } else {
        if(index == 0) {
            index = allLists - 1;
        } else {
            index--;
        }
    } 
        
    
    //Gives the class "main" to the list that must be shown

    for(let i = 0; i < lists.length; i++) {
        lists[i].classList.remove('main');
    }
    lists[index].classList.add('main');
} 





// booking page 2 haidresser selection
function togglegolden() {
  document.getElementById("hdwael").style.border="2px solid goldenrod";
}
function togglegolden1(){
document.getElementById("hdkisa").style.border="2px solid goldenrod";}

function togglegolden2(){
document.getElementById("hdram").style.border="2px solid goldenrod";}



