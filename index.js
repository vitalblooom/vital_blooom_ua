 // Масив товарів (назва + посилання на сторінку)
 const products = [
    { name: "Спрей Bare Vanilla", url:"krasa/sprei/bare_vanilla_26923265.html" },
    { name: "Помада Chanel", url: "product_chanel_lipstick.html" },
    { name: "Крем для обличчя Nivea", url: "product_nivea_cream.html" },
    { name: "Туш для вій L'Oréal", url: "product_loreal_mascara.html" },
    { name: "Парфуми Dior", url: "product_dior_perfume.html" },
    { name: "Тонік для обличчя Vichy", url: "product_vichy_tonic.html" },
    { name: "Шампунь Pantene", url: "product_pantene_shampoo.html" },
    { name: "Сонцезахисний крем La Roche-Posay", url: "product_laroche_sunscreen.html" }
];

function search() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const resultsDiv = document.getElementById("search-results");
    const resultsList = document.getElementById("search-list");

    // Фільтрація товарів за запитом
    const results = products.filter(product => product.name.toLowerCase().includes(query));

    if (query.length === 0 || results.length === 0) {
        resultsDiv.style.display = "none";
        return;
    }

    resultsDiv.style.display = "block";
    resultsList.innerHTML = "";

    results.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product.name;
        li.onclick = function() {
            window.location.href = product.url; // Перехід на сторінку товару
        };
        resultsList.appendChild(li);
    });
}

// Закриває список результатів, якщо клік поза пошуком
document.addEventListener("click", function(event) {
    const searchBar = document.querySelector(".search-bar");
    if (!searchBar.contains(event.target)) {
        document.getElementById("search-results").style.display = "none";
    }
});