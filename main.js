
// NAVIGATION
const bars = document.querySelector("#bars");
const times = document.querySelector("#times");
const nav = document.querySelector(".navLinkContainer")


bars.addEventListener("click", () => {
    // console.log(bars);
    if (!nav.classList.contains("navShow")) {
       nav.classList.add("navShow"); 
    }else{
       nav.classList.remove("navShow"); 
    }
})


//TO-TOP
const totop = document.querySelector(".toTopContainer");
const mainnav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    // console.log(totop);
    if(scrollHeight > 500){
        totop.classList.add("active");
    }else{
        totop.classList.remove("active");
    }
});


// SLIDER

const slide = ["img/slider1.jpg", "img/slider2.jpg", "img/slider3.jpg", "img/slider4.jpg"];

const left = document.querySelector("#left")
const right = document.querySelector("#right")
const sliderImg = document.querySelector("#imgSlider")

let counter = 0
const len = slide.length

// console.log(slide);

window.addEventListener('DOMContentLoaded', () => {
    const items = slide[counter];
    sliderImg.src = items;
    // console.log(items);
})

const newSlide = (count) => {
    const items = slide[count];
    sliderImg.src = items;
}

left.addEventListener('click', () => {
    // console.log(123);
    counter --
    if(counter < 0){
        counter = len -1
    }
    newSlide(counter)
})
right.addEventListener('click', () => {
    counter ++
    if(counter > len -1){
        counter = 0;
    }
    newSlide(counter)
})


















