
// NAVIGATION
const bars = document.querySelector("#bars")
const times = document.querySelector("#times")
const nav = document.querySelector(".navLinkContainer")


bars.addEventListener("click", () => {
    // console.log(bars);
    if (!nav.classList.contains("navShow")) {
       nav.classList.add("navShow"); 
    } else {
       nav.classList.toggle("navShow"); 
    }
})


//TO-TOP
const totop = document.querySelector(".toTopContainer");
const mainnav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    const scrollHeight = window.scrollY;
    // console.log(totop);
    if(scrollHeight > 500){
        totop.classList.add("active");
    }else{
        totop.classList.remove("active");
    }
});


// SLIDER
const sliderImage = document.querySelectorAll('.sliderImage img')
const leftBtn = document.querySelector('#left')
const rightBtn = document.querySelector('#right')


const next_slide = () => {
    const siderActive = document.querySelector(".siderActive");
    
    const activeDiv = siderActive.classList;
    
    const nextslider = siderActive.nextElementSibling;
    
    siderActive.classList.remove("siderActive");
    if (nextslider) {
        nextslider.classList.add("siderActive")
    } else {
        sliderImage[0].classList.add("siderActive")
    }
}

const prev_slide = () => {
    const siderActive = document.querySelector(".siderActive");
    // console.log(123);
    const activeDiv = siderActive.classList;
    // console.log(activeDiv);
    const prevslider = siderActive.previousElementSibling;
    // console.log(prevslider);
    siderActive.classList.remove("siderActive");
    if (prevslider) {
        prevslider.classList.add("siderActive");
    } else {
        sliderImage[sliderImage.length - 1].classList.add("siderActive")
    }
}

rightBtn.addEventListener("click", () => {
    next_slide()
})

leftBtn.addEventListener("click", () => {
    prev_slide()
})

setInterval(() => next_slide(), 3000)


//SMOOHT SCROLL
















