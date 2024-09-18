// FAQ Section

const accordians = document.querySelectorAll(".question-answer");

accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');  
    const answer = accordian.querySelector('.answer'); 
    
    // Class toggle
    accordian.addEventListener('click',() =>{
        if(icon.classList.contains('active')){
            icon.classList.remove("active");
            answer.style.maxHeight = null;
        }
        else{
          icon.classList.add("active");
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});


 // Animation
 const sr = ScrollReveal({
    origin: 'top',
    distance: '70px',
    duration: 2200,
    delay: 200,
    reset: true,
    interval: 300,
})

sr.reveal('.faq-section',{origin:'top',interval: 100,delay: 250})
sr.reveal('.question-answer .question',{origin:'bottom',interval: 500,delay: 150})