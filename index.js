let typed = new Typed(".frontend",{
    strings:["Frontend Developer", "Programmer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
});




function downloadResume(){
    var link = document.createElement('a');
    link.href="pictures/Raghvendra.pdf";
    link.download='pictures/Raghvendra.pdf';
    link.click();
}




let menuBar=document.getElementById("menu");
let sideBar=document.getElementById("side-bar");

let mediaQuery = window.matchMedia("(max-width: 700px)");
menuBar.addEventListener("click",function() {

    sideBar.style.display = sideBar.style.display === "none" ? "block" :"none" ;
    
})