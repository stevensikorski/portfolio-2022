window.addEventListener("scroll", function(){
    const padding = 16;

    let scroll = this.scrollY;
    let height = document.documentElement.offsetHeight;
    let header = document.querySelector(".header");
    let logo = document.querySelector(".logo");
    let tabs = document.querySelector(".tabs");


    if (scroll < height - padding || scroll > 2 * height - padding && scroll < 3 * height - padding)
    {
        logo.style.filter = "invert(0)";
        tabs.style.filter = "invert(0)";
    }
    else
    {
        logo.style.filter = "invert(1)";
        tabs.style.filter = "invert(1)";
    }
})