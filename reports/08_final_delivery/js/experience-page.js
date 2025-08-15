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
        console.log('🎯 ExperiencePage: Initializing...');
        this.loadExperiences();
        this.initTimelineNavigation();
        this.initFilterSystem();
        this.initCardExpansion();
        this.initScrollEffects();
        this.initAccessibility();
        console.log('✅ ExperiencePage: Initialization complete');
    }

    /**
     * Load and populate experience data
     */
    loadExperiences() {
        console.log('📊 Loading experiences...');
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
                logo: "",
                logoFallback: "EN"
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
                logo: "",
                logoFallback: "NT"
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
                logo: "https://logo.clearbit.com/soprasteria.com",
                logoFallback: "SS"
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
                logo: "https://logo.clearbit.com/capgemini.com",
                logoFallback: "C"
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
                logo: "https://logo.clearbit.com/leroymerlin.fr",
                logoFallback: "LM"
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
                logo: "https://logorigine.wordpress.com/wp-content/uploads/2011/10/images-23.jpg",
                logoFallback: "C"
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
                logo: "https://www.hbs-communication.com/wp-content/uploads/2024/06/logotype-decathlon-1.png",
                logoFallback: "D"
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
                logo: "https://static.wixstatic.com/media/0e82cc_26358c9ebb7e4ab4ab67f107f3d58920~mv2.png/v1/crop/x_0,y_531,w_3334,h_2311/fill/w_642,h_446,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20carr%C3%A9%20ESSJ.png",
                logoFallback: "ESSJ"
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
                logoFallback: "EID"
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
                logoFallback: "EID"
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
                logo: "https://www.isen.fr/wp-content/uploads/2024/01/cropped-ISEN-LOGO-lettres-seules.png",
                logoFallback: "ISEN"
            }
        ];

        // Sort experiences by year (most recent first)
        this.experiences.sort((a, b) => b.year - a.year);
        
        this.filteredExperiences = [...this.experiences];
        console.log(`📊 Loaded ${this.experiences.length} experiences`);
        this.renderExperiences();
        this.renderSkills();
    }

        /**
     * Initialize integrated timeline navigation
     */
    initTimelineNavigation() {
        const timelineMarkers = document.querySelectorAll('.timeline-marker');
        
        timelineMarkers.forEach(marker => {
            marker.addEventListener('click', (e) => {
                const period = e.currentTarget.dataset.period;
                this.filterByTimelinePeriod(period);
                this.updateTimelineActiveState(period);
            });

            marker.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const period = e.currentTarget.dataset.period;
                    this.filterByTimelinePeriod(period);
                    this.updateTimelineActiveState(period);
                }
            });
        });
    }

    /**
     * Filter experiences by timeline period
     */
    filterByTimelinePeriod(period) {
        this.currentTimelinePeriod = period;
        
        // Filter experiences based on the selected period
        this.filteredExperiences = this.experiences.filter(experience => {
            if (period === 'Current') {
                // Show all experiences when "Current" is selected
                return true;
            } else if (period === '3+ years ago') {
                return experience.timelinePeriod === '3+ years ago';
            } else if (period === '7+ years ago') {
                return experience.timelinePeriod === '7+ years ago';
            }
            return true;
        });
        
        this.renderExperiencesWithAnimation();
        this.updateFilterResults();
    }

               /**
            * Scroll to specific period section
            */
           scrollToPeriod(period) {
               const targetExperiences = this.experiences.filter(exp => exp.timelinePeriod === period);
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
           updateTimelineActiveState(activePeriod) {
               const timelineMarkers = document.querySelectorAll('.timeline-marker');
               
               timelineMarkers.forEach(marker => {
                   const isActive = marker.dataset.period === activePeriod;
                   marker.setAttribute('aria-pressed', isActive.toString());
               });
           }

    /**
     * Initialize integrated filter system
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
        
        // Initialize with current period
        this.currentTimelinePeriod = 'Current';
    }

                               /**
             * Apply filters to experiences with timeline integration
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
        
                // First filter by timeline period, then by other filters
                let baseExperiences = this.experiences;
                
                // Apply timeline filter
                if (this.currentTimelinePeriod) {
                    baseExperiences = this.experiences.filter(experience => {
                        if (this.currentTimelinePeriod === 'Current') {
                            // Show all experiences when "Current" is selected
                            return true;
                        } else if (this.currentTimelinePeriod === '3+ years ago') {
                            return experience.timelinePeriod === '3+ years ago';
                        } else if (this.currentTimelinePeriod === '7+ years ago') {
                            return experience.timelinePeriod === '7+ years ago';
                        }
                        return true;
                    });
                }
        
                this.filteredExperiences = baseExperiences.filter(experience => {
                    // Company type filter
                    const companyMatch = !companyFilter || experience.companyType === companyFilter;
                    
                    // Skills filter - comprehensive matching
                    let skillsMatch = true;
                    if (skillsFilter) {
                        const filterLower = skillsFilter.toLowerCase().trim();
                        
                        // Check skills array
                        skillsMatch = experience.skills.some(skill => 
                            skill.toLowerCase().includes(filterLower) ||
                            filterLower.includes(skill.toLowerCase())
                        );
                        
                        // If not found in skills, check title, description, and detailed description
                        if (!skillsMatch) {
                            const titleLower = experience.title.toLowerCase();
                            const descLower = experience.description.toLowerCase();
                            const detailedDescLower = experience.detailedDescription ? experience.detailedDescription.toLowerCase() : '';
                            
                            skillsMatch = titleLower.includes(filterLower) || 
                                         descLower.includes(filterLower) || 
                                         detailedDescLower.includes(filterLower);
                        }
                        
                        // Handle common variations
                        if (!skillsMatch) {
                            const variations = {
                                'ux design': ['ux', 'user experience', 'user interface', 'ui/ux'],
                                'product management': ['product', 'management', 'product management'],
                                'ai/ml': ['ai', 'machine learning', 'artificial intelligence', 'ai/ml'],
                                'multi-agent systems': ['multi-agent', 'agent systems', 'multi agent']
                            };
                            
                            for (const [key, values] of Object.entries(variations)) {
                                if (filterLower.includes(key) || key.includes(filterLower)) {
                                    skillsMatch = values.some(variation => 
                                        experience.skills.some(skill => skill.toLowerCase().includes(variation)) ||
                                        experience.title.toLowerCase().includes(variation) ||
                                        experience.description.toLowerCase().includes(variation)
                                    );
                                    if (skillsMatch) break;
                                }
                            }
                        }
                    }
                    
                    // Project type filter
                    const projectMatch = !projectFilter || experience.projectType === projectFilter;
        
                    return companyMatch && skillsMatch && projectMatch;
                });
        
                this.renderExperiencesWithAnimation();
                this.updateFilterResults();
            }

    /**
     * Clear all filters and reset to current period
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

        // Reset to current period
        this.currentTimelinePeriod = 'Current';
        this.updateTimelineActiveState('Current');
        
        // Show all experiences when "Current" is selected
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
             const card = e.target.closest('.experience-card');
             if (card && !e.target.classList.contains('expand-btn')) {
                 e.preventDefault();
                 this.toggleCardExpansion(card);
             } else if (e.target.classList.contains('expand-btn')) {
                 e.preventDefault();
                 const card = e.target.closest('.experience-card');
                 this.toggleCardExpansion(card);
             }
         });
     }

     /**
      * Toggle experience card expansion with smooth animation
      */
     toggleCardExpansion(card) {
         const expandBtn = card.querySelector('.expand-btn');
         const isExpanded = card.classList.contains('expanded');
         const experienceDetails = card.querySelector('.experience-details');

         if (isExpanded) {
             // Collapse card
             card.classList.remove('expanded');
             expandBtn.classList.remove('expanded');
             expandBtn.textContent = 'View Details';
             
             // Hide details with animation
             experienceDetails.style.display = 'none';
             
             // Trigger layout recalculation for smooth animation
             setTimeout(() => {
                 this.updateCardLayout();
             }, 10);
         } else {
             // Close other expanded cards first
             document.querySelectorAll('.experience-card.expanded').forEach(expandedCard => {
                 expandedCard.classList.remove('expanded');
                 const otherBtn = expandedCard.querySelector('.expand-btn');
                 const otherDetails = expandedCard.querySelector('.experience-details');
                 otherBtn.classList.remove('expanded');
                 otherBtn.textContent = 'View Details';
                 otherDetails.style.display = 'none';
             });

             // Expand current card
             card.classList.add('expanded');
             expandBtn.classList.add('expanded');
             expandBtn.textContent = 'Show Less';
             
             // Show details with animation
             experienceDetails.style.display = 'block';
             
             // Trigger layout recalculation for smooth animation
             setTimeout(() => {
                 this.updateCardLayout();
             }, 10);
         }
     }

     /**
      * Update card layout for smooth animations
      */
     updateCardLayout() {
         const experienceGrid = document.querySelector('.experience-grid');
         if (experienceGrid) {
             // Force layout recalculation
             experienceGrid.style.display = 'none';
             experienceGrid.offsetHeight; // Trigger reflow
             experienceGrid.style.display = 'grid';
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
                const timelineSection = document.querySelector('.timeline-filter-section');
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
                               this.updateTimelineActiveState(experience.timelinePeriod);
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
            * Render experience cards with smooth animations
            */
                       renderExperiencesWithAnimation() {
                const experienceGrid = document.querySelector('.experience-grid');
                if (!experienceGrid) return;
        
                // Fade out existing cards with smoother timing
                const existingCards = experienceGrid.querySelectorAll('.experience-card');
                existingCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('fade-out');
                    }, index * 100);
                });
        
                // After fade out, update content and fade in with smoother timing
                setTimeout(() => {
                    experienceGrid.innerHTML = '';
        
                    this.filteredExperiences.forEach((experience, index) => {
                        const card = this.createExperienceCard(experience);
                        card.classList.add('fade-out'); // Start hidden
                        experienceGrid.appendChild(card);
                        
                        // Fade in with staggered delay and smoother timing
                        setTimeout(() => {
                            card.classList.remove('fade-out');
                            card.classList.add('fade-in');
                        }, index * 150);
                    });
        
                    // Re-initialize intersection observer for new cards
                    this.initTimelineIntersectionObserver();
                }, existingCards.length * 100 + 400);
            }
           
           /**
            * Render experience cards (original method for initial load)
            */
               renderExperiences() {
        const experienceGrid = document.querySelector('.experience-grid');
        if (!experienceGrid) {
            console.error('❌ Experience grid not found!');
            return;
        }
        console.log('🎨 Rendering experiences...');
       
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

         // Get random IT/design image for this experience
         const randomImage = this.getRandomITImage(experience.id);

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
                 <div class="experience-images">
                     <img src="${randomImage}" alt="Project visualization" class="experience-image" loading="lazy">
                 </div>
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
      * Get a random IT/design image from Pexels based on experience ID
      */
     getRandomITImage(experienceId) {
         const itImages = [
             // Modern tech/design workspace images
             "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
             "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
             "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
             "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
             "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
             "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
             "https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
             "https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
             "https://images.pexels.com/photos/3184343/pexels-photo-3184343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
             // UI/UX design images
             "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
             "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
             "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
             // AI/Technology images
             "https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
             "https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
             "https://images.pexels.com/photos/3184343/pexels-photo-3184343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
         ];
         
         // Use experience ID to get consistent image for each experience
         const imageIndex = (experienceId - 1) % itImages.length;
         return itImages[imageIndex];
     }

    /**
     * Render skills showcase
     */
    renderSkills() {
        const skillsGrid = document.querySelector('.skills-grid');
        if (!skillsGrid) return;

        // Count project usage for each skill
        const skillCounts = {};
        this.experiences.forEach(experience => {
            experience.skills.forEach(skill => {
                skillCounts[skill] = (skillCounts[skill] || 0) + 1;
            });
        });

        // Create skill categories based on actual skills used in experiences
        const skillCategories = [
            {
                title: "UX Design",
                icon: "🎨",
                skills: [
                    { name: "UX Design", count: skillCounts["UX Design"] || 0 },
                    { name: "User Research", count: skillCounts["User Research"] || 0 },
                    { name: "UI Design", count: skillCounts["UI Design"] || 0 },
                    { name: "Prototyping", count: skillCounts["Prototyping"] || 0 },
                    { name: "Accessibility", count: skillCounts["Accessibility"] || 0 }
                ]
            },
            {
                title: "AI/ML & Technology",
                icon: "🤖",
                skills: [
                    { name: "AI/ML", count: skillCounts["AI/ML"] || 0 },
                    { name: "Multi-Agent Systems", count: skillCounts["Multi-Agent Systems"] || 0 },
                    { name: "Java Development", count: skillCounts["Java Development"] || 0 },
                    { name: "Human Factors", count: skillCounts["Human Factors"] || 0 }
                ]
            },
            {
                title: "Product Management",
                icon: "📊",
                skills: [
                    { name: "Product Management", count: skillCounts["Product Management"] || 0 },
                    { name: "Agile", count: skillCounts["Agile"] || 0 },
                    { name: "Agile Methodologies", count: skillCounts["Agile Methodologies"] || 0 },
                    { name: "Project Management", count: skillCounts["Project Management"] || 0 },
                    { name: "Change Management", count: skillCounts["Change Management"] || 0 }
                ]
            },
            {
                title: "Education & Teaching",
                icon: "🎓",
                skills: [
                    { name: "Teaching", count: skillCounts["Teaching"] || 0 },
                    { name: "UX/UI Design", count: skillCounts["UX/UI Design"] || 0 },
                    { name: "Engineering Education", count: skillCounts["Engineering Education"] || 0 },
                    { name: "Mobile Marketing", count: skillCounts["Mobile Marketing"] || 0 }
                ]
            },
            {
                title: "Workshop & Research",
                icon: "🔬",
                skills: [
                    { name: "Workshop Facilitation", count: skillCounts["Workshop Facilitation"] || 0 },
                    { name: "Design Sprints", count: skillCounts["Design Sprints"] || 0 },
                    { name: "Data Analysis", count: skillCounts["Data Analysis"] || 0 },
                    { name: "Design Systems", count: skillCounts["Design Systems"] || 0 },
                    { name: "Design Thinking", count: skillCounts["Design Thinking"] || 0 },
                    { name: "Interface Design", count: skillCounts["Interface Design"] || 0 },
                    { name: "Research", count: skillCounts["Research"] || 0 },
                    { name: "Mobile", count: skillCounts["Mobile"] || 0 }
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
                    <span class="skill-project-count">${skill.count}</span>
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
