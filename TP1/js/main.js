import { buildDom } from "./dom-builder.js";
import { captureElements } from "./dom.js";
import { generateRandomDescription } from "./utils.js";
import { initializeAvatars, updateNextButton } from "./actions.js";
import { initEvents } from "./events.js";

//Initialisation de l'application au chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
  buildDom(); //Génération du DOM dynamiquement
  captureElements(); //Récupère et stock les références aux éléments du DOM
  initializeAvatars(); // Initialisation des avatars
  generateRandomDescription(); // génère une première description de manière random
  updateNextButton(); // MàJ de l'état du bouton suivant afin de le rendre cliquable ou non
  initEvents(); // gestionnaires d'événements
});
