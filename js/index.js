
const scrollToTop = document.getElementById("toTopButton");

scrollToTop.addEventListener('click', function () {
    window.scrollTo ({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});