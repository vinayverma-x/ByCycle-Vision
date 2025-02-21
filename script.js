let lastScrollTop = 0;
const header = document.querySelector("header");
console.log(header)
const toTop = document.querySelector(".to-top");
const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const heroSectionOffsetTop = heroSection.offsetTop;

    if(scrollTop > heroSectionOffsetTop) {
        toTop.classList.add("active");
    } else {
        toTop.classList.add("active");
    }

    if(scrollTop > lastScrollTop) {
        headers.classList.add("hidden");
    } else{
        header.classList.remove("hidden");
    }

    lastScrollTop = scrollTop
});