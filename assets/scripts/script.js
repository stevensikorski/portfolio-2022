window.addEventListener("scroll", function(){
    let scroll = this.scrollY;
    let logo = document.querySelector(".logo");
    let height = document.documentElement.offsetHeight;
    console.log(height, scroll);

    if (scroll > height - 16)
    {
        logo.style.filter = "invert(1)";
    }
    else
    {
        logo.style.filter = "invert(0)";
    }
})