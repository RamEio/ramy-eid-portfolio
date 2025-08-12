/**
 * Work Experience Page JavaScript
 * Handles timeline navigation, filtering, card expansion, and interactive features
 */

class ExperiencePage {
    constructor() {
        this.experiences = [];
        this.filteredExperiences = [];
        this.currentFilters = {
            company: '',
            skills: '',
            project: ''
        };
        
        this.init();
    }

    init() {
        this.loadExperiences();
        this.initTimelineNavigation();
        this.initFilterSystem();
        this.initCardExpansion();
        this.initScrollEffects();
        this.initAccessibility();
    }

    /**
     * Load and populate experience data
     */
    loadExperiences() {
        this.experiences = [
            {
                id: 1,
                year: 2025,
                title: "AI-Powered Design Consultant & Multi-Agent Systems Specialist",
                company: "Expertise Innovation Design",
                companyType: "startup",
                period: "2025 - Present",
                description: "Leading AI-driven design initiatives using multi-agent systems. Specializing in Cursor AI, Abacus.ai, and advanced AI tools for rapid prototyping and development.",
                detailedDescription: "Implementing AI-assisted UX research, automated design systems, and intelligent project management workflows. Expert in coordinating multiple AI agents for complex design projects and webapp development.",
                achievements: [
                    "Implemented AI-powered design workflows reducing project time by 40%",
                    "Developed multi-agent systems for complex design projects",
                    "Pioneered AI-assisted user research methodologies"
                ],
                skills: ["AI/ML", "Multi-Agent Systems", "UX Design", "Product Management"],
                projectType: "consulting",
                logo: "/assets/LOGO EID.png",
                logoFallback: "EID"
            },
            {
                id: 2,
                year: 2024,
                title: "Multi-Agent System Architect & AI Tool Specialist",
                company: "Expertise Innovation Design",
                companyType: "startup",
                period: "2024 - Present",
                description: "Architecting multi-agent systems for complex design projects. Expert in Cursor AI, Abacus.ai, and emerging AI tools for website and webapp development.",
                detailedDescription: "Implementing AI-assisted design sprints, automated user research, and intelligent project coordination. Pioneering the integration of AI agents in design workflows.",
                achievements: [
                    "Designed multi-agent systems for 15+ complex projects",
                    "Reduced design iteration time by 60% through AI automation",
                    "Established AI-assisted design methodologies"
                ],
                skills: ["AI/ML", "Multi-Agent Systems", "UX Design", "Product Management"],
                projectType: "consulting",
                logo: "/assets/LOGO EID.png",
                logoFallback: "EID"
            },
            {
                id: 3,
                year: 2022,
                title: "UX/Product Designer Lead",
                company: "Expertise Innovation Design & Decathlon CSP",
                companyType: "corporate",
                period: "2022 - Present",
                description: "Leading UX/Product Design for 'Decathlon Ride' app (nature cycling). Product vision alignment, continuous discovery, and systematic UX testing.",
                detailedDescription: "Responsible for graphic consistency with Decathlon design system (Vitamin Play) and data tracking implementation. Managing beta tester community and product vision alignment.",
                achievements: [
                    "Led design for Decathlon Ride app with 100K+ downloads",
                    "Managed beta tester community of 500+ users",
                    "Implemented systematic UX testing for all features"
                ],
                skills: ["UX Design", "Product Management", "Mobile", "User Research"],
                projectType: "mobile-apps",
                logo: "https://www.hbs-communication.com/wp-content/uploads/2024/06/logotype-decathlon-1.png",
                logoFallback: "D"
            },
            {
                id: 4,
                year: 2022,
                title: "UX Designer - Product Discovery",
                company: "Carrefour",
                companyType: "corporate",
                period: "July - December 2022",
                description: "Product discovery focused projects within the design team. User research planning and execution, workshop facilitation, and Figma/Figjam prototyping.",
                detailedDescription: "Focused on retail innovation through user research, workshop facilitation, and rapid prototyping. Collaborated with cross-functional teams to deliver user-centered solutions.",
                achievements: [
                    "Conducted user research for retail innovation projects",
                    "Facilitated design workshops with stakeholders",
                    "Created rapid prototypes using Figma and Figjam"
                ],
                skills: ["UX Design", "User Research", "Workshop Facilitation", "Prototyping"],
                projectType: "research",
                logo: "https://logorigine.wordpress.com/wp-content/uploads/2011/10/images-23.jpg",
                logoFallback: "C"
            },
            {
                id: 5,
                year: 2019,
                title: "UX Designer - Command Tunnel & Mobile App",
                company: "Leroy Merlin / ADEO",
                companyType: "corporate",
                period: "2019 - 2022",
                description: "Workshop facilitation, co-design, Lean UX, agile workflow organization. UX/UI integration and marketplace focus groups.",
                detailedDescription: "UX/UI integration, marketplace focus groups, UX audits, data analysis, and automated user feedback analysis (AI). Advanced use of Content Square, Google Analytics, and participation in ADEO design system (Mozaic) enrichment.",
                achievements: [
                    "Facilitated workshops using Eisenhower matrix methodology",
                    "Implemented Lean UX processes in agile workflows",
                    "Conducted UX audits and data analysis for marketplace optimization"
                ],
                skills: ["UX Design", "Workshop Facilitation", "Data Analysis", "Design Systems"],
                projectType: "web-apps",
                logo: "https://logo.clearbit.com/leroymerlin.fr",
                logoFallback: "LM"
            },
            {
                id: 6,
                year: 2019,
                title: "UX Designer - Creative Studio",
                company: "Capgemini",
                companyType: "corporate",
                period: "2019 - 2022",
                description: "Creative Studio integration, user testing focus, design sprints, UX research. Workshop facilitation and UX evangelization.",
                detailedDescription: "Workshop facilitation, UX evangelization (FLUPA conferences), and volunteer work with Emmaüs Connect (digital training). Supply chain projects (Danone) and retail projects (Leroy Merlin).",
                achievements: [
                    "Presented at FLUPA conferences on UX evangelization",
                    "Volunteered with Emmaüs Connect for digital training",
                    "Led design sprints for supply chain and retail projects"
                ],
                skills: ["UX Design", "User Research", "Workshop Facilitation", "Design Sprints"],
                projectType: "consulting",
                logo: "https://logo.clearbit.com/capgemini.com",
                logoFallback: "C"
            },
            {
                id: 7,
                year: 2017,
                title: "Product Owner & Functional Consultant",
                company: "Sopra Steria Consulting",
                companyType: "corporate",
                period: "2017 - 2019",
                description: "Functional consultant and Product Owner roles. UX evangelization (Bastien & Scapin heuristics, Gestalt theory).",
                detailedDescription: "Key projects: MEL mobile app for merchants (agile team management), ARI international PIM (local adaptation, change management, user training). International context, agile and technical complexity management.",
                achievements: [
                    "Managed agile team for MEL mobile app development",
                    "Led international PIM project with local adaptation",
                    "Conducted UX evangelization using Bastien & Scapin heuristics"
                ],
                skills: ["Product Management", "Agile", "UX Design", "Change Management"],
                projectType: "mobile-apps",
                logo: "https://logo.clearbit.com/soprasteria.com",
                logoFallback: "SS"
            },
            {
                id: 8,
                year: 2016,
                title: "UX/UI Designer",
                company: "NiceToMeetYou - First Web Agency",
                companyType: "agency",
                period: "2016 - 2017",
                description: "High-definition wireframing, co-design workshops, design sprints. Work on diverse projects (graphics, ideation, accessibility).",
                detailedDescription: "Notable experiences: Domyos express design sprint, Crédit Mutuel recruitment app, Picto Travel accessibility design sprint with disabled users. Learning rigor, prioritization, and rapid adaptation.",
                achievements: [
                    "Led Domyos express design sprint",
                    "Designed Crédit Mutuel recruitment app",
                    "Conducted accessibility design sprint with disabled users"
                ],
                skills: ["UX Design", "UI Design", "Accessibility", "Design Sprints"],
                projectType: "web-apps",
                logo: "",
                logoFallback: "NT"
            },
            {
                id: 9,
                year: 2015,
                title: "Research Intern - Human Factors & AI",
                company: "ENSC Bordeaux & Airbus Group",
                companyType: "research",
                period: "2015",
                description: "ENSC (National School of Cognitive Engineering) - Human factors, ergonomics, computer science, robotics, cognitive sciences.",
                detailedDescription: "MoTa project internship at Airbus Group (Toulouse): Java development and artificial intelligence (pathfinding). Direct collaboration with air traffic controllers to improve complex interface usability. First user tests and UX iterations: birth of UX designer vocation.",
                achievements: [
                    "Developed Java applications for Airbus Group",
                    "Implemented AI pathfinding algorithms",
                    "Conducted user tests with air traffic controllers"
                ],
                skills: ["Research", "AI/ML", "Java Development", "Human Factors"],
                projectType: "research",
                logo: "",
                logoFallback: "EN"
            }
        ];

        this.filteredExperiences = [...this.experiences];
        this.renderExperiences();
        this.renderSkills();
    }

    /**
     * Initialize timeline navigation
     */
    initTimelineNavigation() {
        const timelineMarkers = document.querySelectorAll('.timeline-marker');
        
        timelineMarkers.forEach(marker => {
            marker.addEventListener('click', (e) => {
                const year = e.currentTarget.dataset.year;
                this.scrollToYear(year);
                this.updateTimelineActiveState(year);
            });

            marker.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const year = e.currentTarget.dataset.year;
                    this.scrollToYear(year);
                    this.updateTimelineActiveState(year);
                }
            });
        });
    }

    /**
     * Scroll to specific year section
     */
    scrollToYear(year) {
        const targetExperiences = this.experiences.filter(exp => exp.year === parseInt(year));
        if (targetExperiences.length > 0) {
            const firstExperience = document.querySelector(`[data-experience-id="${targetExperiences[0].id}"]`);
            if (firstExperience) {
                firstExperience.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        }
    }

    /**
     * Update timeline active state
     */
    updateTimelineActiveState(activeYear) {
        const timelineMarkers = document.querySelectorAll('.timeline-marker');
        
        timelineMarkers.forEach(marker => {
            const isActive = marker.dataset.year === activeYear;
            marker.setAttribute('aria-pressed', isActive.toString());
        });
    }

    /**
     * Initialize filter system
     */
    initFilterSystem() {
        const companyFilter = document.getElementById('company-filter');
        const skillsFilter = document.getElementById('skills-filter');
        const projectFilter = document.getElementById('project-filter');
        const clearFiltersBtn = document.getElementById('clear-filters');

        companyFilter.addEventListener('change', () => this.applyFilters());
        skillsFilter.addEventListener('change', () => this.applyFilters());
        projectFilter.addEventListener('change', () => this.applyFilters());
        
        clearFiltersBtn.addEventListener('click', () => this.clearFilters());
    }

    /**
     * Apply filters to experiences
     */
    applyFilters() {
        const companyFilter = document.getElementById('company-filter').value;
        const skillsFilter = document.getElementById('skills-filter').value;
        const projectFilter = document.getElementById('project-filter').value;

        this.currentFilters = {
            company: companyFilter,
            skills: skillsFilter,
            project: projectFilter
        };

        this.filteredExperiences = this.experiences.filter(experience => {
            const companyMatch = !companyFilter || experience.companyType === companyFilter;
            const skillsMatch = !skillsFilter || experience.skills.some(skill => 
                skill.toLowerCase().includes(skillsFilter.toLowerCase())
            );
            const projectMatch = !projectFilter || experience.projectType === projectFilter;

            return companyMatch && skillsMatch && projectMatch;
        });

        this.renderExperiences();
        this.updateFilterResults();
    }

    /**
     * Clear all filters
     */
    clearFilters() {
        document.getElementById('company-filter').value = '';
        document.getElementById('skills-filter').value = '';
        document.getElementById('project-filter').value = '';

        this.currentFilters = {
            company: '',
            skills: '',
            project: ''
        };

        this.filteredExperiences = [...this.experiences];
        this.renderExperiences();
        this.updateFilterResults();
    }

    /**
     * Update filter results count
     */
    updateFilterResults() {
        const resultsCount = document.getElementById('results-count');
        const count = this.filteredExperiences.length;
        const total = this.experiences.length;
        
        if (count === total) {
            resultsCount.textContent = `Showing all ${total} experiences`;
        } else {
            resultsCount.textContent = `Showing ${count} of ${total} experiences`;
        }
    }

    /**
     * Initialize card expansion functionality
     */
    initCardExpansion() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('expand-btn')) {
                e.preventDefault();
                const card = e.target.closest('.experience-card');
                this.toggleCardExpansion(card);
            }
        });
    }

    /**
     * Toggle experience card expansion
     */
    toggleCardExpansion(card) {
        const expandBtn = card.querySelector('.expand-btn');
        const isExpanded = card.classList.contains('expanded');

        if (isExpanded) {
            card.classList.remove('expanded');
            expandBtn.classList.remove('expanded');
            expandBtn.textContent = 'View Details';
        } else {
            // Close other expanded cards
            document.querySelectorAll('.experience-card.expanded').forEach(expandedCard => {
                expandedCard.classList.remove('expanded');
                const otherBtn = expandedCard.querySelector('.expand-btn');
                otherBtn.classList.remove('expanded');
                otherBtn.textContent = 'View Details';
            });

            // Expand current card
            card.classList.add('expanded');
            expandBtn.classList.add('expanded');
            expandBtn.textContent = 'Show Less';
        }
    }

    /**
     * Initialize scroll effects
     */
    initScrollEffects() {
        // Smooth scroll for hero arrow
        const scrollArrow = document.querySelector('.scroll-arrow');
        if (scrollArrow) {
            scrollArrow.addEventListener('click', () => {
                const timelineSection = document.querySelector('.timeline-nav-section');
                timelineSection.scrollIntoView({ behavior: 'smooth' });
            });
        }

        // Intersection Observer for timeline markers
        this.initTimelineIntersectionObserver();
    }

    /**
     * Initialize intersection observer for timeline
     */
    initTimelineIntersectionObserver() {
        const experienceCards = document.querySelectorAll('.experience-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const experienceId = entry.target.dataset.experienceId;
                    const experience = this.experiences.find(exp => exp.id === parseInt(experienceId));
                    if (experience) {
                        this.updateTimelineActiveState(experience.year.toString());
                    }
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '-100px 0px -100px 0px'
        });

        experienceCards.forEach(card => {
            observer.observe(card);
        });
    }

    /**
     * Initialize accessibility features
     */
    initAccessibility() {
        // Keyboard navigation for experience cards
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Close expanded cards on Escape
                const expandedCards = document.querySelectorAll('.experience-card.expanded');
                expandedCards.forEach(card => {
                    this.toggleCardExpansion(card);
                });
            }
        });

        // Announce filter changes to screen readers
        const filterSelects = document.querySelectorAll('.filter-select');
        filterSelects.forEach(select => {
            select.addEventListener('change', () => {
                const resultsCount = document.getElementById('results-count');
                if (resultsCount) {
                    // Trigger live region update
                    resultsCount.setAttribute('aria-live', 'polite');
                }
            });
        });
    }

    /**
     * Render experience cards
     */
    renderExperiences() {
        const experienceGrid = document.querySelector('.experience-grid');
        if (!experienceGrid) return;

        experienceGrid.innerHTML = '';

        this.filteredExperiences.forEach(experience => {
            const card = this.createExperienceCard(experience);
            experienceGrid.appendChild(card);
        });

        // Re-initialize intersection observer for new cards
        this.initTimelineIntersectionObserver();
    }

    /**
     * Create experience card element
     */
    createExperienceCard(experience) {
        const card = document.createElement('article');
        card.className = 'experience-card';
        card.setAttribute('data-experience-id', experience.id);
        card.setAttribute('role', 'listitem');

        const skillsHTML = experience.skills.map(skill => 
            `<span class="skill-tag">${skill}</span>`
        ).join('');

        const achievementsHTML = experience.achievements.map(achievement => 
            `<li>${achievement}</li>`
        ).join('');

        card.innerHTML = `
            <div class="experience-header">
                <div class="company-logo">
                    ${experience.logo ? 
                        `<img src="${experience.logo}" alt="${experience.company} logo" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` : 
                        ''
                    }
                    <div class="company-logo fallback" style="${experience.logo ? 'display: none;' : ''}">${experience.logoFallback}</div>
                </div>
                <div class="experience-info">
                    <h3 class="experience-title">${experience.title}</h3>
                    <p class="company-name">${experience.company}</p>
                    <p class="experience-period">${experience.period}</p>
                </div>
            </div>
            <p class="experience-description">${experience.description}</p>
            <div class="experience-skills">
                ${skillsHTML}
            </div>
            <button class="expand-btn" aria-expanded="false" aria-controls="experience-details-${experience.id}">
                View Details
            </button>
            <div class="experience-details" id="experience-details-${experience.id}" style="display: none;">
                <h4>Achievements</h4>
                <ul>
                    ${achievementsHTML}
                </ul>
                <h4>Detailed Description</h4>
                <p>${experience.detailedDescription}</p>
            </div>
        `;

        return card;
    }

    /**
     * Render skills showcase
     */
    renderSkills() {
        const skillsGrid = document.querySelector('.skills-grid');
        if (!skillsGrid) return;

        const skillCategories = [
            {
                title: "UX Design",
                icon: "🎨",
                skills: [
                    { name: "User Research", level: 95 },
                    { name: "Wireframing", level: 90 },
                    { name: "Prototyping", level: 85 },
                    { name: "Usability Testing", level: 90 }
                ]
            },
            {
                title: "AI/ML",
                icon: "🤖",
                skills: [
                    { name: "Multi-Agent Systems", level: 85 },
                    { name: "Cursor AI", level: 90 },
                    { name: "Abacus.ai", level: 80 },
                    { name: "AI-Powered Design", level: 85 }
                ]
            },
            {
                title: "Product Management",
                icon: "📊",
                skills: [
                    { name: "Agile/Scrum", level: 85 },
                    { name: "Product Discovery", level: 90 },
                    { name: "Roadmapping", level: 80 },
                    { name: "Stakeholder Management", level: 85 }
                ]
            },
            {
                title: "Research",
                icon: "🔬",
                skills: [
                    { name: "User Testing", level: 90 },
                    { name: "Data Analysis", level: 80 },
                    { name: "Workshop Facilitation", level: 85 },
                    { name: "Design Sprints", level: 90 }
                ]
            }
        ];

        skillsGrid.innerHTML = '';

        skillCategories.forEach(category => {
            const categoryElement = document.createElement('div');
            categoryElement.className = 'skill-category';

            const skillsHTML = category.skills.map(skill => `
                <li class="skill-item">
                    <span class="skill-name">${skill.name}</span>
                    <div class="skill-level">
                        <div class="skill-level-fill" style="width: ${skill.level}%"></div>
                    </div>
                </li>
            `).join('');

            categoryElement.innerHTML = `
                <h3 class="skill-category-title">
                    <span class="skill-category-icon">${category.icon}</span>
                    ${category.title}
                </h3>
                <ul class="skill-list">
                    ${skillsHTML}
                </ul>
            `;

            skillsGrid.appendChild(categoryElement);
        });
    }
}

// Initialize the experience page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ExperiencePage();
});

// Performance optimization: Lazy load images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
});
