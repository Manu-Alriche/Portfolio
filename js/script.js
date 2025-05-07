// Titre h1
// Ce gestionnaire ne sera exécuté qu'une fois
// lorsque le curseur se déplace sur la liste
const h1 = document.querySelector(".left");

h1.addEventListener(
  "mouseover",
  (event) => {
    event.target.textContent = "Développeur Web Frontend";

    // on réinitialise le titre après quelques instants
    setTimeout(function () {
      event.target.textContent = "ALRICHE Emmanuel";
    }, 3000);
  },
  false
);

// Dark-mode
const toggleButton = document.getElementById("toggle-theme");
const body = document.body;

// Vérifier si un mode est déjà enregistré dans localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

// Basculer le mode
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Enregistrer le choix dans localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
