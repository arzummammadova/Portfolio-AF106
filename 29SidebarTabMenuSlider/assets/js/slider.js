const container = document.querySelector(".container");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextbtn");
const prevBtn = document.querySelector(".prevbtn");
const dots=document.querySelectorAll(".dot");

let currentIndex = 0;

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;  
    updateSlide();
    withDot();
};

const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;  
    updateSlide();
    withDot();
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function updateSlide() {
    const newTransform = -currentIndex * 100 + "%";
    const slidesContainer = document.querySelector(".slides");
    slidesContainer.style.transform = `translateX(${newTransform})`; 

}

const autoSlide=()=>{
   interval= setInterval(nextSlide,3000);
}

autoSlide();
const stopautoSlide=()=>{
    clearInterval(interval);
}
container.addEventListener("mouseover",stopautoSlide);
container.addEventListener("mouseleave",autoSlide);



const withDot=()=>{
    dots.forEach(dot=>dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateSlide();
            withDot();
           
        });
    });

    
}

withDot();