
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

const slider = ["img/slider1.jpg", "img/slider2.jpg", "img/slider3.jpg", "img/slider4.jpg"];

const left = document.querySelector("#left")
const right = document.querySelector("#right")
const slide = document.querySelector(".sliderImage img")

let counter = 0
const len = slider.length

// console.log(len);

window.addEventListener("DOMContentLoaded", () => {
    const items = len[counter];
    slider.src = items
    // console.log(items);
})

const newslide = (count) => {
    const items = slider[count]
    slider.src = items
    // console.log(items);
}


left.addEventListener("click", () => {
    // console.log(1234);
    counter --;
    if(counter < 0){
        counter = len - 1;
    }
    console.log(counter);
    newslide(counter);
})





















