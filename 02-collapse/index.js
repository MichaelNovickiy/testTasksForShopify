const showBtn = document.querySelector(".collapsible__action--visible");
const hideBtn = document.querySelector(".collapsible__action--hidden");
let buttonChange = false

const anim = document
    .querySelector(".collapsible__content")
    .animate(
        [{opacity: 1}, {opacity: 0}],
        {duration: 500, fill: "both"}
    );

anim.pause();

document.querySelector("button").addEventListener("click", hideContent);

function hideContent() {
    if (anim.playState === "paused") {
        anim.play();
    } else {
        anim.reverse();
    }
    buttonChangeHandler()
}

function buttonChangeHandler() {
    if (buttonChange) {
        hideBtn.style.display = "block";
        showBtn.style.display = "none";
        buttonChange = !buttonChange
    } else {
        hideBtn.style.display = "none";
        showBtn.style.display = "block";
        buttonChange = !buttonChange
    }
}

buttonChangeHandler()