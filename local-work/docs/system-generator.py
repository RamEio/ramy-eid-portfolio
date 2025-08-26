#!/usr/bin/env python3
"""
Multi-Agent System Generator v5.0
Universal system creator for any project type

Created by Ramy Eid
Powered by multi-agent systems
"""

import os
import json
import shutil
from datetime import datetime
from pathlib import Path

class MultiAgentSystemGenerator:
    def __init__(self, project_name, project_type, user_requirements):
        self.project_name = project_name
        self.project_type = project_type
        self.user_requirements = user_requirements
        self.project_path = Path(project_name)
        self.timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        
    def generate_system(self):
        """Generate complete multi-agent system"""
        print(f"🚀 Generating Multi-Agent System for: {self.project_name}")
        print(f"📋 Project Type: {self.project_type}")
        print(f"⏰ Started at: {self.timestamp}")
        
        # Create project structure
        self.create_project_structure()
        
        # Generate all agents
        self.generate_agents()
        
        # Create deployment configurations
        self.create_deployment_configs()
        
        # Generate documentation
        self.generate_documentation()
        
        # Create automation scripts
        self.create_automation_scripts()
        
        print(f"✅ Multi-Agent System generated successfully!")
        print(f"📁 Project location: {self.project_path.absolute()}")
        
    def create_project_structure(self):
        """Create complete project directory structure"""
        print("📁 Creating project structure...")
        
        # Main directories
        directories = [
            "project_agents",
            "website",
            "website/css",
            "website/js",
            "website/assets",
            "reports",
            "reports/00_project_setup",
            "reports/01_design_phase",
            "reports/02_ui_phase",
            "reports/03_content_phase",
            "reports/04_product_management_phase",
            "reports/05_development_phase",
            "reports/06_security_phase",
            "reports/07_testing_phase",
            "reports/08_final_delivery",
            "docs",
            "scripts"
        ]
        
        for directory in directories:
            (self.project_path / directory).mkdir(parents=True, exist_ok=True)
            
    def generate_agents(self):
        """Generate all 15 agents with project-specific configurations"""
        print("🤖 Generating agents...")
        
        agents = [
            "project_starter.md",
            "counselor.md",
            "scribe.md",
            "designer.md",
            "graphist.md",
            "dev.md",
            "validator.md",
            "code_guardian.md",
            "manager.md",
            "cyber_secu.md",
            "tester.md",
            "seo.md",
            "benchmarker.md",
            "design_system_guardian.md",
            "multi_agent_safety.md"
        ]
        
        for agent in agents:
            self.generate_agent_file(agent)
            
    def generate_agent_file(self, agent_name):
        """Generate individual agent file with project-specific configuration"""
        agent_path = self.project_path / "project_agents" / agent_name
        
        # Read template agent content
        template_path = Path("project_agents") / agent_name
        if template_path.exists():
            with open(template_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Customize content for project
            content = self.customize_agent_content(content, agent_name)
            
            # Write customized agent
            with open(agent_path, 'w', encoding='utf-8') as f:
                f.write(content)
                
    def customize_agent_content(self, content, agent_name):
        """Customize agent content for specific project"""
        # Replace project-specific placeholders
        content = content.replace("Project v4.0", f"{self.project_name} v5.0")
        content = content.replace("Portfolio Website Project", self.project_name)
        
        # Add project-specific context
        project_context = f"""
## Project Context

This agent is part of the {self.project_name} multi-agent system, a {self.project_type} project.
Project Requirements: {self.user_requirements}

Created by Ramy Eid using multi-agent systems v5.0
Generated on: {self.timestamp}
"""
        
        # Insert project context after the main header
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if line.startswith('## Project Context'):
                lines[i] = project_context
                break
        else:
            # If no Project Context section, add it after the first section
            for i, line in enumerate(lines):
                if line.startswith('## ') and i > 0:
                    lines.insert(i, project_context)
                    break
                    
        return '\n'.join(lines)
        
    def create_deployment_configs(self):
        """Create deployment configurations for different platforms"""
        print("🌐 Creating deployment configurations...")
        
        # Netlify configuration
        netlify_config = f"""[build]
  publish = "website"
  command = "echo 'No build required'"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
"""
        
        with open(self.project_path / "website" / "netlify.toml", 'w') as f:
            f.write(netlify_config)
            
        # Vercel configuration
        vercel_config = {
            "version": 2,
            "builds": [
                {
                    "src": "website/**/*",
                    "use": "@vercel/static"
                }
            ],
            "routes": [
                {
                    "src": "/(.*)",
                    "dest": "/website/$1"
                }
            ],
            "headers": [
                {
                    "source": "/(.*)",
                    "headers": [
                        {
                            "key": "X-Frame-Options",
                            "value": "DENY"
                        },
                        {
                            "key": "X-XSS-Protection",
                            "value": "1; mode=block"
                        }
                    ]
                }
            ]
        }
        
        with open(self.project_path / "vercel.json", 'w') as f:
            json.dump(vercel_config, f, indent=2)
            
    def generate_documentation(self):
        """Generate comprehensive project documentation"""
        print("📚 Generating documentation...")
        
        # Main README
        readme_content = f"""# {self.project_name}

## 🎯 Project Overview

{self.project_name} is a {self.project_type} project created using advanced multi-agent systems methodology.

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd {self.project_name}
   ```

2. **Deploy to Netlify:**
   - Connect your repository to Netlify
   - Set build directory to `website`
   - Deploy automatically

3. **Deploy to Vercel:**
   - Connect your repository to Vercel
   - Deploy automatically

## 🏗️ Multi-Agent System

This project uses a comprehensive multi-agent system with 15 specialized agents:

- **Project Starter:** Universal project initialization
- **Counselor:** Central orchestrator and coordination
- **Designer:** UX/UI design and user experience
- **Graphist:** Visual design and brand identity
- **DEV:** Technical implementation and development
- **Validator:** User-centric validation and quality assurance
- **Code Guardian:** Code quality and performance optimization
- **Manager:** Product management and strategic planning
- **Cyber Secu:** Security assessment and protection
- **Tester:** QA/testing and quality validation
- **SEO:** Content strategy and search optimization
- **Benchmarker:** Competitive analysis and market research
- **Design System Guardian:** Design system management
- **Multi-Agent Safety:** System integrity and monitoring
- **Scribe:** Documentation and knowledge management

## 📁 Project Structure

```
{self.project_name}/
├── project_agents/          ← Multi-agent system
├── website/                 ← Deployable website
├── reports/                 ← Project documentation
├── docs/                    ← System documentation
├── scripts/                 ← Automation scripts
└── README.md               ← This file
```

## 🔧 Development

### Prerequisites
- Git
- Node.js (for development)
- Python 3.8+ (for automation scripts)

### Local Development
1. Navigate to the website directory
2. Open index.html in your browser
3. Make changes and test locally
4. Commit and push changes

## 📊 Monitoring & Analytics

The project includes comprehensive monitoring:
- Google Analytics integration
- Performance monitoring (Core Web Vitals)
- Error tracking and reporting
- Security scanning and alerts

## 🛡️ Security

- HTTPS enforcement
- Security headers configuration
- XSS protection
- Content Security Policy
- Regular security audits

## 📈 Performance

- Optimized assets and images
- Lazy loading implementation
- CDN integration
- Core Web Vitals optimization
- Mobile-first responsive design

## 🤝 Contributing

This project uses a multi-agent system for development. All changes go through:
1. **Scribe:** Documentation and tracking
2. **Designer:** UX/UI validation
3. **Counselor:** Coordination and approval
4. **DEV:** Technical implementation
5. **Validator:** User perspective validation
6. **Code Guardian:** Quality assurance

## 📄 License

Created by Ramy Eid using multi-agent systems v5.0
Generated on: {self.timestamp}

## 🆘 Support

For support and questions:
- Check the documentation in the `docs/` directory
- Review the multi-agent system reports in `reports/`
- Contact the project team

---

**Powered by Multi-Agent Systems v5.0**
**Created by Ramy Eid**
"""
        
        with open(self.project_path / "README.md", 'w', encoding='utf-8') as f:
            f.write(readme_content)
            
        # Deployment guide
        deployment_guide = f"""# Deployment Guide

## 🌐 Deployment Options

### Netlify Deployment

1. **Connect Repository:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository

2. **Configure Build Settings:**
   - Build command: `echo 'No build required'`
   - Publish directory: `website`
   - Node version: `18`

3. **Deploy:**
   - Click "Deploy site"
   - Your site will be live at `https://your-site.netlify.app`

### Vercel Deployment

1. **Connect Repository:**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your repository

2. **Configure Settings:**
   - Framework Preset: Other
   - Root Directory: `./`
   - Build Command: Leave empty
   - Output Directory: `website`

3. **Deploy:**
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

## 🔧 Custom Domain

### Netlify
1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Enter your domain
4. Configure DNS records as instructed

### Vercel
1. Go to Project settings > Domains
2. Add your domain
3. Configure DNS records as instructed

## 📊 Analytics Setup

### Google Analytics
1. Create a Google Analytics account
2. Get your Measurement ID
3. Replace `GA_MEASUREMENT_ID` in the website code
4. Verify tracking is working

### Performance Monitoring
The project includes Core Web Vitals monitoring:
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)
- Largest Contentful Paint (LCP)
- First Contentful Paint (FCP)
- Time to First Byte (TTFB)

## 🛡️ Security Configuration

### Security Headers
The deployment configurations include:
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

### SSL/HTTPS
Both Netlify and Vercel provide automatic SSL certificates.

## 📈 Performance Optimization

### Image Optimization
- Use WebP format when possible
- Implement lazy loading
- Optimize image sizes

### Code Optimization
- Minify CSS and JavaScript
- Enable gzip compression
- Use CDN for assets

## 🔄 Continuous Deployment

### Automatic Deployments
- Push to main branch triggers automatic deployment
- Preview deployments for pull requests
- Rollback capability for failed deployments

### Environment Variables
Configure environment variables in your hosting platform:
- `NODE_ENV`: production
- `GA_MEASUREMENT_ID`: Your Google Analytics ID

---

**Generated by Multi-Agent System v5.0**
**Created by Ramy Eid**
"""
        
        with open(self.project_path / "docs" / "DEPLOYMENT.md", 'w', encoding='utf-8') as f:
            f.write(deployment_guide)
            
    def create_automation_scripts(self):
        """Create automation scripts for project management"""
        print("🔧 Creating automation scripts...")
        
        # Setup script
        setup_script = f"""#!/bin/bash
# {self.project_name} Setup Script
# Generated by Multi-Agent System v5.0

echo "🚀 Setting up {self.project_name}..."

# Create necessary directories
mkdir -p website/assets
mkdir -p website/css
mkdir -p website/js

# Set up Git repository
if [ ! -d ".git" ]; then
    git init
    echo "Git repository initialized"
fi

# Create .gitignore
cat > .gitignore << EOF
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build outputs
dist/
build/

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# Temporary folders
tmp/
temp/
EOF

echo "✅ Setup complete!"
echo "📁 Project structure created"
echo "🔧 Git repository initialized"
echo "📝 .gitignore file created"
"""
        
        with open(self.project_path / "scripts" / "setup.sh", 'w') as f:
            f.write(setup_script)
            
        # Make script executable
        os.chmod(self.project_path / "scripts" / "setup.sh", 0o755)
        
        # Deploy script
        deploy_script = f"""#!/bin/bash
# {self.project_name} Deploy Script
# Generated by Multi-Agent System v5.0

echo "🚀 Deploying {self.project_name}..."

# Check if we're in the right directory
if [ ! -f "README.md" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Build and optimize assets
echo "📦 Building assets..."

# Optimize images
if command -v imagemin &> /dev/null; then
    echo "🖼️ Optimizing images..."
    imagemin website/assets/* --out-dir=website/assets/optimized
fi

# Minify CSS
if command -v cleancss &> /dev/null; then
    echo "🎨 Minifying CSS..."
    cleancss -o website/css/main.min.css website/css/*.css
fi

# Minify JavaScript
if command -v uglifyjs &> /dev/null; then
    echo "⚡ Minifying JavaScript..."
    uglifyjs website/js/*.js -o website/js/main.min.js
fi

# Commit changes
echo "📝 Committing changes..."
git add .
git commit -m "Deploy: {self.project_name} - $(date)"

# Push to repository
echo "📤 Pushing to repository..."
git push origin main

echo "✅ Deployment initiated!"
echo "🌐 Check your hosting platform for deployment status"
"""
        
        with open(self.project_path / "scripts" / "deploy.sh", 'w') as f:
            f.write(deploy_script)
            
        # Make script executable
        os.chmod(self.project_path / "scripts" / "deploy.sh", 0o755)
        
        # Backup script
        backup_script = f"""#!/bin/bash
# {self.project_name} Backup Script
# Generated by Multi-Agent System v5.0

echo "💾 Creating backup of {self.project_name}..."

# Create backup directory
BACKUP_DIR="backup_{self.project_name}_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"

# Copy project files
echo "📁 Copying project files..."
cp -r project_agents "$BACKUP_DIR/"
cp -r website "$BACKUP_DIR/"
cp -r reports "$BACKUP_DIR/"
cp -r docs "$BACKUP_DIR/"
cp -r scripts "$BACKUP_DIR/"
cp README.md "$BACKUP_DIR/"

# Create archive
echo "📦 Creating archive..."
tar -czf "$BACKUP_DIR.tar.gz" "$BACKUP_DIR"

# Clean up
rm -rf "$BACKUP_DIR"

echo "✅ Backup created: $BACKUP_DIR.tar.gz"
echo "💾 Backup size: $(du -h "$BACKUP_DIR.tar.gz" | cut -f1)"
"""
        
        with open(self.project_path / "scripts" / "backup.sh", 'w') as f:
            f.write(backup_script)
            
        # Make script executable
        os.chmod(self.project_path / "scripts" / "backup.sh", 0o755)

def main():
    """Main function to run the system generator"""
    print("🚀 Multi-Agent System Generator v5.0")
    print("Created by Ramy Eid")
    print("Powered by multi-agent systems")
    print("=" * 50)
    
    # Get project information
    project_name = input("Enter project name: ").strip()
    if not project_name:
        print("❌ Project name is required")
        return
        
    project_type = input("Enter project type (e.g., web, mobile, software, design): ").strip()
    if not project_type:
        project_type = "web"
        
    print("Enter project requirements (press Enter twice to finish):")
    requirements = []
    while True:
        line = input().strip()
        if not line and not requirements:
            continue
        if not line:
            break
        requirements.append(line)
    
    user_requirements = "\n".join(requirements) if requirements else "Standard project requirements"
    
    # Generate system
    generator = MultiAgentSystemGenerator(project_name, project_type, user_requirements)
    generator.generate_system()
    
    print("\n🎉 Multi-Agent System generated successfully!")
    print(f"📁 Project: {project_name}")
    print(f"📋 Type: {project_type}")
    print(f"⏰ Generated: {generator.timestamp}")
    print("\n📚 Next steps:")
    print("1. Navigate to the project directory")
    print("2. Run: ./scripts/setup.sh")
    print("3. Review the generated agents")
    print("4. Customize for your specific needs")
    print("5. Deploy using the provided configurations")

if __name__ == "__main__":
    main()
