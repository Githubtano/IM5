console.log('Hello Sound')

// Step 1: Create an Audio Context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

let source; // Declare source outside the functions 
let panner; // Declare panner outside the functions 

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
    panner = audioContext.createPanner();
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
    source.loop = true;

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

// Function to update the sound position
function updateSoundPosition(xPos) {
    if (source) {
        const panner = source.output;
        panner.setPosition(xPos, 0, 1);
    }
}

// Add mousedown, mouseup, and mousemove event listeners to your element
const welcomePage = document.querySelector('.welcome-page');
welcomePage.addEventListener('mousedown', async event => {
    // Check if the left button was clicked
    if (event.button !== 0) {
        return;
    }

    // Resume the AudioContext
    if (audioContext.state === 'suspended') {
        await audioContext.resume();
    }

    const width = window.innerWidth;
    const clickX = event.clientX;

    // Normalize click position to a range between -1 and 1
    const xPos = (clickX / width) * 2 - 1;

    // Play sound based on click position
    playSound(xPos);
});

// Function to update the sound position
function updateSoundPosition(xPos) {
    if (panner) {
        panner.setPosition(xPos, 0, 1);
    }
}

welcomePage.addEventListener('mouseup', stopSound);
welcomePage.addEventListener('mousemove', event => {
    const width = window.innerWidth;
    const moveX = event.clientX;

    // Normalize move position to a range between -1 and 1
    const xPos = (moveX / width) * 2 - 1;

    // Update sound position based on move position
    updateSoundPosition(xPos);
});
welcomePage.addEventListener('mouseup', stopSound);
