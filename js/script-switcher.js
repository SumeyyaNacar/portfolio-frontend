/* ======================toggle style switcher=========================== */
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", ()=>{

    document.querySelector(".style-switcher").classList.toggle("open");
});

/* hide style-switcher oncroll */
 window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

/* ======================theme colors=========================== */

const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyle.forEach((style)=>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled", "true")
        }

    });
};
/* ======================theme light and dark mode=========================== */
const dayNight = document.querySelector(".day-night");
const body = document.body;

dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    body.classList.toggle("dark");

});

window.addEventListener("load", ()=>{
    if(body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
      
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
        
    }
})

