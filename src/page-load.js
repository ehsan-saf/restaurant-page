export default function loadPage() {
    const content = document.getElementById("content");
    console.log(content);

    // ------------- Header -------------
    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const a3 = document.createElement("a");
    a1.textContent = "Main";
    a2.textContent = "Menu";
    a3.textContent = "About";

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
    header.appendChild(nav);
    // ---------------------------------------

    content.appendChild(header);
}