import { descriptions, state, setState } from "./data.js";
import { elements } from "./dom.js";

// génération aléatoire d'une description présente dans le tableau
export function generateRandomDescription() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * descriptions.length);
  } while (newIndex === state.lastDescriptionIndex && descriptions.length > 1);

  setState({
    lastDescriptionIndex: newIndex,
    currentDescription: descriptions[newIndex],
  });
  elements.descriptionText.textContent = state.currentDescription;
}

// Validation du pseudo
export function validatePseudo(pseudo) {
  if (!pseudo.trim()) return { isValid: false, message: "" };
  if (pseudo.length < 3)
    return {
      isValid: false,
      message: "Le pseudo doit contenir au moins 3 caractères.",
    };
  if (!/^[a-zA-Z]+$/.test(pseudo))
    return { isValid: false, message: "Seulement des lettres (a-z, A-Z)." };

  return { isValid: true, message: "" };
}
