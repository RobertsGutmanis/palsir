const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
const mobileNavBtn = document.querySelector(".btn-mobile-nav")
const mobileNavMenu = document.querySelector(".mobile-nav-menu")
hiddenElements.forEach((element) => observer.observe(element));

mobileNavBtn.addEventListener("click", (event)=>{
  mobileNavBtn.classList.toggle("change");
  mobileNavMenu.classList.toggle("show-menu")
  mobileNavBtn.classList.toggle("position-fixed")
})

window.addEventListener("resize", (event)=>{
  if(event.currentTarget.innerWidth > 850){
    mobileNavBtn.classList.remove("change")
    mobileNavBtn.classList.remove("position-fixed")
    mobileNavMenu.classList.remove("show-menu")
  }
})