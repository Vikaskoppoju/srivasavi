let button = document.getElementById("button");
let flag = 0;

let icon = document.getElementById("changeItem");
let menu = document.getElementById("menuItems");
menu.style.display="none";
button.addEventListener("click", function() {
    console.log("clicked");
    if (flag === 0) {
        icon.classList.remove("fa-solid", "fa-bars");
        icon.classList.add("fa-solid", "fa-xmark");
        menu.style.display="block";
        flag = 1;
    } else {
        icon.classList.remove("fa-solid", "fa-xmark");
        icon.classList.add("fa-solid", "fa-bars");
        menu.style.display="none";
        flag = 0;
    }
});
