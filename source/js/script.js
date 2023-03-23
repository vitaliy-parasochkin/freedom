//choose theme for site

//burger
const burgerIcon = document.querySelector(".burger-icon");
burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("active");
    document.querySelector(".header-nav").classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");
});
