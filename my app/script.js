// Date cible du compte à rebours (5 juin 2023 à 9h)
const targetDate = new Date("2023-06-05T09:00:00");

// Fonction pour mettre à jour le compte à rebours
function updateCountdown() {
  const now = new Date();
  const distance = targetDate - now;

  // Calcul des jours, heures, minutes et secondes restantes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Affiche le compte à rebours dans les éléments HTML correspondants
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Si le compte à rebours est terminé, affiche un message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Le compte à rebours est terminé !";
  }
}

// Met à jour le compte à rebours toutes les secondes
const countdown = setInterval(updateCountdown, 1000);
