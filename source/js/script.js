//choose theme for site
window.addEventListener("load", () => {
    const htmlBlock = document.documentElement;

    document
        .querySelector(".icon-change-theme")
        .addEventListener("click", () => {
            htmlBlock.classList.toggle("light");
        });
});

//burger
const burgerIcon = document.querySelector(".burger-icon");
burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("active");
    document.querySelector(".header-nav").classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");
});
