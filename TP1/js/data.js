// Descriptions
export const descriptions = [
  "Mais, ça marche chez moi",
  "Junior avec l'égo d'un dev Senior",
  "J'ai plus de commits que d'heures de sommeil",
  "Expert en utilisation d'IA",
  "Aime le risque, avec une mise en prod le vendredi",
  "Merge tout ce qui bouge",
  "Mon code est propre, tant que personne ne le regarde",
  "UwU",
];

// Avatars proposés
export const avatars = {
  1: "assets/Benzai.png",
  2: "assets/Kopain.png",
  3: "assets/Kraleur.png",
};

// état de l'application
export let state = {
  currentDescription: "",
  lastDescriptionIndex: -1,
  selectedAvatar: null,
  isValidPseudo: false,
};

// fonction pour mettre à jour l'état de l'application
export function setState(newState) {
  state = { ...state, ...newState };
}
