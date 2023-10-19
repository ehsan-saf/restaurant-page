export default function loadMenu() {

    const img1 = document.createElement("img");
    img1.src = "./images/pizza.jpg";

    const name1 = document.createElement("p");
    name1.classList.add("food-text");
    name1.textContent = "Pizza";

    const food1 = document.createElement("div");
    food1.classList.add("food-item");
    food1.appendChild(img1);
    food1.appendChild(name1);

    // -------------------------------------------------

    const img2 = document.createElement("img");
    img2.src = "./images/burger.jpg";

    const name2 = document.createElement("p");
    name2.classList.add("food-text");
    name2.textContent = "Special Burger";

    const food2 = document.createElement("div");
    food2.classList.add("food-item");
    food2.appendChild(img2);
    food2.appendChild(name2);

    const menu_row = document.createElement("div");
    menu_row.classList.add("menu-row");
    menu_row.appendChild(food1);
    menu_row.appendChild(food2);

    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.appendChild(menu_row);
    
    const content = document.getElementById("content");
    content.appendChild(menu);
}