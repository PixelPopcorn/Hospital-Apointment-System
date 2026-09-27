const searchInput = document.getElementById('doctor-search');
const doctorCards = document.querySelectorAll('#doctors-list .doctor-card');
const noResults = document.getElementById('no-results');

searchInput.addEventListener('input', function () {
  const query = searchInput.value.toLowerCase();
  let matchCount = 0;

  doctorCards.forEach(function (card) {
    const cardText = card.textContent.toLowerCase();

    if (cardText.includes(query)) {
      card.hidden = false;
      matchCount++;
    } else {
      card.hidden = true;
    }
  });

  if (matchCount === 0) {
    noResults.hidden = false;
  } else {
    noResults.hidden = true;
  }
});


