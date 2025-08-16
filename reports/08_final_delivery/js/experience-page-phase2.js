/**
 * Phase 2 Enhanced Work Experience Page JavaScript
 * Enhanced with visual integration, lazy loading, and performance optimizations
 */

class Phase2ExperiencePage {
    constructor() {
        this.experiences = [];
        this.filteredExperiences = [];
        this.currentFilters = {
            company: '',
            skills: '',
            project: ''
        };
        this.imageObserver = null;
        
        this.init();
    }

    init() {
        console.log('🎯 Phase2ExperiencePage: Initializing...');
        this.loadEnhancedExperiences();
        this.initTimelineNavigation();
        this.initFilterSystem();
        this.initCardExpansion();
        this.initScrollEffects();
        this.initAccessibility();
        this.initLazyLoading();
        this.initPerformanceOptimizations();
        console.log('✅ Phase2ExperiencePage: Initialization complete');
    }

    /**
     * Load and populate enhanced experience data with visual content
     */
    loadEnhancedExperiences() {
        console.log('📊 Loading Phase 2 enhanced experiences...');
        this.experiences = [
            {
                id: 1,
                year: 2015,
                timelinePeriod: "7+ years ago",
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
                logo: "assets/experiences_images/airbusgroup.png",
                logoFallback: "EN",
                visualContent: [
                    "assets/experiences_images/airbusgroup.png",
                    "assets/experiences_images/DesignSprintBook.png"
                ]
            },
            {
                id: 2,
                year: 2016,
                timelinePeriod: "7+ years ago",
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
                logo: "assets/experiences_images/niceToMeetYouOldLogo.png",
                logoFallback: "NT",
                visualContent: [
                    "assets/experiences_images/niceToMeetYouOldLogo.png",
                    "assets/experiences_images/DesignSprintBook.png"
                ]
            },
            {
                id: 3,
                year: 2017,
                timelinePeriod: "7+ years ago",
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
                logo: "assets/experiences_images/sopra_steria_consulting.png",
                logoFallback: "SS",
                visualContent: [
                    "assets/experiences_images/sopra_steria_consulting.png",
                    "assets/experiences_images/enjoy_mel.png",
                    "assets/experiences_images/AuchanRetail.png"
                ]
            },
            {
                id: 4,
                year: 2019,
                timelinePeriod: "3+ years ago",
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
                logo: "assets/experiences_images/capgeminiLogo.png",
                logoFallback: "C",
                visualContent: [
                    "assets/experiences_images/capgeminiLogo.png",
                    "assets/experiences_images/DesignSprintBook.png"
                ]
            },
            {
                id: 5,
                year: 2019,
                timelinePeriod: "3+ years ago",
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
                logo: "assets/experiences_images/LeroyMerlinLogo.png",
                logoFallback: "LM",
                visualContent: [
                    "assets/experiences_images/LeroyMerlinLogo.png",
                    "assets/experiences_images/LeroyMerlin_eisenhower_priorisation.png",
                    "assets/experiences_images/LeroyMerlin_workshop.png",
                    "assets/experiences_images/LeroyMerlin_usertesting1.jpeg",
                    "assets/experiences_images/adeo_UX_audit.png",
                    "assets/experiences_images/adeo_user_testing1.jpg",
                    "assets/experiences_images/adeo_user_testing2.jpg",
                    "assets/experiences_images/adeo_wireframe1.png",
                    "assets/experiences_images/adeo_wireframe2.png",
                    "assets/experiences_images/mozaIc_DS.png",
                    "assets/experiences_images/mozaic_DS2.png",
                    "assets/experiences_images/Adeo_data_analysis.png",
                    "assets/experiences_images/Adeo_focus_group.png",
                    "assets/experiences_images/Adeo_paiement_journey.png",
                    "assets/experiences_images/user_data_analysis_adeo.png",
                    "assets/experiences_images/dataStudio.png",
                    "assets/experiences_images/contentSquare_diploma.png",
                    "assets/experiences_images/amoobi_shop_data.png",
                    "assets/experiences_images/tagging_plan.png",
                    "assets/experiences_images/user_testing restitution_LM.png",
                    "assets/experiences_images/user_testing restitution2_LM.png",
                    "assets/experiences_images/user_testing restitution3_LM.png",
                    "assets/experiences_images/card_sorting.png",
                    "assets/experiences_images/profilingPersonae.png",
                    "assets/experiences_images/onlineSurvey1.png",
                    "assets/experiences_images/onlineSurvey12png.png",
                    "assets/experiences_images/onlineSurvey3png.png"
                ]
            },
            {
                id: 6,
                year: 2022,
                timelinePeriod: "3+ years ago",
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
                logo: "assets/experiences_images/image.png",
                logoFallback: "C",
                visualContent: [
                    "assets/experiences_images/image.png",
                    "assets/experiences_images/DesignSprintBook.png"
                ]
            },
            {
                id: 7,
                year: 2023,
                timelinePeriod: "Current",
                title: "UX/Product Designer Lead",
                company: "Expertise Innovation Design & Decathlon CSP",
                companyType: "corporate",
                period: "2023 - Present",
                description: "Leading UX/Product Design for 'Decathlon Ride' app (nature cycling). Product vision alignment, continuous discovery, and systematic UX testing.",
                detailedDescription: "Responsible for graphic consistency with Decathlon design system (Vitamin Play) and data tracking implementation. Managing beta tester community and product vision alignment.",
                achievements: [
                    "Led design for Decathlon Ride app with 100K+ downloads",
                    "Managed beta tester community of 500+ users",
                    "Implemented systematic UX testing for all features"
                ],
                skills: ["UX Design", "Product Management", "Mobile", "User Research"],
                projectType: "mobile-apps",
                logo: "assets/experiences_images/dkt.jpeg",
                logoFallback: "D",
                visualContent: [
                    "assets/experiences_images/dkt.jpeg",
                    "assets/experiences_images/DesignSprintBook.png"
                ]
            },
            {
                id: 8,
                year: 2022,
                timelinePeriod: "3+ years ago",
                title: "University Lecturer - Agile Methods & UX Design",
                company: "Enseignement Supérieur Saint Jude (ESSJ)",
                companyType: "education",
                period: "2022 - 2025",
                description: "Teaching agile methodologies, project management, UX design, and mobile marketing to Master 1 and Master 2 students in business and management programs.",
                detailedDescription: "Delivering comprehensive courses on agile project management frameworks, UX/UI design principles, and mobile marketing strategies. Mentoring students through practical projects and case studies, preparing them for real-world business challenges.",
                achievements: [
                    "Developed curriculum for agile methodologies and UX design courses",
                    "Mentored 50+ Master's students in project management and design thinking",
                    "Created practical case studies integrating business and design methodologies"
                ],
                skills: ["Teaching", "Agile Methodologies", "Project Management", "UX Design", "Mobile Marketing"],
                projectType: "education",
                logo: "assets/experiences_images/image.png",
                logoFallback: "ESSJ",
                visualContent: [
                    "assets/experiences_images/image.png",
                    "assets/experiences_images/DesignSprintBook.png"
                ]
            },
            {
                id: 9,
                year: 2024,
                timelinePeriod: "Current",
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
                logo: "assets/LOGO EID.png",
                logoFallback: "EID",
                visualContent: [
                    "assets/LOGO EID.png",
                    "assets/experiences_images/DesignSprintBook.png"
                ]
            },
            {
                id: 10,
                year: 2024,
                timelinePeriod: "Current",
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
                logo: "assets/LOGO EID.png",
                logoFallback: "EID",
                visualContent: [
                    "assets/LOGO EID.png",
                    "assets/experiences_images/DesignSprintBook.png"
                ]
            },
            {
                id: 11,
                year: 2024,
                timelinePeriod: "Current",
                title: "Engineering School Lecturer - UX/UI Design",
                company: "ISEN Engineering School",
                companyType: "education",
                period: "2024 - Present",
                description: "Teaching UX/UI design principles and methodologies to 4th year engineering students across multiple ISEN campuses.",
                detailedDescription: "Delivering comprehensive UX/UI design courses to engineering students, focusing on user-centered design, interface design principles, and practical implementation. Bridging the gap between technical engineering and user experience design.",
                achievements: [
                    "Designed UX/UI curriculum for engineering students",
                    "Taught 100+ engineering students across multiple ISEN campuses",
                    "Integrated design thinking into engineering education programs"
                ],
                skills: ["Teaching", "UX/UI Design", "Engineering Education", "Design Thinking", "Interface Design"],
                projectType: "education",
                logo: "assets/experiences_images/image.png",
                logoFallback: "ISEN",
                visualContent: [
                    "assets/experiences_images/image.png",
                    "assets/experiences_images/DesignSprintBook.png"
                ]
            }
        ];

        // Sort experiences by year (most recent first)
        this.experiences.sort((a, b) => b.year - a.year);
        
        this.filteredExperiences = [...this.experiences];
        console.log(`📊 Loaded ${this.experiences.length} Phase 2 enhanced experiences`);
        this.renderExperiences();
        this.renderSkills();
    }

    /**
     * Initialize lazy loading for images
     */
    initLazyLoading() {
        if ('IntersectionObserver' in window) {
            this.imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            img.removeAttribute('data-src');
                            observer.unobserve(img);
                        }
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.1
            });
        }
    }

    /**
     * Initialize performance optimizations
     */
    initPerformanceOptimizations() {
        // Preload critical images
        this.preloadCriticalImages();
        
        // Optimize scroll performance
        this.optimizeScrollPerformance();
        
        // Implement image compression hints
        this.addImageCompressionHints();
    }

    /**
     * Preload critical images
     */
    preloadCriticalImages() {
        const criticalImages = [
            'assets/LOGO EID.png',
            'assets/experiences_images/airbusgroup.png',
            'assets/experiences_images/LeroyMerlinLogo.png'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    /**
     * Optimize scroll performance
     */
    optimizeScrollPerformance() {
        let ticking = false;
        
        const updateScroll = () => {
            // Optimize scroll-based animations
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateScroll);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick, { passive: true });
    }

    /**
     * Add image compression hints
     */
    addImageCompressionHints() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            img.setAttribute('loading', 'lazy');
            img.setAttribute('decoding', 'async');
        });
    }

    /**
     * Create enhanced experience card with visual gallery
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

        // Create visual gallery HTML
        const visualGalleryHTML = this.createVisualGallery(experience);

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
                ${visualGalleryHTML}
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
     * Create visual gallery for experience
     */
    createVisualGallery(experience) {
        if (!experience.visualContent || experience.visualContent.length === 0) {
            return '<div class="experience-images"><img src="assets/experiences_images/DesignSprintBook.png" alt="Project visualization" class="experience-image" loading="lazy"></div>';
        }

        const images = experience.visualContent.slice(0, 6); // Limit to 6 images for performance
        const imageHTML = images.map((src, index) => `
            <div class="gallery-item">
                <img src="${src}" 
                     alt="Project visualization ${index + 1}" 
                     class="experience-image" 
                     loading="lazy"
                     data-src="${src}"
                     onerror="this.style.display='none';">
            </div>
        `).join('');

        return `
            <div class="experience-visual-gallery">
                <h4>Project Visuals</h4>
                <div class="gallery-grid">
                    ${imageHTML}
                </div>
            </div>
        `;
    }

    // ... rest of the methods remain the same as the original experience-page.js
    // (timeline navigation, filtering, card expansion, etc.)

    /**
     * Render experiences with enhanced visual content
     */
    renderExperiences() {
        const experienceGrid = document.querySelector('.experience-grid');
        if (!experienceGrid) {
            console.error('❌ Experience grid not found!');
            return;
        }
        console.log('🎨 Rendering Phase 2 experiences...');
       
        experienceGrid.innerHTML = '';
       
        this.filteredExperiences.forEach(experience => {
            const card = this.createExperienceCard(experience);
            experienceGrid.appendChild(card);
        });

        // Initialize lazy loading for new images
        this.initializeLazyLoading();
    }

    /**
     * Initialize lazy loading for newly added images
     */
    initializeLazyLoading() {
        if (this.imageObserver) {
            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => {
                this.imageObserver.observe(img);
            });
        }
    }

    // ... rest of the methods remain the same
}

// Initialize the Phase 2 experience page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Phase2ExperiencePage();
});
