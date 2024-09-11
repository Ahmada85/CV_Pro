// Charger les données fictives du CV pour l'édition
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const model = params.get('model');
    
    // Simuler des données chargées depuis un serveur ou un fichier JSON
    const cvData = {
        name: "Jean Dupont",
        profession: "Développeur Web",
        experience: "5 ans d'expérience dans le développement web..."
    };

    // Pré-remplir le formulaire
    document.getElementById('name').value = cvData.name;
    document.getElementById('profession').value = cvData.profession;
    document.getElementById('experience').textContent = cvData.experience;

    // Sauvegarder les modifications
    document.getElementById('edit-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Modifications enregistrées pour le modèle ' + model);
        // Logique de sauvegarde réelle à implémenter
    });
});
