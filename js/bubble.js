console.log('Hello Bubble!')

let isMouseDown = false;

function createBubble(x, y) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    // Generate a random size for each bubble
    const size = Math.random() * 100 + 25; 
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Generate a random transition duration for each bubble
    bubble.style.transition = `top ${Math.random() * 1 + 3}s ease-in-out`;

    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.style.top = `${y - 900}px`;
    }, 50);

    setTimeout(() => {
        bubble.remove();
    }, 4000);
}

document.addEventListener('mousedown', (event) => {
    isMouseDown = true;
    createBubble(event.clientX, event.clientY);
});

document.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
        createBubble(event.clientX, event.clientY);
    }
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});