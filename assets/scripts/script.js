window.addEventListener("scroll", function(){
    const padding = 16;

    let scroll = window.scrollY;
    let height = window.screen.height;
    let logo = document.querySelector(".logo");
    let links = document.querySelectorAll(".links");
    let tabs = document.querySelectorAll("li a");

    if (scroll < height - padding || scroll > 2 * height - padding && scroll < 3 * height - padding)
    {
        logo.style.filter = "invert(0)";
        for (let i = links.length; i--;)
        {
            links[i].style.filter = "invert(0)";
        }
        for (let i = tabs.length; i--;)
        {
            tabs[i].style.color = "rgb(255, 255, 255)";
        }
    }
    else
    {
        logo.style.filter = "invert(1)";
        for (let i = links.length; i--;)
        {
            links[i].style.filter = "invert(1)";
        }
        for (let i = tabs.length; i--;)
        {
            tabs[i].style.color = "rgb(0, 0, 0)";
        }
    }
})
