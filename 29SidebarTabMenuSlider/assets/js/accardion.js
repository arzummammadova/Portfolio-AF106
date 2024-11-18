const accordions=document.querySelectorAll(".accordion-box");


accordions.forEach(accordion=>{
const openIcon=accordion.querySelector(".open");
const closeIcon=accordion.querySelector(".close");
const accordionText=accordion.querySelector(".accordion-text");

if(!closeIcon.classList.contains("none")){
    closeIcon.classList.add("none");
    openIcon.classList.remove("none");
};

openIcon.addEventListener("click",()=>{
    closeIcon.classList.remove("none");
    openIcon.classList.add("none");
    accordionText.classList.remove("hide");

});

closeIcon.addEventListener("click",()=>{
    closeIcon.classList.add("none");
    openIcon.classList.remove("none");
    accordionText.classList.add("hide");
});
});






