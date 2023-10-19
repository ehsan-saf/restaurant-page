export default function loadPage() {
    const content = document.getElementById("content");

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
    
    content.appendChild(main);
}