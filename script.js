function moveRandomEl(elm) {
    elm.classList.add("fixed-button"); // Ensures button stays visible

    // Get viewport and button dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const elemWidth = elm.offsetWidth;
    const elemHeight = elm.offsetHeight;

    // Define safe movement range (keep the button on screen)
    const minLeft = 10;
    const maxLeft = viewportWidth - elemWidth - 10;
    const minTop = 10;
    const maxTop = viewportHeight - elemHeight - 10;

    // Generate random position within bounds
    const randomLeft = Math.random() * (maxLeft - minLeft) + minLeft;
    const randomTop = Math.random() * (maxTop - minTop) + minTop;

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
