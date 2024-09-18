var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints:{
        0:{
            slidesPerView : 1
        },
        768:{
            slidesPerView : 2
        },
        1024:{
            slidesPerView : 3
        }
    }
});

var about = document.querySelector(".swiper-wrapper");
var cursor = document.querySelector("#cursor");

about.addEventListener("mousemove" ,function(movement){
    let left = movement.x + "px";
    let top = movement.y + "px";
    gsap.to(cursor, {
        x : left,
        y : top,
        duration: 1,
        ease : "bounce.inout"
    }) 
});

about.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        opacity: 1
    })
})
about.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        opacity: 0
    })
})

// Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2200,
    delay: 200,
    reset: true,
})

// Upper-section
sr.reveal('.upper-section .img-content',{origin:'left',interval: 400,delay : 100})
sr.reveal('.upper-section .text-content',{origin:'right',interval: 400})


sr.reveal('.leader h5,.team',{origin:'top',delay : 100})
sr.reveal('.leader .mentor img',{origin:'top',delay : 100})
sr.reveal('.leader .mentor h3',{origin:'top',delay : 100})
sr.reveal('.leader .mentor p',{origin:'top',delay : 100})