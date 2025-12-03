   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
    const chips = document.querySelectorAll('.chip');
    const cards = document.querySelectorAll('.event-card');
    const categories = [
    'all',
    'wedding',
    'birthday',
    'corporate',
    'romantic',
    'celebration',
    'FunGames',
    'adventure'];


    let current = 0;

    function filterEvents(category) {
      cards.forEach(card => {
        const match = category === 'all' || card.dataset.category === category;
        card.style.display = match ? 'block' : 'none';
      });

      chips.forEach(chip => {
        chip.classList.toggle('active', chip.dataset.category === category);
      });
    }

    // Chip click filtering
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        current = categories.indexOf(chip.dataset.category);
        filterEvents(chip.dataset.category);
      });
    });

    // Auto-cycle through categories
    setInterval(() => {
      current = (current + 1) % categories.length;
      filterEvents(categories[current]);
    }, 5000); // every 5 seconds

    document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn  = document.querySelector('.nav-toggle');
  const overlay    = document.querySelector('.nav-overlay');
  const sideNav    = document.querySelector('.side-nav');
  const sideLinks  = sideNav ? sideNav.querySelectorAll('a') : [];

  function toggleNav() {
    document.body.classList.toggle('nav-open');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleNav);
  }

  if (overlay) {
    overlay.addEventListener('click', toggleNav);
  }

  sideLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
    });
  });
});

