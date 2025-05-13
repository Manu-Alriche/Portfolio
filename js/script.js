// Titre h1
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

// Section 3 : projets
const allBlocs = document.querySelectorAll(".bloc");

allBlocs.forEach((bloc) => {
  bloc.addEventListener("click", (e) => {
    // console.log(e.target);
    e.target.classList.add("active");

    for (let i = 0; i < allBlocs.length; i++) {
      if (allBlocs[i] !== e.target) {
        allBlocs[i].classList.remove("active");
      }
    }
  });
});

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

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

// Envoi du formulaire
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_16r6rn9", "contact_template", form)
      .then(() => {
        alert("Message envoyé avec succès !");
        form.reset();
      })
      .catch((error) => {
        alert("Erreur lors de l'envoi : " + error.text);
      });
  });
});
