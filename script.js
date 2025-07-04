function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const maybeBtn = document.querySelector("#maybe");
const noBtn = document.querySelector("#no");

maybeBtn.addEventListener("mouseenter", function(e) {
    moveRandomEl(e.target);
});

noBtn.addEventListener("mouseenter", function(e) {
    moveRandomEl(e.target);
});