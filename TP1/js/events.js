import { elements } from "./dom.js";
import { setState } from "./data.js";
import { generateRandomDescription, validatePseudo } from "./utils.js";
import {
  updateNextButton,
  showProfileCard,
  resetForm,
  toggleTheme,
} from "./actions.js";

export function initEvents() {
  // Changement de description
  elements.changeDescriptionBtn.addEventListener("click", () => {
    generateRandomDescription();
    updateNextButton();
  });

  // Pseudo
  elements.pseudoInput.addEventListener("input", (e) => {
    const { isValid, message } = validatePseudo(e.target.value);
    elements.pseudoError.textContent = message;

    elements.pseudoInput.classList.remove("error", "success");
    if (e.target.value.trim()) {
      elements.pseudoInput.classList.add(isValid ? "success" : "error");
    }

    setState({ isValidPseudo: isValid });
    updateNextButton();
  });

  // Sélection avatar
  elements.avatarOptions.forEach((option) => {
    option.addEventListener("click", () => {
      elements.avatarOptions.forEach((opt) => opt.classList.remove("selected"));
      option.classList.add("selected");
      setState({ selectedAvatar: option.dataset.avatar });
      updateNextButton();
    });
  });

  // Suivant
  elements.nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (elements.nextBtn.classList.contains("enabled")) showProfileCard();
  });

  // Restart
  elements.restartBtn.addEventListener("click", resetForm);

  // Thème
  elements.themeToggle.addEventListener("click", toggleTheme);
}
