// Handling the initial image loading at startup
document.addEventListener('DOMContentLoaded', function() {
    function updatePlaceholder() {
        var inputField = document.getElementById('prompt-input');
        if (window.innerWidth < 375) {
            inputField.placeholder = 'Enter details';
        } else if (window.innerWidth >= 375 && window.innerWidth < 768) {
            inputField.placeholder = 'Describe Image';
        } else {
            inputField.placeholder = 'Try Something like "Panda playing cricket in white clothes"';
        }
    }
  
    updatePlaceholder();
    window.onresize = updatePlaceholder;
});
  
//API CALLING
const token = "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";
const inputTxt = document.getElementById("prompt-input");
const button = document.getElementById("generate-btn");
const imageIds = ['img1', 'img2', 'img3', 'img4'];
  
async function query(promptText) {
    const data = {
        inputs: promptText
    };
  
    const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
        {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    );
  
    if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
    }
  
    const result = await response.blob();
    return result;
}

const body = document.body;
button.addEventListener('click', async function (event) {
    event.preventDefault();
    const userInput = inputTxt.value;
    if (userInput.trim() === '') {
        alert('Please enter some text to generate images.');
        return;
    }
    
    const loadingOverlays = document.querySelectorAll('.loading-overlay');
    loadingOverlays.forEach(overlay => overlay.style.display = 'flex');
  
    const imagePromises = imageIds.map(() => query(userInput));
  
    try {
        const responses = await Promise.all(imagePromises);
        responses.forEach((response, index) => {
            const imgElement = document.getElementById(imageIds[index]);
            const objectURL = URL.createObjectURL(response);
            imgElement.src = objectURL;
            const downloadBtn = imgElement.nextElementSibling;
            downloadBtn.href = objectURL;
            const filename = `Generated_Img_${index + 1}.jpg`; 
            downloadBtn.setAttribute('download', filename);
        });
    } catch (error) {
        console.error('Failed to fetch images:', error);
        alert('Failed to generate images. Please try again later.');
    }
    finally {
        loadingOverlays.forEach(overlay => overlay.style.display = 'none');
    }
});
  
  inputTxt.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        button.classList.add('active-state');  
        setTimeout(() => {  // Remove active state after a short delay
        button.classList.remove('active-state');}, 150); 
        button.click();         
    }
});
