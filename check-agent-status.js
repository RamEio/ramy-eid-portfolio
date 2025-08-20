/**
 * 🔍 Multi-Agent Status Checker
 * Checks the status of all active agents in the system
 */

const fs = require('fs');
const path = require('path');

class AgentStatusChecker {
    constructor() {
        this.scribeNotesPath = path.join(__dirname, 'local-work', 'reports', '08_final_delivery', 'docs', 'scribe_notes');
    }

    /**
     * Check all agent statuses
     */
    checkAllAgents() {
        console.log('🔍 Multi-Agent System Status Check');
        console.log('=' .repeat(50));
        
        this.checkScribeStatus();
        this.checkCodeGuardianStatus();
        this.checkAgentFiles();
        this.checkRecentActivity();
        
        console.log('\n✅ Multi-Agent System Status Check Complete');
    }

    /**
     * Check Scribe Agent status
     */
    checkScribeStatus() {
        console.log('\n📝 Scribe Agent Status:');
        
        if (fs.existsSync(this.scribeNotesPath)) {
            const categories = ['changes', 'decisions', 'events', 'issues', 'analysis', 'consultations'];
            let totalNotes = 0;
            
            categories.forEach(category => {
                const categoryPath = path.join(this.scribeNotesPath, category);
                if (fs.existsSync(categoryPath)) {
                    const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.md'));
                    totalNotes += files.length;
                    console.log(`   • ${category}: ${files.length} notes`);
                } else {
                    console.log(`   • ${category}: 0 notes (directory not found)`);
                }
            });
            
            console.log(`   📊 Total notes: ${totalNotes}`);
            
            // Check recent activity
            const recentNotes = this.getRecentNotes();
            console.log(`   🕒 Recent activity: ${recentNotes.length} notes in last 24h`);
            
        } else {
            console.log('   ❌ Scribe notes directory not found');
        }
    }

    /**
     * Check Code Guardian status
     */
    checkCodeGuardianStatus() {
        console.log('\n🛡️ Code Guardian Status:');
        
        const guardianFiles = [
            'website/js/code-guardian-monitor.js',
            'website/js/code-guardian-auth.js',
            'website/js/code-guardian-fs-integration.js',
            'website/code-guardian-dashboard.html'
        ];
        
        guardianFiles.forEach(file => {
            if (fs.existsSync(file)) {
                console.log(`   ✅ ${file}`);
            } else {
                console.log(`   ❌ ${file} (missing)`);
            }
        });
        
        // Check if dashboard is accessible
        const dashboardPath = 'website/code-guardian-dashboard.html';
        if (fs.existsSync(dashboardPath)) {
            console.log('   🌐 Dashboard: Available at /code-guardian-dashboard.html');
        }
    }

    /**
     * Check agent files
     */
    checkAgentFiles() {
        console.log('\n🤖 Agent Configuration Files:');
        
        const agentFiles = [
            'local-work/project_agents/scribe.md',
            'local-work/project_agents/code_guardian.md',
            'local-work/project_agents/counselor.md',
            'local-work/project_agents/designer.md',
            'local-work/project_agents/benchmarker.md',
            'local-work/project_agents/multi_agent_safety.md'
        ];
        
        agentFiles.forEach(file => {
            if (fs.existsSync(file)) {
                const stats = fs.statSync(file);
                const sizeKB = (stats.size / 1024).toFixed(1);
                console.log(`   ✅ ${file} (${sizeKB} KB)`);
            } else {
                console.log(`   ❌ ${file} (missing)`);
            }
        });
    }

    /**
     * Check recent activity
     */
    checkRecentActivity() {
        console.log('\n🕒 Recent Activity:');
        
        const recentNotes = this.getRecentNotes();
        
        if (recentNotes.length > 0) {
            console.log('   Recent scribe notes:');
            recentNotes.slice(0, 5).forEach(note => {
                const relativePath = note.replace(this.scribeNotesPath, '');
                console.log(`   • ${relativePath}`);
            });
        } else {
            console.log('   No recent activity detected');
        }
    }

    /**
     * Get recent notes (last 24 hours)
     */
    getRecentNotes() {
        const recentNotes = [];
        const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
        
        if (!fs.existsSync(this.scribeNotesPath)) {
            return recentNotes;
        }
        
        const categories = ['changes', 'decisions', 'events', 'issues', 'analysis', 'consultations'];
        
        categories.forEach(category => {
            const categoryPath = path.join(this.scribeNotesPath, category);
            if (fs.existsSync(categoryPath)) {
                const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.md'));
                
                files.forEach(file => {
                    const filePath = path.join(categoryPath, file);
                    const stats = fs.statSync(filePath);
                    
                    if (stats.mtime > oneDayAgo) {
                        recentNotes.push(filePath);
                    }
                });
            }
        });
        
        return recentNotes.sort((a, b) => {
            const statsA = fs.statSync(a);
            const statsB = fs.statSync(b);
            return statsB.mtime - statsA.mtime;
        });
    }

    /**
     * Get system summary
     */
    getSystemSummary() {
        const summary = {
            scribe: {
                active: fs.existsSync(this.scribeNotesPath),
                notesCount: this.getTotalNotesCount(),
                recentActivity: this.getRecentNotes().length
            },
            codeGuardian: {
                active: fs.existsSync('website/js/code-guardian-monitor.js'),
                dashboard: fs.existsSync('website/code-guardian-dashboard.html')
            },
            agents: {
                total: 6,
                configured: this.getConfiguredAgentsCount()
            },
            branch: 'ux-improvements',
            lastCheck: new Date().toISOString()
        };
        
        return summary;
    }

    /**
     * Get total notes count
     */
    getTotalNotesCount() {
        if (!fs.existsSync(this.scribeNotesPath)) {
            return 0;
        }
        
        let total = 0;
        const categories = ['changes', 'decisions', 'events', 'issues', 'analysis', 'consultations'];
        
        categories.forEach(category => {
            const categoryPath = path.join(this.scribeNotesPath, category);
            if (fs.existsSync(categoryPath)) {
                const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.md'));
                total += files.length;
            }
        });
        
        return total;
    }

    /**
     * Get configured agents count
     */
    getConfiguredAgentsCount() {
        const agentFiles = [
            'local-work/project_agents/scribe.md',
            'local-work/project_agents/code_guardian.md',
            'local-work/project_agents/counselor.md',
            'local-work/project_agents/designer.md',
            'local-work/project_agents/benchmarker.md',
            'local-work/project_agents/multi_agent_safety.md'
        ];
        
        return agentFiles.filter(file => fs.existsSync(file)).length;
    }
}

// Run the status check
const checker = new AgentStatusChecker();
checker.checkAllAgents();

// Export for use in other scripts
module.exports = checker;
