export default function loadPage() {
    const content = document.getElementById("content");

    // ------------- Header -------------
    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const a3 = document.createElement("a");
    a1.textContent = "Main";
    a2.textContent = "Menu";
    a3.textContent = "About";
    a1.dataset.name = "main";
    a2.dataset.name = "menu";
    a3.dataset.name = "about";

    const li1 = document.createElement("li");
    li1.classList.add("nav-items");
    li1.appendChild(a1);
    li1.appendChild(a2);
    li1.appendChild(a3);
    

    const navList = document.createElement("ul");
    navList.classList.add("nav-items");
    navList.appendChild(li1);

    const nav = document.createElement("div");
    nav.classList.add("nav");
    nav.appendChild(navList);

    const header = document.createElement("div");
    header.classList.add("header");
    header.appendChild(nav);
    // ---------------------------------------

    // ------------ Main Section --------------
    const text_main = document.createElement("p");
    text_main.textContent = "If you've found us," +
    "it means you don't have to look anywhere else"

    const mainTitle = document.createElement("div");
    mainTitle.classList.add("main-title");
    mainTitle.appendChild(text_main);

    const main = document.createElement("div");
    main.classList.add("main");
    main.appendChild(mainTitle);

    content.appendChild(header);
    content.appendChild(main);
}