export default function loadAbout() {

    const content = document.getElementById("content");

    const about = document.createElement("div");
    about.classList.add("about");

    // -------  Contact us --------

    const contact = document.createElement("div");
    contact.classList.add("contact");

    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Contact us";

    const number = document.createElement("p");
    number.textContent = "+1 111 111 1111";

    const email = document.createElement("p");
    email.textContent = "Email@Example.com";

    contact.appendChild(contactTitle);
    contact.appendChild(number);
    contact.appendChild(email);

    // --------  Address   --------

    const address = document.createElement("div");
    address.classList.add("address");

    const addressTitle = document.createElement("h2");
    addressTitle.textContent = "Address";

    const map = document.createElement("div");

    const iframe = document.createElement("iframe");
    iframe.src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12722816.47632098!2d-101.58603881364868!3d38.87466416134912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1697912043472!5m2!1sen!2s";
    iframe.allowFullscreen = "";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";

    map.appendChild(iframe);
    address.appendChild(addressTitle);
    address.appendChild(map);

    // ---------------------------------
    
    about.appendChild(contact);
    about.appendChild(address);

    content.appendChild(about);
}