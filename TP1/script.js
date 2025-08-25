const descriptions = [
  "Passionné par le développement web et les nouvelles technologies !",
  "Toujours en quête d'apprentissage et de nouveaux défis créatifs.",
  "Développeur frontend avec une passion pour l'UX/UI design.",
];

// URLs des avatars (utilisation d'avatars génériques)
const avatars = {
  1: "assets/Benzai.png",
  2: "assets/Kopain.png",
  3: "assets/Kraleur.png",
};

// État de l'application
let currentDescription = "";
let lastDescriptionIndex = -1;
let selectedAvatar = null;
let isValidPseudo = false;

// ===== ÉLÉMENTS DOM =====
const elements = {
  // Formulaire
  form: document.getElementById("profileForm"),
  card: document.getElementById("profileCard"),

  // Description
  descriptionText: document.getElementById("descriptionText"),
  changeDescriptionBtn: document.getElementById("changeDescriptionBtn"),

  // Pseudo
  pseudoInput: document.getElementById("pseudoInput"),
  pseudoError: document.getElementById("pseudoError"),

  // Avatars
  avatarOptions: document.querySelectorAll(".avatar-option"),

  // Boutons
  nextBtn: document.getElementById("nextBtn"),
  restartBtn: document.getElementById("restartBtn"),

  // Thème
  themeToggle: document.getElementById("themeToggle"),

  // Profil final
  finalAvatar: document.getElementById("finalAvatar"),
  finalPseudo: document.getElementById("finalPseudo"),
  finalDescription: document.getElementById("finalDescription"),
};

// ===== FONCTIONS UTILITAIRES =====

/**
 * Génère une description aléatoire différente de la précédente
 */
function generateRandomDescription() {
  let newIndex;
  // Évite la répétition immédiate
  do {
    newIndex = Math.floor(Math.random() * descriptions.length);
  } while (newIndex === lastDescriptionIndex && descriptions.length > 1);

  lastDescriptionIndex = newIndex;
  currentDescription = descriptions[newIndex];
  elements.descriptionText.textContent = currentDescription;
}

/**
 * Valide le pseudo selon les critères
 * @param {string} pseudo - Le pseudo à valider
 * @returns {object} - Objet avec isValid et message
 */
function validatePseudo(pseudo) {
  // Vérification si vide
  if (!pseudo.trim()) {
    return {
      isValid: false,
      message: "",
    };
  }

  // Bonus : vérification longueur minimum (3 caractères)
  if (pseudo.length < 3) {
    return {
      isValid: false,
      message: "Le pseudo doit contenir au moins 3 caractères.",
    };
  }

  // Vérification caractères alphabétiques uniquement
  const regex = /^[a-zA-Z]+$/;
  if (!regex.test(pseudo)) {
    return {
      isValid: false,
      message: "Le pseudo ne doit contenir que des lettres (a-z, A-Z).",
    };
  }

  return {
    isValid: true,
    message: "",
  };
}

/**
 * Met à jour l'état du bouton "Suivant"
 */
function updateNextButton() {
  const canProceed = isValidPseudo && currentDescription && selectedAvatar;

  if (canProceed) {
    elements.nextBtn.classList.add("enabled");
    elements.nextBtn.disabled = false;
    elements.nextBtn.style.cursor = "pointer";
  } else {
    elements.nextBtn.classList.remove("enabled");
    elements.nextBtn.disabled = true;
    elements.nextBtn.style.cursor = "not-allowed";
  }
}

/**
 * Initialise les avatars avec leurs images
 */
function initializeAvatars() {
  elements.avatarOptions.forEach((option) => {
    const avatarId = option.dataset.avatar;
    option.style.backgroundImage = `url(${avatars[avatarId]})`;
  });
}

/**
 * Affiche le profil final
 */
function showProfileCard() {
  // Masquer le formulaire
  elements.form.style.display = "none";

  // Remplir les données du profil final
  elements.finalPseudo.textContent = elements.pseudoInput.value;
  elements.finalDescription.textContent = currentDescription;
  elements.finalAvatar.style.backgroundImage = `url(${avatars[selectedAvatar]})`;

  // Afficher la carte profil
  elements.card.style.display = "block";
}

/**
 * Réinitialise le formulaire
 */
function resetForm() {
  // Masquer la carte et afficher le formulaire
  elements.card.style.display = "none";
  elements.form.style.display = "block";

  // Réinitialiser les valeurs
  elements.pseudoInput.value = "";
  elements.pseudoError.textContent = "";
  elements.pseudoInput.classList.remove("error", "success");

  // Réinitialiser les avatars
  elements.avatarOptions.forEach((option) => {
    option.classList.remove("selected");
  });

  // Réinitialiser l'état
  isValidPseudo = false;
  selectedAvatar = null;

  // Générer une nouvelle description
  generateRandomDescription();

  // Mettre à jour le bouton
  updateNextButton();
}

/**
 * Bascule entre les thèmes clair et sombre
 */
function toggleTheme() {
  const body = document.body;
  const themeIcon = elements.themeToggle.querySelector(".theme-icon");

  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
    themeIcon.textContent = "🌙";
  } else {
    body.setAttribute("data-theme", "dark");
    themeIcon.textContent = "☀️";
  }
}

// ===== GESTIONNAIRES D'ÉVÉNEMENTS =====

/**
 * Gestion du changement de description
 */
elements.changeDescriptionBtn.addEventListener("click", () => {
  generateRandomDescription();
  updateNextButton();
});

/**
 * Validation en temps réel du pseudo
 */
elements.pseudoInput.addEventListener("input", (e) => {
  const pseudo = e.target.value;
  const validation = validatePseudo(pseudo);

  // Mettre à jour le message d'erreur
  elements.pseudoError.textContent = validation.message;

  // Mettre à jour les classes CSS
  elements.pseudoInput.classList.remove("error", "success");
  if (pseudo.trim()) {
    if (validation.isValid) {
      elements.pseudoInput.classList.add("success");
    } else {
      elements.pseudoInput.classList.add("error");
    }
  }

  // Mettre à jour l'état
  isValidPseudo = validation.isValid;
  updateNextButton();
});

/**
 * Gestion de la sélection d'avatar
 */
elements.avatarOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // Désélectionner tous les avatars
    elements.avatarOptions.forEach((opt) => {
      opt.classList.remove("selected");
    });

    // Sélectionner l'avatar cliqué
    option.classList.add("selected");
    selectedAvatar = option.dataset.avatar;

    // Mettre à jour le bouton
    updateNextButton();
  });
});

/**
 * Gestion du bouton "Suivant"
 */
elements.nextBtn.addEventListener("click", () => {
  if (elements.nextBtn.classList.contains("enabled")) {
    showProfileCard();
  }
});

/**
 * Gestion du bouton "Recommencer"
 */
elements.restartBtn.addEventListener("click", resetForm);

/**
 * Gestion du changement de thème
 */
elements.themeToggle.addEventListener("click", toggleTheme);

// ===== INITIALISATION =====

/**
 * Initialise l'application au chargement de la page
 */
document.addEventListener("DOMContentLoaded", () => {
  // Initialiser les avatars
  initializeAvatars();

  // Générer la première description
  generateRandomDescription();

  // Mettre à jour l'état initial du bouton
  updateNextButton();
});

// ===== FONCTIONS DE DEBUG (optionnel) =====

/**
 * Fonction de debug pour vérifier l'état de l'application
 */
function debugState() {
  console.log("--- État actuel ---");
  console.log("Description:", currentDescription);
  console.log("Pseudo valide:", isValidPseudo);
  console.log("Avatar sélectionné:", selectedAvatar);
  console.log("Bouton activé:", elements.nextBtn.classList.contains("enabled"));
}
