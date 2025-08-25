import { avatars, state, setState } from "./data.js";
import { elements } from "./dom.js";
import { generateRandomDescription } from "./utils.js";

// Active ou désactive le bouton suivant
export function updateNextButton() {
  const canProceed =
    state.isValidPseudo && state.currentDescription && state.selectedAvatar;

  if (canProceed) {
    elements.nextBtn.classList.add("enabled");
    elements.nextBtn.disabled = false;
  } else {
    elements.nextBtn.classList.remove("enabled");
    elements.nextBtn.disabled = true;
  }
}

// Initialisation des avatars
export function initializeAvatars() {
  elements.avatarOptions.forEach((option) => {
    option.style.backgroundImage = `url(${avatars[option.dataset.avatar]})`;
  });
}

// Affichage de la carte profile
export function showProfileCard() {
  elements.form.style.display = "none";
  elements.finalPseudo.textContent = elements.pseudoInput.value;
  elements.finalDescription.textContent = state.currentDescription;
  elements.finalAvatar.style.backgroundImage = `url(${
    avatars[state.selectedAvatar]
  })`;
  elements.card.style.display = "block";
}

//Reset du formulaire
export function resetForm() {
  elements.card.style.display = "none";
  elements.form.style.display = "block";
  elements.pseudoInput.value = "";
  elements.pseudoError.textContent = "";
  elements.pseudoInput.classList.remove("error", "success");

  elements.avatarOptions.forEach((opt) => opt.classList.remove("selected"));

  setState({ isValidPseudo: false, selectedAvatar: null });
  generateRandomDescription();
  updateNextButton();
}

//Switch du theme dark ou light
export function toggleTheme() {
  const themeIcon = elements.themeToggle.querySelector(".theme-icon");
  if (document.body.getAttribute("data-theme") === "dark") {
    document.body.removeAttribute("data-theme");
    themeIcon.textContent = "\uD83C\uDF19";
  } else {
    document.body.setAttribute("data-theme", "dark");
    themeIcon.textContent = "\uD83C\uDF1E";
  }
}
