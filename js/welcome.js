console.log("hello world");

// Step 1: Create an Audio Context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

let source; // Declare source outside the functions so it can be accessed by both

// Step 2: Load your audio file
function loadAudio(url) {
    return fetch(url)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer));
}

// Function to play the sound
async function playSound(xPos) {
    const sound = await loadAudio('audio/bubble.mp3');

    // Create a PannerNode
    const panner = audioContext.createPanner();
    panner.panningModel = 'HRTF';
    panner.distanceModel = 'inverse';
    panner.refDistance = 1;
    panner.maxDistance = 10000;
    panner.rolloffFactor = 1;
    panner.coneInnerAngle = 360;
    panner.coneOuterAngle = 0;
    panner.coneOuterGain = 0;
    panner.setPosition(xPos, 0, 1); // Set position based on xPos

    source = audioContext.createBufferSource();
    source.buffer = sound;

    // Connect the source to the panner and the panner to the destination
    source.connect(panner).connect(audioContext.destination);

    source.start(0);
}

// Function to stop the sound
function stopSound() {
    if (source) {
        source.stop(0);
    }
}

// Step 4: Add mousedown and mouseup event listeners to your element
const welcomePage = document.querySelector('.welcome-page');
welcomePage.addEventListener('mousedown', event => {
    const width = window.innerWidth;
    const clickX = event.clientX;

    // Normalize click position to a range between -1 and 1
    const xPos = (clickX / width) * 2 - 1;

    // Step 5: Play sound based on click position
    playSound(xPos);
});
welcomePage.addEventListener('mouseup', stopSound);