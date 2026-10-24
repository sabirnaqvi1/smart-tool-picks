const search = document.getElementById('search');
const cards = [...document.querySelectorAll('.tool-card')];
const filters = [...document.querySelectorAll('.filter')];
const noResults = document.getElementById('noResults');
let activeFilter = 'All';
function updateCards(){
  const term = search.value.trim().toLowerCase(); let visible = 0;
  cards.forEach(card => {
    const matchesText = (card.dataset.name + ' ' + card.innerText).toLowerCase().includes(term);
    const matchesCategory = activeFilter === 'All' || card.dataset.category === activeFilter;
    const show = matchesText && matchesCategory; card.hidden = !show; if(show) visible++;
  });
  noResults.hidden = visible !== 0;
}
search.addEventListener('input', updateCards);
filters.forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  filters.forEach(item => item.classList.toggle('active', item === button)); updateCards();
}));
document.querySelector('.menu-toggle').addEventListener('click', () => document.querySelector('.topbar').classList.toggle('nav-open'));
document.getElementById('year').textContent = new Date().getFullYear();
