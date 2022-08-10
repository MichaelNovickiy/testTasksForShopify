const anim = document
    .querySelector(".collapsible__content")
    .animate(
        [{opacity: 1}, {opacity: 0}],
        {duration: 1, fill: "both"}
    );

anim.pause();

document.querySelector("button").addEventListener("click", () => {
    if (anim.playState === "paused") {
        anim.play();
    } else {
        anim.reverse();
    }
});

