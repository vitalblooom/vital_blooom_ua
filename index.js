// Якщо потрібно, можна визначити базову URL (необов’язково, якщо всі посилання абсолютні)
const baseURL = window.location.origin;

// Масив товарів із абсолютними шляхами
const products = [

    /*/////////////////////////////////VICTORIAS SICRET////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

    /* BEAUTY*----------------------------------------------------------------------------/
    
    /* boty mists--------------------*/
    { name:/**/ "Спрей victoria`s secret bare vanilla bliss", url: "https://vitalblooom.github.io/vital_blooom_ua/victoria_sicret/beauty/body_mists/bare_vanilla_26923265.html" },




    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/





    /*/////////////////////////////////TOM FORD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/


    
    /*PARFUME----------------------------------*/ 
    /*========================================*/
    { name: "Парфюм Tom Ford Lost Cherry", url: "https://vitalblooom.github.io/vital_blooom_ua/tom_ford/parfume/tom_ford_lost_chery_%20945376.html" },
    { name: "Парфюм Tom Ford Vanilla Sex", url: "https://vitalblooom.github.io/vital_blooom_ua/tom_ford/parfume/tom_ford_vanilla_sex_1590541.html" },
    { name: "Парфюм Tom Ford Tobacco Vanille", url: "https://vitalblooom.github.io/vital_blooom_ua/tom_ford/parfume/tom_ford_tobaco_vanille_518789.html" },
    { name: "Парфюм Tom Ford Neroli Portofino", url: "https://vitalblooom.github.io/vital_blooom_ua/tom_ford/parfume/tom_ford_NEROLI_PORTOFINO_518020.html" },
    { name: "Парфюм Tom Ford Fucking Fabulous", url: "https://vitalblooom.github.io/vital_blooom_ua/tom_ford/parfume/tom_ford_FUCKING%20FABULOUS_806932.html" },
    { name: "Парфюм Tom Ford Soleil Blanc", url: "https://vitalblooom.github.io/vital_blooom_ua/tom_ford/parfume/tom_ford_SOLEIL%20BLANC_545917.html" },
    { name: "Парфюм Tom Ford Ombre Leather", url: "https://vitalblooom.github.io/vital_blooom_ua/tom_ford/parfume/tom_ford_OMBRE_LEATHER_849567.html" },
    { name: "Парфюм Tom Ford Electric Cherry", url: "https://vitalblooom.github.io/vital_blooom_ua/tom_ford/parfume/tom_ford_ELECTRIC_CHERRY_1438904.html" },
    { name: "Парфюм Tom Ford Soleil Neige", url: "https://vitalblooom.github.io/vital_blooom_ua/tom_ford/parfume/tom_ford_SOLEIL_NEIGE_961749.html" },
    { name: "Парфюм Tom Ford Vanille Fatale", url: "https://vitalblooom.github.io/vital_blooom_ua/tom_ford/parfume/tom_ford_VANILLE_FATALE_1590545.html" },
    { name: "Парфюм Tom Ford Mandarino Di Amalfi", url: "https://vitalblooom.github.io/vital_blooom_ua/tom_ford/parfume/tom_ford_MANDARINO_DI_AMALFI_515199.html" },
    { name: "Парфюм Tom Ford  Café Rose", url: "https://vitalblooom.github.io/vital_blooom_ua/tom_ford/parfume/tom_ford_CAF%C3%89_ROSE_1548995.html" },


    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
   
    
    { name: "Крем для обличчя Nivea", url: "product_nivea_cream.html" },
    { name: "Туш для вій L'Oréal", url: "product_loreal_mascara.html" },
    { name: "Парфуми Dior", url: "product_dior_perfume.html" },
    { name: "Тонік для обличчя Vichy", url: "product_vichy_tonic.html" },
    { name: "Шампунь Pantene", url: "product_pantene_shampoo.html" },
    { name: "Сонцезахисний крем La Roche-Posay", url: "product_laroche_sunscreen.html" }
];


/*
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
            // Перехід на сторінку товару за абсолютним шляхом
            window.location.href = product.url;
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
*/

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

    // Обмежуємо кількість результатів до 6
    const limitedResults = results.slice(0, 4);

    limitedResults.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product.name;
        li.onclick = function() {
            // Перехід на сторінку товару за абсолютним шляхом
            window.location.href = product.url;
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

