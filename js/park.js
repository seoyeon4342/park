document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#top > button");
    const nav = document.querySelector("#body > nav");

    button.addEventListener("click", () => {
        console.log(button.textContent);

        const navDisplay = window.getComputedStyle(nav).display;
        nav.style.display = (navDisplay === "none") ? "block" : "none";

        button.textContent = (button.textContent === "close") ? "dehaze" : "close";
    });

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.style.display = "none";
            button.textContent = "dehaze";
        });
    });
});