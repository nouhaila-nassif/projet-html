document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu-placeholder');
    const footer = document.getElementById('footer-container');
  
    // Vérification de l'existence des éléments avant de les manipuler
    if (menu) {
        fetch('footernavbar.html')
            .then(response => response.text())
            .then(html => {
                console.log('Menu et Footer chargés avec succès');
                // Séparer le contenu en deux parties : le menu et le footer
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;
                const menuContent = tempDiv.querySelector('nav');
                const footerContent = tempDiv.querySelector('footer');
  
                // Injecter le contenu dans les bons éléments
                menu.innerHTML = menuContent.outerHTML;
                footer.innerHTML = footerContent.outerHTML;
            })
            .catch(err => console.log('Erreur lors du chargement du footer:', err));
    } else {
        console.log('Élément menu-placeholder non trouvé');
    }
  
    if (footer) {
        footer.innerHTML = '';  // Nous gérons le footer ci-dessus
    }
  
    // Fonction pour afficher la modale
    function showModal() {
      const modal = document.getElementById('modal');
      if (modal) {
        modal.classList.add('show');  // Ajoute la classe 'show' pour afficher la modale
      } else {
        console.log('Élément modal non trouvé');
      }
    }
  
    // Affichage de la modale après un délai de 2 secondes
    setTimeout(showModal, 2000);
  
    // Fonction pour fermer la modale
    function closeModal() {
      const modal = document.getElementById('modal');
      if (modal) {
        modal.classList.remove('show');  // Supprime la classe 'show' pour masquer la modale
      } else {
        console.log('Élément modal non trouvé');
      }
    }
  
    // Fermeture de la modale si les boutons de fermeture sont présents
    const closeModalButton = document.getElementById('close-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    
    if (closeModalButton) {
      closeModalButton.addEventListener('click', closeModal);
    } else {
      console.log('Élément close-modal non trouvé');
    }
  
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', closeModal);
    } else {
      console.log('Élément close-modal-btn non trouvé');
    }
  });
  