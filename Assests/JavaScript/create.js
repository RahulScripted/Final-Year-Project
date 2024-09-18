document.querySelectorAll(".copy-prompt").forEach(function(button, index) {
    button.addEventListener("click", function() {
        // Get the associated paragraph text
        let copyText = document.querySelectorAll(".HTMLBox")[index].innerText;

        // Create a temporary textarea element to copy the text
        let temp = document.createElement("textarea");
        temp.value = copyText;
        document.body.appendChild(temp);
        // Select the text and copy it
        temp.select();
        document.execCommand("copy");

        // Remove the temporary textarea from the document
        document.body.removeChild(temp);

        // Change the button text to "Prompt Copied" and revert after 2 seconds
        let originalText = button.innerText;
        button.innerText = "Prompt Copied";
        setTimeout(function(){
            button.innerText = originalText;
        }, 2000);
    });
});

// Animation
 const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2600,
    delay: 200,
    reset: true,
    interval: 300,
})

sr.reveal('.l-side h1',{origin:'top'})
sr.reveal('.step',{origin:'left',interval: 100,delay: 250})
sr.reveal('.l-side .generate-btn',{origin:'left',interval: 100,delay: 250})
sr.reveal('.r-side',{origin:'right',delay: 250})
sr.reveal('.middle',{origin:'top'})
sr.reveal('.images-sec',{origin:'left',interval: 100,delay: 250})