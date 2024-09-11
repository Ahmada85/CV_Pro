// Fonction pour mettre à jour le contenu de la Lettre de Motivation
function updateLM() {
    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const position = document.getElementById('position').value;
    const motivation = document.getElementById('motivation').value;

    // Mise à jour des éléments affichés
    document.getElementById('displayName').innerText = name || "Nom et Prénom";
    document.getElementById('displayCompany').innerText = company || "Nom de l'entreprise";
    document.getElementById('displayPosition').innerText = position || "Poste recherché";
    document.getElementById('displayMotivation').innerText = motivation || "Exprimez votre motivation ici...";
}
