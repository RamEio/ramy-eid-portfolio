/**
 * Experience Toggle Functionality
 * Handles the expand/collapse of hidden experiences
 */

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-experiences');
    const hiddenExperiences = document.getElementById('hidden-experiences');
    const experienceSection = document.getElementById('experience');
    const visibleExperiences = document.querySelector('.timeline-visible');
    
    if (toggleButton && hiddenExperiences) {
        toggleButton.addEventListener('click', function() {
            const isExpanded = hiddenExperiences.classList.contains('expanded');
            
            if (isExpanded) {
                // Collapse
                hiddenExperiences.classList.remove('expanded');
                toggleButton.classList.remove('expanded');
                toggleButton.textContent = 'View Detailed Experience';
                toggleButton.setAttribute('aria-expanded', 'false');
                
                // Scroll to top of experience section when collapsing (immediate)
                experienceSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // Expand
                hiddenExperiences.classList.add('expanded');
                toggleButton.classList.add('expanded');
                toggleButton.textContent = 'Show Less';
                toggleButton.setAttribute('aria-expanded', 'true');
                
                // Scroll to third experience to see the collapse animation
                setTimeout(() => {
                    const thirdExperience = visibleExperiences.querySelector('.timeline-item:nth-child(3)');
                    if (thirdExperience) {
                        thirdExperience.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }
                }, 100); // Small delay to ensure expansion starts
            }
        });
        
        // Keyboard accessibility
        toggleButton.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleButton.click();
            }
        });
    }
});
