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
