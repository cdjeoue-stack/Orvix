// ===============================
// ORVIX COMPANY
// Script JavaScript
// ===============================

// Message dans la console
console.log("Bienvenue chez ORVIX COMPANY");

// Animation d'apparition des sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// Animation des cartes
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-15px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

// Affichage de l'année automatiquement
const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML =
`© ${year} ORVIX COMPANY<br>Imaginer • Construire • Transformer`;

// Message de bienvenue
window.onload = function(){

    setTimeout(() => {

        alert("Bienvenue dans l'univers ORVIX.");

    },700);

}
// ==========================
// Effet machine à écrire
// ==========================

const text =
"L'avenir appartient à ceux qui le construisent.";

let i = 0;

function typing(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,60);

    }

}

typing();

// ==========================
// Bouton Entrer
// ==========================

document.getElementById("enter").onclick=function(){

document.getElementById("intro").style.opacity="0";

setTimeout(()=>{

document.getElementById("intro").style.display="none";

},1000);

}
#services{
    padding:60px 20px;
    text-align:center;
}

.card{
    background:#1b1b1b;
    border:1px solid #00bfff;
    border-radius:15px;
    padding:20px;
    margin:20px auto;
    max-width:350px;
    transition:0.3s;
}// ==========================
// ORVIX COMPANY
// script.js
// ==========================

console.log("ORVIX COMPANY lancé.");

// --------------------------
// Année automatique
// --------------------------
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// --------------------------
// Animation des cartes
// --------------------------
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

    card.addEventListener("click", () => {

        const titre = card.querySelector("h3").textContent;

        alert("Bienvenue dans " + titre + " !");
    });

});

// --------------------------
// Bouton Retour en haut
// --------------------------
const topButton = document.getElementById("topBtn");

if (topButton) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// --------------------------
// Défilement fluide
// --------------------------
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const cible = document.querySelector(this.getAttribute("href"));

        if(cible){

            cible.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// --------------------------
// Heure de bienvenue
// --------------------------
const message = document.getElementById("welcome");

if(message){

    const heure = new Date().getHours();

    if(heure < 12){

        message.textContent = "Bonjour et bienvenue sur ORVIX.";

    }else if(heure < 18){

        message.textContent = "Bon après-midi sur ORVIX.";

    }else{

        message.textContent = "Bonsoir et bienvenue sur ORVIX.";

    }

}

// --------------------------
// Menu mobile
// --------------------------
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if(menuBtn && menu){

    menuBtn.addEventListener("click", ()=>{

        menu.classList.toggle("active");

    });

}

// --------------------------
// Effet d'apparition
// --------------------------
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".hidden").forEach(el=>{

    observer.observe(el);

});


// ==========================
// ORA (préparation)
// ==========================

function ouvrirORA(){

    alert("ORA sera bientôt disponible.");

}

// ==========================
// Fin
// ==========================

.card:hover{
    transform:scale(1.05);
}

.card h3{
    color:#00bfff;
}
