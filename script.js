function moveRandomEl(elm) {
    elm.classList.add("fixed-button"); // Keeps button inside viewport

    // Get viewport and button dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const elemWidth = elm.offsetWidth;
    const elemHeight = elm.offsetHeight;

    // Define safe movement range (keep the button on screen)
    const minLeft = 20;
    const maxLeft = viewportWidth - elemWidth - 20;
    const minTop = 20;
    const maxTop = viewportHeight - elemHeight - 20;

    // Generate a random position within bounds
    const randomLeft = Math.max(minLeft, Math.min(maxLeft, Math.random() * maxLeft));
    const randomTop = Math.max(minTop, Math.min(maxTop, Math.random() * maxTop));

    // Apply new position
    elm.style.left = `${randomLeft}px`;
    elm.style.top = `${randomTop}px`;
}

const moveRandom = document.querySelector("#move-random");

// Move "No" button on hover (desktop) or click (mobile)
moveRandom.addEventListener("pointerover", function (e) {
    moveRandomEl(e.target);
});

moveRandom.addEventListener("click", function (e) {
    moveRandomEl(e.target);
});
