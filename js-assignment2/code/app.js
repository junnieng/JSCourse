/* Open Menu*/

let toggleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar")
    let getSidebarUl = document.querySelector(".nav-sidebar ul")
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a")

    
    getSidebar.style.visibility = "visible";
    getSidebar.style.opacity = "1"
    getSidebar.style.transition = "1s"
    getSidebar.style.transform = "translateX(0px)"
   
}  

/* Close Menu*/

let closeToggle = function () {
    let getSidebar = document.querySelector(".nav-sidebar")
    let getSidebarUl = document.querySelector(".nav-sidebar ul")
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a")

    getSidebar.style.visibility = "hidden";
    getSidebar.style.opacity = "0"
    getSidebar.style.transition = ".7s"
    getSidebar.style.transform = "translateX(50px)"
}




