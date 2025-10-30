// Clients Section Toggle Functionality

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.clients-toggle');
  const clientsGrid = document.querySelector('.clients-grid');
  
  if (!toggleButton || !clientsGrid) {
    return; // Exit if elements don't exist
  }
  
  // Get initially visible logos count
  const visibleLogos = clientsGrid.querySelectorAll('.client-logo:not(.client-logo-hidden)').length;
  const totalLogos = clientsGrid.querySelectorAll('.client-logo').length;
  
  // Don't show toggle if all logos are visible
  if (visibleLogos >= totalLogos) {
    toggleButton.style.display = 'none';
    return;
  }
  
  toggleButton.addEventListener('click', function() {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
      // Collapse - Start fade-out animation
      clientsGrid.classList.add('collapsing');
      
      // Wait for fade-out animation, then collapse grid
      setTimeout(function() {
        clientsGrid.classList.remove('expanded');
        clientsGrid.classList.remove('collapsing');
        toggleButton.setAttribute('aria-expanded', 'false');
        toggleButton.querySelector('.toggle-text').textContent = 'See More';
        toggleButton.setAttribute('aria-label', 'Show more clients');
        
        // Scroll to top of section
        const clientsSection = document.getElementById('clients-section');
        if (clientsSection) {
          const offsetTop = clientsSection.offsetTop;
          window.scrollTo({
            top: offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }, 300); // Match CSS transition duration
    } else {
      // Expand
      clientsGrid.classList.remove('collapsing');
      clientsGrid.classList.add('expanded');
      toggleButton.setAttribute('aria-expanded', 'true');
      toggleButton.querySelector('.toggle-text').textContent = 'See Less';
      toggleButton.setAttribute('aria-label', 'Show less clients');
    }
  });
  
  // Keyboard accessibility
  toggleButton.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleButton.click();
    }
  });
});
