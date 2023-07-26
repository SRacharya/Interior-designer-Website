var menu = document.querySelector(".navlist")
var open = document.querySelector("#menu")
var close = document.querySelector("#close")


open.addEventListener("click" , function(){
    close.style.display = "initial";
    open.style.display = "none";
    menu.style.top = 0;
    menu.style.opacity = 1;

    // menu.style.display = "initial";

})
close.addEventListener("click" , function(){
    open.style.display = "initial";
    close.style.display = "none";
    menu.style.top = '-500%';
    // menu.style.display = "none";

})

gsap.from(".navlist li",{
    y:-100,
    delay:0.2,
    duration:1,
    stagger:.4
})

gsap.from("h1",{
    x:-1700,
    delay:1,
    duration:2,
    stagger:.4
})
gsap.from("#btns",{
    x:-1700,
    delay:1,
    duration:2,
    stagger:1
})
gsap.from(".c2img",{
    y:1700,
    delay:1,
    duration:2,
    stagger:1
})
gsap.from("#p1img",{
    x:-1700,
    delay:1,
    duration:2,
    stagger:1
})


