// script.js

// Attendre que le contenu de la page soit complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne le carrousel et tous ses éléments
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length; // Nombre total d'éléments dans le carrousel
    let currentIndex = 0; // L'index de l'élément actuel dans le carrousel
    let interval; // Variable pour stocker l'intervalle du carrousel auto

    // Récupère les boutons précédent et suivant pour les manipuler
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // Fonction pour mettre à jour le carrousel en fonction de l'index actuel
    function updateCarousel() {
        const offset = -currentIndex * 100; // Calculer le déplacement en pourcentage
        carousel.style.transform = `translateX(${offset}%)`; // Appliquer le décalage horizontal
    }

    // Fonction pour passer à l'élément suivant dans le carrousel
    function goToNext() {
        currentIndex = (currentIndex + 1) % totalItems; // Incrémenter l'index et revenir au début si on atteint la fin
        updateCarousel(); // Mettre à jour l'affichage du carrousel
    }

    // Fonction pour revenir à l'élément précédent dans le carrousel
    function goToPrev() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Décrémenter l'index et revenir à la fin si on est au début
        updateCarousel(); // Mettre à jour l'affichage du carrousel
    }

    // Fonction pour démarrer le défilement automatique du carrousel
    function startAutoSlide() {
        interval = setInterval(goToNext, 1500); // Changer d'image toutes les 1.5 secondes
    }

    // Fonction pour arrêter le défilement automatique du carrousel
    function stopAutoSlide() {
        clearInterval(interval); // Arrêter l'intervalle du carrousel
    }

    // Événements pour les boutons précédent et suivant
    prevButton.addEventListener('click', function() {
        goToPrev(); // Passer à l'élément précédent
        stopAutoSlide(); // Arrêter le défilement automatique lorsqu'on interagit avec les boutons
    });

    nextButton.addEventListener('click', function() {
        goToNext(); // Passer à l'élément suivant
        stopAutoSlide(); // Arrêter le défilement automatique lorsqu'on interagit avec les boutons
    });

    // Événements pour activer/désactiver le défilement automatique lors du survol
    carousel.addEventListener('mouseenter', stopAutoSlide); // Arrêter le défilement lorsque la souris entre dans le carrousel
    carousel.addEventListener('mouseleave', startAutoSlide); // Redémarrer le défilement lorsque la souris quitte le carrousel

    // Démarrer le défilement automatique dès que le script est exécuté
    startAutoSlide();
});
