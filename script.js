
const sidebar = document.getElementById("sidebar");
const hamburger = document.querySelector(".hamburger");
const colorModeButton = document.querySelector(".colorMode");

if(colorModeButton) {
    colorModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}   

window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    hero.style.backgroundPositionY = window.scrollY * 0.5 + "px";
});


hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        sidebar.classList.remove("active");
    }
});


document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        sidebar.classList.remove("active");
    }

    if (e.key === "ArrowDown") {
        window.scrollBy(0, window.innerHeight);
    }

    if (e.key === "ArrowUp") {
        window.scrollBy(0, -window.innerHeight);
    }

});


const video = document.getElementById("featuredVideo");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
        }
    });
}, { threshold: 0.5 });

observer.observe(video);


document.body.addEventListener("dblclick", () => {
    document.body.classList.toggle("dark");
});

