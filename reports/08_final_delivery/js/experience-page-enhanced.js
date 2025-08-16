/**
 * Enhanced Work Experience Page JavaScript
 * Handles timeline navigation, filtering, card expansion, and interactive features
 * Enhanced with detailed content based on comprehensive experience document
 */

class EnhancedExperiencePage {
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
        console.log('🎯 EnhancedExperiencePage: Initializing...');
        this.loadEnhancedExperiences();
        this.initTimelineNavigation();
        this.initFilterSystem();
        this.initCardExpansion();
        this.initScrollEffects();
        this.initAccessibility();
        console.log('✅ EnhancedExperiencePage: Initialization complete');
    }

    /**
     * Load and populate enhanced experience data
     */
    loadEnhancedExperiences() {
        console.log('📊 Loading enhanced experiences...');
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
                logo: "assets/experiences_images/niceToMeetYouOldLogo.png",
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
                logo: "assets/experiences_images/sopra_steria_consulting.png",
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
                logo: "assets/experiences_images/capgeminiLogo.png",
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
                logo: "assets/experiences_images/LeroyMerlinLogo.png",
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
                logo: "assets/experiences_images/image.png",
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
                logo: "assets/experiences_images/dkt.jpeg",
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
                logo: "assets/experiences_images/image.png",
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
                logo: "assets/experiences_images/image.png",
                logoFallback: "ISEN"
            }
        ];

        // Sort experiences by year (most recent first)
        this.experiences.sort((a, b) => b.year - a.year);
        
        this.filteredExperiences = [...this.experiences];
        console.log(`📊 Loaded ${this.experiences.length} enhanced experiences`);
        this.renderExperiences();
        this.renderSkills();
    }

    // ... rest of the methods remain the same as the original experience-page.js
    // (timeline navigation, filtering, card expansion, etc.)

    /**
     * Create enhanced experience card element
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

        // Get experience-specific image
        const experienceImage = this.getExperienceImage(experience.id);

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
                    <img src="${experienceImage}" alt="Project visualization" class="experience-image" loading="lazy">
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
     * Get experience-specific image from the new assets
     */
    getExperienceImage(experienceId) {
        const experienceImages = {
            1: "assets/experiences_images/airbusgroup.png", // ENSC & Airbus
            2: "assets/experiences_images/niceToMeetYouOldLogo.png", // NiceToMeetYou
            3: "assets/experiences_images/sopra_steria_consulting.png", // Sopra Steria
            4: "assets/experiences_images/capgeminiLogo.png", // Capgemini
            5: "assets/experiences_images/LeroyMerlinLogo.png", // Leroy Merlin
            6: "assets/experiences_images/image.png", // Carrefour
            7: "assets/experiences_images/dkt.jpeg", // Decathlon
            8: "assets/experiences_images/image.png", // ESSJ
            9: "assets/LOGO EID.png", // EID
            10: "assets/LOGO EID.png", // EID
            11: "assets/experiences_images/image.png" // ISEN
        };
        
        return experienceImages[experienceId] || "assets/experiences_images/image.png";
    }

    // ... rest of the methods remain the same
}

// Initialize the enhanced experience page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EnhancedExperiencePage();
});
