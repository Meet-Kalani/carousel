// DOM elements
const previousBtn = document.querySelector('.previous-btn');
const nextBtn = document.querySelector('.next-btn');
const slider = document.querySelector('.slider');

nextBtn.addEventListener('click',()=>{
    slider.scrollLeft += slider.clientWidth;
})

previousBtn.addEventListener('click',()=>{
    slider.scrollLeft -= slider.clientWidth;
})

document.addEventListener('DOMContentLoaded',()=>{
    setInterval(()=>{
        if(slider.scrollLeft >= 1200){
            slider.scrollLeft = 0;
        } else {
            slider.scrollLeft += slider.clientWidth;
        }
    },5000)
})