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
const body = document.querySelector("body")
const html = document.querySelector("html")
hiddenElements.forEach((element) => observer.observe(element));

mobileNavBtn.addEventListener("click", (event)=>{
  mobileNavBtn.classList.toggle("change");
  mobileNavMenu.classList.toggle("show-menu")
  mobileNavBtn.classList.toggle("position-fixed")
  // body.classList.toggle("stop-scrolling")
  if(window.innerWidth<=650){
    // html.classList.toggle("stop-scrolling")
  }
})

window.addEventListener("resize", (event)=>{
  if(event.currentTarget.innerWidth > 850){
    mobileNavBtn.classList.remove("change")
    mobileNavBtn.classList.remove("position-fixed")
    mobileNavMenu.classList.remove("show-menu")
    body.classList.remove("stop-scrolling")
  }
})