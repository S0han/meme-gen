const uploadBtn = document.getElementById('upload'); // upload photo button
const generateBtn = document.getElementById('gen'); // generate meme button
const resetBtn = document.getElementById('reset'); // reset fields button
const closeBtn = document.getElementById('close'); // closes the modal when click


//Text input fields
const textInput1 = document.getElementById('text1');
const textInput2 = document.getElementById('text2');

//meme contenns
const memeContent = document.getElementById('pics'); //as a whole
const memePic = document.getElementById('mainMeme'); // just the pic

//modal
const modalOutput = document.getElementById('memeModal');

//Upload photo to page 
uploadPhotoHandler = () => {
    const picURL = document.getElementById('url').value;

    if (picURL === "") {
        return;
    }

    const img = `<img src="${picURL}" alt="meme generated image">`;
    memePic.innerHTML = img;
}

//Display text input on page from text input 1
inputTextHandler1 = () => {
    const textVal1 = textInput1.value;
    const outputTextVal1 = document.getElementById('input1');

    outputTextVal1.textContent = textVal1;
}

//Display text input on page from text input 2
inputTextHandler2 = () => {
    const textVal2 = textInput2.value;
    const outputTextVal2 = document.getElementById('input2');

    outputTextVal2.textContent = textVal2;
}

//modal functionality
modalHandler = () => {
    
    html2canvas(document.querySelector("#mainMeme")).then(canvas => {
            modalOutput.style.display = "flex";
            let modalPic = document.getElementById('modal-pic');
            modalPic.innerHTML = canvas;
    });

}

closeModalHandler = () => {
    modalOutput.style.display = "none";
}

escapeModalHandler = (event) => {
    if (event.target === modalOutput) {
        modalOutput.style.display = "none";
    }
}

//execution area
uploadBtn.addEventListener('click', uploadPhotoHandler); // upload photo event listeners

textInput1.addEventListener('input', inputTextHandler1); // overlay text on uploaded pic
textInput2.addEventListener('input', inputTextHandler2); // overlay text on uploaded pic

generateBtn.addEventListener('click', modalHandler); // open modal with final output
closeBtn.addEventListener('click', closeModalHandler); // close modal when close button clicked
window.addEventListener('click', escapeModalHandler); // clicks outside modal handler close the modal