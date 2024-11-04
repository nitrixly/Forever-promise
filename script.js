document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("card").style.opacity = 1;
});

function revealMessage() {
    const card = document.getElementById("card");
    const button = document.querySelector(".reveal-button");
    const loveAnimation = document.getElementById("loveAnimation");
    const signature = document.querySelector(".signature");
    
    card.style.display = "block";
    button.style.display = "none";
    loveAnimation.style.display = "block";
    signature.style.display = "block";
}
