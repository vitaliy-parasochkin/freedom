//choose theme for site

//burger
const burgerIcon = document.querySelector(".header-icon");
burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("active");
    document.querySelector(".header-menu").classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");
});
