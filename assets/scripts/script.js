window.addEventListener("scroll", function(){
    let scroll = this.scrollY;
    let logo = document.querySelector(".logo");

    if (scroll > 600)
    {
        logo.style.filter = "brightness(0)";
    }
    else
    {
        logo.style.filter =  "brightness(1)";
    }
})