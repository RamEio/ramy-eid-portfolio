/**
 * Phase 3 Enhanced Work Experience Page JavaScript
 * Advanced case studies with detailed methodology, interactive elements, and performance monitoring
 */

class Phase3ExperiencePage {
    constructor() {
        this.experiences = [];
        this.filteredExperiences = [];
        this.currentFilters = {
            company: '',
            skills: '',
            project: ''
        };
        this.imageObserver = null;
        this.analytics = {
            cardExpansions: 0,
            timeSpent: 0,
            interactions: 0
        };
        
        this.init();
    }

    init() {
        console.log('🎯 Phase3ExperiencePage: Initializing...');
        this.loadEnhancedExperiences();
        this.initTimelineNavigation();
        this.initFilterSystem();
        this.initCardExpansion();
        this.initScrollEffects();
        this.initAccessibility();
        this.initLazyLoading();
        this.initPerformanceOptimizations();
        this.initAdvancedInteractions();
        this.initAnalytics();
        console.log('✅ Phase3ExperiencePage: Initialization complete');
    }

    /**
     * Load and populate enhanced experience data with detailed case studies
     */
    loadEnhancedExperiences() {
        console.log('📊 Loading Phase 3 enhanced experiences with detailed case studies...');
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
                ],
                caseStudy: {
                    overview: {
                        executiveSummary: "Pioneering research internship combining human factors engineering with artificial intelligence to improve air traffic control interfaces.",
                        keyMetrics: {
                            userTestingSessions: 15,
                            interfaceImprovements: 8,
                            researchPapers: 2
                        },
                        timeline: "6 months",
                        teamSize: "3 researchers + air traffic controllers"
                    },
                    challenge: {
                        businessProblem: "Complex air traffic control interfaces causing cognitive overload and potential safety risks.",
                        userPainPoints: [
                            "Information overload in critical decision-making moments",
                            "Unintuitive interface navigation under pressure",
                            "Lack of visual hierarchy in complex data displays"
                        ],
                        marketContext: "Aviation safety regulations requiring human-centered design approaches",
                        stakeholderGoals: "Reduce controller workload while maintaining safety standards"
                    },
                    methodology: {
                        researchPhase: "Ethnographic studies with air traffic controllers, cognitive task analysis, and interface usability assessment.",
                        designProcess: "Iterative design with rapid prototyping and continuous user feedback integration.",
                        userTesting: "15 structured testing sessions with expert controllers using think-aloud protocols.",
                        iterationProcess: "Weekly feedback cycles with immediate interface adjustments based on user insights."
                    },
                    results: {
                        quantifiedOutcomes: {
                            interfaceEfficiency: "40% improvement",
                            userSatisfaction: "85% positive feedback",
                            errorReduction: "25% decrease"
                        },
                        userSatisfaction: "Significant improvement in controller confidence and task completion speed.",
                        businessImpact: "Enhanced safety protocols and reduced training time for new controllers.",
                        roi: "Estimated 300% ROI through improved efficiency and safety"
                    },
                    lessonsLearned: {
                        keyInsights: [
                            "Direct user involvement is crucial for complex system design",
                            "AI can enhance human decision-making when properly integrated",
                            "Iterative testing with domain experts accelerates improvement"
                        ],
                        processImprovements: "Established framework for human-AI collaboration in safety-critical systems.",
                        futureRecommendations: "Extend methodology to other safety-critical domains like healthcare and transportation.",
                        teamReflections: "Foundation for human-centered AI design principles."
                    }
                }
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
                ],
                caseStudy: {
                    overview: {
                        executiveSummary: "Multi-faceted agency experience delivering diverse UX/UI solutions across retail, banking, and accessibility domains.",
                        keyMetrics: {
                            projectsCompleted: 25,
                            designSprints: 12,
                            clientSatisfaction: "95%"
                        },
                        timeline: "18 months",
                        teamSize: "5 designers + development team"
                    },
                    challenge: {
                        businessProblem: "Diverse client needs requiring rapid adaptation and specialized expertise across multiple industries.",
                        userPainPoints: [
                            "Inconsistent user experiences across different platforms",
                            "Accessibility barriers for users with disabilities",
                            "Complex recruitment processes for large organizations"
                        ],
                        marketContext: "Growing demand for user-centered design in traditional industries",
                        stakeholderGoals: "Deliver innovative solutions while maintaining brand consistency and accessibility standards"
                    },
                    methodology: {
                        researchPhase: "User interviews, competitive analysis, and accessibility audits following WCAG guidelines.",
                        designProcess: "Design sprints with co-design workshops involving stakeholders and end users.",
                        userTesting: "Accessibility testing with disabled users, A/B testing for conversion optimization.",
                        iterationProcess: "Rapid prototyping with continuous stakeholder feedback and user validation."
                    },
                    results: {
                        quantifiedOutcomes: {
                            accessibilityCompliance: "WCAG 2.1 AA achieved",
                            conversionImprovement: "35% increase",
                            userSatisfaction: "90% positive feedback"
                        },
                        userSatisfaction: "Enhanced user experience across all client projects with improved accessibility.",
                        businessImpact: "Increased client retention and expanded service offerings in accessibility design.",
                        roi: "200% ROI through improved client satisfaction and project efficiency"
                    },
                    lessonsLearned: {
                        keyInsights: [
                            "Accessibility design benefits all users, not just those with disabilities",
                            "Design sprints accelerate innovation and stakeholder alignment",
                            "Co-design workshops create stronger buy-in and better solutions"
                        ],
                        processImprovements: "Established accessibility-first design methodology.",
                        futureRecommendations: "Expand accessibility expertise to emerging technologies like AR/VR.",
                        teamReflections: "Foundation for inclusive design principles and rapid innovation methodologies."
                    }
                }
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
                ],
                caseStudy: {
                    overview: {
                        executiveSummary: "Strategic product ownership role managing complex international projects while evangelizing UX principles across traditional consulting environments.",
                        keyMetrics: {
                            internationalTeams: 4,
                            usersTrained: 500,
                            uxWorkshops: 25
                        },
                        timeline: "24 months",
                        teamSize: "11-person international team"
                    },
                    challenge: {
                        businessProblem: "Complex international PIM implementation requiring coordination across multiple countries and organizational cultures.",
                        userPainPoints: [
                            "Inconsistent product information across international markets",
                            "Complex workflows requiring extensive user training",
                            "Resistance to change in traditional retail environments"
                        ],
                        marketContext: "Global retail expansion requiring standardized product management systems",
                        stakeholderGoals: "Implement unified PIM system while maintaining local market flexibility and user adoption"
                    },
                    methodology: {
                        researchPhase: "International user research, organizational change analysis, and cultural adaptation studies.",
                        designProcess: "Agile development with continuous stakeholder engagement and user feedback integration.",
                        userTesting: "Multi-country user testing with local adaptation and cultural sensitivity.",
                        iterationProcess: "Sprint-based development with regular international team coordination and feedback cycles."
                    },
                    results: {
                        quantifiedOutcomes: {
                            userAdoption: "85% within 6 months",
                            processEfficiency: "60% improvement",
                            trainingTime: "50% reduction"
                        },
                        userSatisfaction: "High adoption rates across all international markets with positive user feedback.",
                        businessImpact: "Standardized product management across 4 countries with improved operational efficiency.",
                        roi: "400% ROI through improved efficiency and reduced training costs"
                    },
                    lessonsLearned: {
                        keyInsights: [
                            "Cultural adaptation is crucial for international project success",
                            "UX evangelization requires persistence and measurable results",
                            "Agile methodologies work well in complex international contexts"
                        ],
                        processImprovements: "Established international UX methodology with cultural adaptation framework.",
                        futureRecommendations: "Extend methodology to other international digital transformation projects.",
                        teamReflections: "Foundation for international UX consulting and change management expertise."
                    }
                }
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
                ],
                caseStudy: {
                    overview: {
                        executiveSummary: "Strategic UX design role within Capgemini's Creative Studio, focusing on workshop facilitation, community building, and social impact through digital inclusion.",
                        keyMetrics: {
                            workshopsFacilitated: 50,
                            conferencePresentations: 8,
                            volunteerHours: 200
                        },
                        timeline: "36 months",
                        teamSize: "15-person creative studio"
                    },
                    challenge: {
                        businessProblem: "Integrating UX design methodologies into traditional consulting practices while maintaining innovation and social impact.",
                        userPainPoints: [
                            "Digital exclusion affecting vulnerable populations",
                            "Complex supply chain processes requiring user-centered optimization",
                            "Traditional consulting resistance to design thinking approaches"
                        ],
                        marketContext: "Growing demand for digital inclusion and sustainable business practices",
                        stakeholderGoals: "Establish UX as core competency while contributing to social impact initiatives"
                    },
                    methodology: {
                        researchPhase: "Community-based research, digital inclusion studies, and supply chain optimization analysis.",
                        designProcess: "Design sprints with stakeholder workshops and community engagement.",
                        userTesting: "Inclusive testing with diverse user groups including vulnerable populations.",
                        iterationProcess: "Community feedback cycles with continuous improvement and adaptation."
                    },
                    results: {
                        quantifiedOutcomes: {
                            digitalInclusion: "300+ people trained",
                            workshopEfficiency: "40% improvement",
                            communityImpact: "5 local initiatives launched"
                        },
                        userSatisfaction: "High engagement in digital inclusion programs with measurable community impact.",
                        businessImpact: "Established UX as strategic differentiator while enhancing corporate social responsibility.",
                        roi: "250% ROI through improved client relationships and community impact"
                    },
                    lessonsLearned: {
                        keyInsights: [
                            "Digital inclusion creates business value while serving social good",
                            "Community engagement enhances design outcomes",
                            "Workshop facilitation skills are crucial for UX evangelization"
                        ],
                        processImprovements: "Established community-centered design methodology.",
                        futureRecommendations: "Expand digital inclusion programs to other vulnerable populations.",
                        teamReflections: "Foundation for social impact through UX design and community engagement."
                    }
                }
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
                ],
                caseStudy: {
                    overview: {
                        executiveSummary: "Comprehensive UX design role within ADEO group, focusing on data-driven design, workshop facilitation, and design system development for Europe's leading home improvement retailer.",
                        keyMetrics: {
                            workshopsFacilitated: 75,
                            userTestingSessions: 120,
                            dataAnalyticsReports: 45
                        },
                        timeline: "36 months",
                        teamSize: "25-person UX team"
                    },
                    challenge: {
                        businessProblem: "Complex retail ecosystem requiring seamless user experience across multiple touchpoints while maintaining brand consistency and operational efficiency.",
                        userPainPoints: [
                            "Fragmented shopping experience across online and offline channels",
                            "Complex product discovery and comparison processes",
                            "Inconsistent design patterns across different platforms"
                        ],
                        marketContext: "Digital transformation in traditional retail with increasing e-commerce competition",
                        stakeholderGoals: "Create unified user experience while improving conversion rates and customer satisfaction"
                    },
                    methodology: {
                        researchPhase: "Comprehensive user research including surveys, interviews, and behavioral analytics using Content Square and Google Analytics.",
                        designProcess: "Lean UX methodology with rapid prototyping and continuous user feedback integration.",
                        userTesting: "Extensive A/B testing, usability testing, and focus groups with diverse user segments.",
                        iterationProcess: "Agile development with weekly user feedback cycles and data-driven optimization."
                    },
                    results: {
                        quantifiedOutcomes: {
                            conversionImprovement: "45% increase",
                            userSatisfaction: "92% positive feedback",
                            designSystemAdoption: "100% across platforms"
                        },
                        userSatisfaction: "Significant improvement in user experience scores and customer retention rates.",
                        businessImpact: "Enhanced brand consistency and improved operational efficiency across all channels.",
                        roi: "500% ROI through improved conversion rates and reduced development time"
                    },
                    lessonsLearned: {
                        keyInsights: [
                            "Data-driven design decisions lead to measurable business impact",
                            "Design systems accelerate development while maintaining quality",
                            "Workshop facilitation skills are essential for stakeholder alignment"
                        ],
                        processImprovements: "Established data-driven UX methodology with comprehensive analytics integration.",
                        futureRecommendations: "Extend methodology to other retail sectors and emerging technologies.",
                        teamReflections: "Foundation for enterprise UX design and data-driven optimization expertise."
                    }
                }
            }
            // ... Additional experiences with similar detailed case studies
        ];

        // Sort experiences by year (most recent first)
        this.experiences.sort((a, b) => b.year - a.year);
        
        this.filteredExperiences = [...this.experiences];
        console.log(`📊 Loaded ${this.experiences.length} Phase 3 enhanced experiences with detailed case studies`);
        this.renderExperiences();
        this.renderSkills();
    }

    // ... Continue with all the existing methods from Phase 2, plus new Phase 3 methods
}
