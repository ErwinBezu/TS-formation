// Creation du DOM avec JS
export function buildDom() {
  // Container principal
  const container = document.createElement("main");
  container.className = "container";
  document.body.appendChild(container);

  // Formulaire
  const profileForm = document.createElement("form");
  profileForm.id = "profileForm";
  profileForm.className = "profile-form";
  container.appendChild(profileForm);

  // Titre
  const formTitle = document.createElement("h1");
  formTitle.className = "form-title";
  formTitle.textContent = "Créez votre profil";
  profileForm.appendChild(formTitle);

  // Section description
  const descriptionSection = document.createElement("section");
  descriptionSection.className = "description-section";
  profileForm.appendChild(descriptionSection);

  const descriptionText = document.createElement("div");
  descriptionText.id = "descriptionText";
  descriptionText.className = "description-text";
  descriptionSection.appendChild(descriptionText);

  const changeDescriptionBtn = document.createElement("button");
  changeDescriptionBtn.id = "changeDescriptionBtn";
  changeDescriptionBtn.className = "change-description-btn";
  changeDescriptionBtn.type = "button";
  changeDescriptionBtn.textContent = "Changer de description";
  descriptionSection.appendChild(changeDescriptionBtn);

  //  Section pseudo
  const pseudoSection = document.createElement("fieldset");
  pseudoSection.className = "pseudo-section";
  profileForm.appendChild(pseudoSection);

  const pseudoLabel = document.createElement("label");
  pseudoLabel.setAttribute("for", "pseudoInput");
  pseudoLabel.textContent = "Pseudo :";
  pseudoSection.appendChild(pseudoLabel);

  const pseudoInput = document.createElement("input");
  pseudoInput.type = "text";
  pseudoInput.id = "pseudoInput";
  pseudoInput.className = "pseudo-input";
  pseudoInput.placeholder = "Entrez votre pseudo";
  pseudoSection.appendChild(pseudoInput);

  const pseudoError = document.createElement("div");
  pseudoError.id = "pseudoError";
  pseudoError.className = "error-message";
  pseudoSection.appendChild(pseudoError);

  // Section avatars
  const avatarSection = document.createElement("fieldset");
  avatarSection.className = "avatar-section";
  profileForm.appendChild(avatarSection);

  const avatarLabel = document.createElement("legend");
  avatarLabel.textContent = "Choisissez votre avatar :";
  avatarSection.appendChild(avatarLabel);

  // Liste sémantique des avatars
  const avatarList = document.createElement("ul");
  avatarList.className = "avatar-grid";
  avatarSection.appendChild(avatarList);

  // Génération des 3 avatars
  for (let i = 1; i <= 3; i++) {
    const avatarItem = document.createElement("li");
    avatarItem.className = "avatar-option";
    avatarItem.dataset.avatar = i;
    avatarList.appendChild(avatarItem);
  }

  // Bouton suivant
  const nextBtn = document.createElement("button");
  nextBtn.id = "nextBtn";
  nextBtn.className = "next-btn";
  nextBtn.textContent = "Suivant";
  profileForm.appendChild(nextBtn);

  // Carte profil
  const profileCard = document.createElement("section");
  profileCard.id = "profileCard";
  profileCard.className = "profile-card";
  container.appendChild(profileCard);

  const finalAvatar = document.createElement("div");
  finalAvatar.id = "finalAvatar";
  finalAvatar.className = "profile-avatar";
  profileCard.appendChild(finalAvatar);

  const finalPseudo = document.createElement("div");
  finalPseudo.id = "finalPseudo";
  finalPseudo.className = "profile-pseudo";
  profileCard.appendChild(finalPseudo);

  const finalDescription = document.createElement("div");
  finalDescription.id = "finalDescription";
  finalDescription.className = "profile-description";
  profileCard.appendChild(finalDescription);

  const restartBtn = document.createElement("button");
  restartBtn.id = "restartBtn";
  restartBtn.className = "restart-btn";
  restartBtn.textContent = "Recommencer";
  profileCard.appendChild(restartBtn);

  // Sélecteur de thème Light ou Dark
  const themeToggle = document.createElement("aside");
  themeToggle.id = "themeToggle";
  themeToggle.className = "theme-toggle";
  document.body.appendChild(themeToggle);

  const themeIcon = document.createElement("span");
  themeIcon.className = "theme-icon";
  themeIcon.textContent = "\uD83C\uDF19";
  themeToggle.appendChild(themeIcon);

  const themeText = document.createElement("span");
  themeText.textContent = "Thème";
  themeToggle.appendChild(themeText);
}
