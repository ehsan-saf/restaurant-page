// import loadHeader from "./sections/header";
// import loadPage from "./page-load";
// import loadMenu from "./sections/menu";

// loadHeader();
// loadPage();

// const content = document.getElementById("content");


// function addClickEvents() {
//     const buttons = document.querySelectorAll("a");
//     buttons.forEach(btn => {
//     btn.addEventListener("click", tabClicked);
//     });
// }

// addClickEvents();

// function tabClicked(btn) {
//     btn.preventDefault();
//     console.log(btn.target.dataset.name);
//     content.innerHTML = "";
//     loadHeader();
//     addClickEvents();
//     switch (btn.target.dataset.name) {
//         case "main":
//             loadPage();
//             break;
    
//         case "menu":
//             loadMenu();
//             break;
//     }
// }