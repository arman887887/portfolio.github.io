let burger = document.querySelector(".burger");
let navbar = document.querySelector(".navbar");
let navlist = document.querySelector(".nav-list");
let rightnav = document.querySelector(".right-nav");

burger.addEventListener("click",()=>{
    rightnav.classList.toggle("opaci");
    navlist.classList.toggle("opaci");
    navbar.classList.toggle("h-nav");
})