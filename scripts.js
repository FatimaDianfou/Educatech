// Gérer la soumission du formulaire de création de compte

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher la soumission traditionnelle du formulaire

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Vérifier si les mots de passe correspondent
    if (password !== confirmPassword) {
        document.getElementById('message').innerText = "Les mots de passe ne correspondent pas.";
        return;
    }

    // Exemple de validation des données du formulaire
    if (username === '' || email === '' || password === '') {
        document.getElementById('message').innerText = "Tous les champs sont obligatoires.";
        return;
    }


    // Pour l'instant, simuler une création de compte réussie
    document.getElementById('message').innerText = "Compte créé avec succès.";
});

// Gérer la soumission du formulaire de connexion
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher la soumission traditionnelle du formulaire

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Exemple de validation des données du formulaire
    if (email === '' || password === '') {
        document.getElementById('message').innerText = "Tous les champs sont obligatoires.";
        return;
    }

    
    // Pour l'instant, simuler une connexion réussie
    localStorage.setItem('token', 'dummy-token');
    document.getElementById('message').innerText = "Connexion réussie.";
    document.getElementById('logout-button').style.display = 'block';
});

// Gérer la déconnexion
document.getElementById('logout-button').addEventListener('click', function() {
    localStorage.removeItem('token'); // Supprimer le token du stockage local
    document.getElementById('message').innerText = "Déconnexion réussie.";
    document.getElementById('logout-button').style.display = 'none'; // Cacher le bouton de déconnexion
});
