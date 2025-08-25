export let elements = {};

export function captureElements() {
  elements = {
    form: document.getElementById("profileForm"),
    card: document.getElementById("profileCard"),

    descriptionText: document.getElementById("descriptionText"),
    changeDescriptionBtn: document.getElementById("changeDescriptionBtn"),

    pseudoInput: document.getElementById("pseudoInput"),
    pseudoError: document.getElementById("pseudoError"),

    avatarOptions: document.querySelectorAll(".avatar-option"),

    nextBtn: document.getElementById("nextBtn"),
    restartBtn: document.getElementById("restartBtn"),

    themeToggle: document.getElementById("themeToggle"),

    finalAvatar: document.getElementById("finalAvatar"),
    finalPseudo: document.getElementById("finalPseudo"),
    finalDescription: document.getElementById("finalDescription"),
  };
}
