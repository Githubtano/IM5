console.log('Hello Bubble!')

let isMouseDown = false;

function createBubbles(event) {
    for (let i = 0; i < 3; i++) { 
        createBubble(event.clientX, event.clientY);
    }
}

function createBubble(x, y) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    const size = Math.random() * 100 + 25; 
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
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