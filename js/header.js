let button = document.getElementById("button");
let flag = 0;
let icon = document.getElementById("changeItem");
let menu = document.getElementById("menuItems");
button.addEventListener("click", function() {
    if (flag === 0) {
        icon.classList.remove("fa-solid", "fa-bars");
        icon.classList.add("fa-solid", "fa-xmark");
        menu.classList.toggle("small-navbar-menu-navbar");
        flag = 1;
    } else {
        icon.classList.remove("fa-solid", "fa-xmark");
        icon.classList.add("fa-solid", "fa-bars");
        menu.classList.toggle("small-navbar-menu-navbar");
        flag = 0;
    }
});
