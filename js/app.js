const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__ul-button");
const body = document.querySelector("body");

hamburger.addEventListener("click", () =>
{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("active");

}
)
document.querySelectorAll(".link,.hero,section").forEach(n => n.addEventListener(
    "click",() =>
    {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

    }
))
window.addEventListener("load", () =>{
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () =>{
      document.body.removeChild("loader");
    })
})
