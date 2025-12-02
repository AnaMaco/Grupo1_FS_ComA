const searchInput = document.getElementById('searchMovies');
const filterYear = document.getElementById('filterYear');
const cards = document.querySelectorAll('.cards-hor');

// Función de búsqueda
function filterMovies() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedYear = filterYear.value;

    cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        const year = card.getAttribute('data-year');
        
        const matchesSearch = title.includes(searchTerm);
        const matchesYear = !selectedYear || 
            (selectedYear === '2025' && year === '2025') ||
            (selectedYear === '2024' && year === '2024') ||
            (selectedYear === '2020s' && year >= 2020 && year < 2030) ||
            (selectedYear === '2010s' && year >= 2010 && year < 2020) ||
            (selectedYear === '2000s' && year >= 2000 && year < 2010) ||
            (selectedYear === '1990s' && year >= 1990 && year < 2000) ||
            (selectedYear === '1980s' && year >= 1980 && year < 1990);

        if (matchesSearch && matchesYear) {
            card.style.display = 'flex';
            card.style.animation = 'slideIn 0.4s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
}

searchInput.addEventListener('input', filterMovies);
filterYear.addEventListener('change', filterMovies);