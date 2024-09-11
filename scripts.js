// Fonction pour mettre à jour le contenu du CV
function updateCV() {
    const name = document.getElementById('name').value;
    const job = document.getElementById('job').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    // Mise à jour des éléments affichés
    document.getElementById('displayName').innerText = name || "Nom et Prénom";
    document.getElementById('displayJob').innerText = job || "Poste recherché";
    document.getElementById('displayPhone').innerText = "Téléphone : " + (phone || "000 000 000");
    document.getElementById('displayEmail').innerText = "Email : " + (email || "example@example.com");
    document.getElementById('displayAddress').innerText = "Adresse : " + (address || "Adresse actuelle");
}
