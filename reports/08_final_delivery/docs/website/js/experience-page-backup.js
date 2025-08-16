/**
 * BACKUP Experience Page JavaScript - Minimal Working Version
 * 
 * This is a simplified version to ensure basic functionality works
 * while we debug the main consolidated file.
 */

console.log('🚀 experience-page-backup.js: Backup script loaded!');

class SimpleExperiencePage {
    constructor() {
        console.log('🎯 SimpleExperiencePage: Constructor called');
        this.experiences = [];
        this.filteredExperiences = [];
        this.init();
    }

    init() {
        console.log('🎯 SimpleExperiencePage: Initializing...');
        this.loadBasicExperiences();
        this.renderExperiences();
        this.renderSkills();
        console.log('✅ SimpleExperiencePage: Initialization complete');
    }

    loadBasicExperiences() {
        console.log('📊 Loading basic experiences...');
        this.experiences = [
            {
                id: 1,
                title: "Research Intern - Human Factors & AI",
                company: "ENSC Bordeaux & Airbus Group",
                period: "2015",
                description: "ENSC (National School of Cognitive Engineering) - Human factors, ergonomics, computer science, robotics, cognitive sciences.",
                skills: ["Research", "AI/ML", "Java Development", "Human Factors"]
            },
            {
                id: 2,
                title: "UX/UI Designer",
                company: "NiceToMeetYou - First Web Agency",
                period: "2016 - 2017",
                description: "High-definition wireframing, co-design workshops, design sprints. Work on diverse projects (graphics, ideation, accessibility).",
                skills: ["UX Design", "UI Design", "Accessibility", "Design Sprints"]
            },
            {
                id: 3,
                title: "UX/UI Designer",
                company: "Decathlon",
                period: "2017 - 2019",
                description: "UX/UI design for mobile applications, design system, user research, accessibility, design sprints.",
                skills: ["UX Design", "UI Design", "Mobile Design", "Design Systems"]
            },
            {
                id: 4,
                title: "UX/UI Designer",
                company: "Carrefour",
                period: "2019 - 2020",
                description: "UX/UI design for mobile applications, design system, user research, accessibility, design sprints.",
                skills: ["UX Design", "UI Design", "Mobile Design", "Design Systems", "User Research"]
            },
            {
                id: 5,
                title: "UX/UI Designer",
                company: "Leroy Merlin",
                period: "2020 - 2021",
                description: "UX/UI design for mobile applications, design system, user research, accessibility, design sprints.",
                skills: ["UX Design", "UI Design", "Mobile Design", "Design Systems", "User Research"]
            },
            {
                id: 6,
                title: "UX/UI Designer",
                company: "Decathlon CSP",
                period: "2021 - 2022",
                description: "UX/UI design for mobile applications, design system, user research, accessibility, design sprints.",
                skills: ["UX Design", "UI Design", "Mobile Design", "Design Systems", "User Research"]
            },
            {
                id: 7,
                title: "UX/UI Designer",
                company: "Expertise Innovation Design",
                period: "2022 - 2023",
                description: "UX/UI design for mobile applications, design system, user research, accessibility, design sprints.",
                skills: ["UX Design", "UI Design", "Mobile Design", "Design Systems", "User Research"]
            },
            {
                id: 8,
                title: "AI-Powered Design Consultant",
                company: "Expertise Innovation Design",
                period: "2023 - Present",
                description: "AI-powered design consultant, multi-agent systems specialist, innovation strategy.",
                skills: ["AI-Powered Design", "Multi-Agent Systems", "Innovation Strategy", "UX Design", "Product Management"]
            }
        ];
        
        this.filteredExperiences = [...this.experiences];
        console.log(`📊 Loaded ${this.experiences.length} basic experiences`);
    }

    renderExperiences() {
        console.log('🎨 renderExperiences: Starting...');
        const experienceGrid = document.querySelector('.experience-grid');
        console.log('🎨 renderExperiences: Grid found:', experienceGrid);
        
        if (!experienceGrid) {
            console.error('❌ renderExperiences: Experience grid not found!');
            return;
        }

        console.log('🎨 renderExperiences: Filtered experiences count:', this.filteredExperiences.length);
        
        experienceGrid.innerHTML = '';
        
        this.filteredExperiences.forEach(experience => {
            const card = this.createBasicCard(experience);
            experienceGrid.appendChild(card);
        });
        
        console.log('✅ renderExperiences: Complete');
    }

    createBasicCard(experience) {
        const card = document.createElement('article');
        card.className = 'experience-card';
        card.setAttribute('data-experience-id', experience.id);

        const skillsHTML = experience.skills.map(skill => 
            `<span class="skill-tag">${skill}</span>`
        ).join('');

        card.innerHTML = `
            <div class="experience-header">
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
        `;

        return card;
    }

    renderSkills() {
        console.log('🎯 renderSkills: Starting...');
        const skillsContainer = document.querySelector('.skills-grid');
        console.log('🎯 renderSkills: Container found:', skillsContainer);
        
        if (!skillsContainer) {
            console.error('❌ renderSkills: Skills container not found!');
            return;
        }

        // Count skills usage
        const skillCounts = {};
        this.experiences.forEach(exp => {
            exp.skills.forEach(skill => {
                skillCounts[skill] = (skillCounts[skill] || 0) + 1;
            });
        });

        console.log('🎯 renderSkills: Skill counts:', skillCounts);

        // Define skill categories with icons
        const skillCategories = {
            'Design & UX': {
                icon: '🎨',
                skills: ['UX Design', 'UI Design', 'Design Systems', 'Mobile Design']
            },
            'Research & Analysis': {
                icon: '🔍',
                skills: ['User Research', 'Research']
            },
            'Technology & Development': {
                icon: '💻',
                skills: ['AI/ML', 'Java Development']
            },
            'Innovation & AI': {
                icon: '🤖',
                skills: ['AI-Powered Design', 'Multi-Agent Systems', 'Innovation Strategy']
            },
            'Accessibility & Process': {
                icon: '♿',
                skills: ['Accessibility', 'Design Sprints']
            },
            'Management & Strategy': {
                icon: '📊',
                skills: ['Product Management']
            }
        };

        // Generate skills showcase HTML
        const skillsHTML = Object.entries(skillCategories).map(([category, data]) => {
            const relevantSkills = data.skills.filter(skill => skillCounts[skill] > 0);
            
            if (relevantSkills.length === 0) return '';

            const skillsList = relevantSkills.map(skill => `
                <li class="skill-item">
                    <span class="skill-name">${skill}</span>
                    <span class="skill-project-count">${skillCounts[skill] || 0}</span>
                </li>
            `).join('');

            return `
                <div class="skill-category">
                    <h3 class="skill-category-title">
                        <span class="skill-category-icon">${data.icon}</span>
                        ${category}
                    </h3>
                    <ul class="skill-list">
                        ${skillsList}
                    </ul>
                </div>
            `;
        }).join('');

        skillsContainer.innerHTML = skillsHTML;
        console.log('✅ renderSkills: Complete');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 DOM Content Loaded - Initializing SimpleExperiencePage...');
    new SimpleExperiencePage();
});
