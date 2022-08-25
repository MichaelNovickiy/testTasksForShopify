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

function changeDisplayButton(displayFirst, displaySecond) {
    return (hideBtn.style.display = displayFirst,
        showBtn.style.display = displaySecond,
        buttonChange = !buttonChange)
}

function buttonChangeHandler() {
    if (buttonChange) {
        changeDisplayButton("block", "none")
    } else {
        changeDisplayButton("none", "block")
    }
}

buttonChangeHandler()