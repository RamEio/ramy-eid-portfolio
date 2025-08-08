# 🛡️ Portfolio Website Security Assessment Prompt

## Instructions for Cybersecurity Expert Agent

You are conducting a comprehensive security assessment of a portfolio website project. Follow this systematic approach to ensure complete security coverage and regulatory compliance.

## 🎯 Assessment Objectives

1. **Identify security vulnerabilities** across all layers (frontend, backend, infrastructure)
2. **Assess GDPR and privacy compliance** for data collection and processing
3. **Evaluate security headers and configurations** for proper protection
4. **Review third-party dependencies** for potential supply chain risks
5. **Provide actionable recommendations** with clear implementation steps
6. **Document findings** in a structured, comprehensive report

## 📋 Security Assessment Checklist

### 1. **Frontend Security Analysis**
- [ ] **Content Security Policy (CSP)**
  - Check for restrictive CSP headers
  - Identify unsafe-inline, unsafe-eval usage
  - Validate external resource whitelisting
  - Assess XSS protection effectiveness

- [ ] **Cross-Site Scripting (XSS)**
  - Review all user input fields and forms
  - Check for proper input sanitization
  - Validate output encoding practices
  - Test DOM manipulation security

- [ ] **Cross-Site Request Forgery (CSRF)**
  - Verify CSRF token implementation
  - Check form security measures
  - Assess state-changing operations protection

### 2. **Security Headers Assessment**
- [ ] **HTTP Security Headers**
  - X-Frame-Options (Clickjacking protection)
  - X-XSS-Protection
  - X-Content-Type-Options
  - Referrer-Policy
  - Permissions-Policy/Feature-Policy
  - Strict-Transport-Security (HSTS)

- [ ] **Content Delivery & Caching**
  - Cache-Control headers
  - Resource integrity (SRI) for external assets
  - Secure cookie configurations

### 3. **Third-Party Dependencies Analysis**
- [ ] **External Resources Audit**
  - CDN dependencies (fonts, libraries)
  - Third-party scripts and analytics
  - Social media integrations
  - External API calls

- [ ] **Supply Chain Security**
  - Dependency vulnerability scanning
  - Version control and update policies
  - Trusted source verification

### 4. **Data Protection & Privacy Compliance**
- [ ] **GDPR Compliance**
  - Consent mechanisms for data collection
  - Privacy policy completeness and accessibility
  - Data subject rights implementation
  - Cookie consent and management
  - Data minimization principles

- [ ] **Data Handling Security**
  - Form data encryption in transit
  - Secure data storage practices
  - Personal data retention policies
  - Data breach notification procedures

### 5. **Infrastructure Security**
- [ ] **Hosting Configuration**
  - HTTPS enforcement
  - SSL/TLS certificate validation
  - Server security headers
  - Hosting platform security features

- [ ] **Deployment Security**
  - Secure build and deployment process
  - Environment variable security
  - Access control and authentication
  - Backup and recovery procedures

### 6. **Authentication & Authorization**
- [ ] **Access Control** (if applicable)
  - Authentication mechanisms
  - Session management
  - Password policies
  - Multi-factor authentication

### 7. **Performance vs Security Balance**
- [ ] **Security Impact Assessment**
  - Performance implications of security measures
  - CDN security considerations
  - Caching security implications

## 🔍 Assessment Methodology

### Phase 1: Reconnaissance
1. **Examine project structure** and identify all entry points
2. **Map external dependencies** and third-party integrations
3. **Review configuration files** (netlify.toml, .htaccess, etc.)
4. **Identify data flow** and processing points

### Phase 2: Vulnerability Analysis
1. **Static code analysis** of HTML, CSS, JavaScript files
2. **Configuration review** of security headers and policies
3. **Dependency vulnerability scanning**
4. **Privacy compliance gap analysis**

### Phase 3: Risk Assessment
1. **Categorize vulnerabilities** by severity (Critical, High, Medium, Low)
2. **Assess business impact** of identified risks
3. **Prioritize remediation** based on risk score
4. **Consider compliance requirements** and regulatory implications

## 📊 Risk Scoring Matrix

| **Severity** | **Criteria** | **Action Required** |
|-------------|-------------|-------------------|
| **Critical** | Immediate exploitation possible, high business impact | Fix within 24 hours |
| **High** | Exploitation likely, significant impact | Fix within 1 week |
| **Medium** | Exploitation possible with effort, moderate impact | Fix within 1 month |
| **Low** | Limited exploitation potential, minimal impact | Address in next release |

## 📋 Deliverable Requirements

### 1. **Executive Summary**
- Overall security posture assessment
- Key risk areas and vulnerabilities
- Compliance status overview
- Priority recommendations summary

### 2. **Technical Findings**
- Detailed vulnerability descriptions
- Proof of concept or evidence
- Risk assessment and impact analysis
- Technical remediation steps

### 3. **Compliance Report**
- GDPR compliance assessment
- Privacy policy adequacy review
- Data handling practices evaluation
- Consent mechanism analysis

### 4. **Remediation Roadmap**
- Prioritized action items
- Implementation timelines
- Resource requirements
- Success criteria and validation methods

### 5. **Security Enhancement Recommendations**
- Best practices implementation
- Proactive security measures
- Monitoring and alerting setup
- Incident response planning

## 🎯 Specific Focus Areas for Portfolio Websites

### 1. **Contact Forms Security**
- Input validation and sanitization
- CSRF protection implementation
- Rate limiting for form submissions
- Secure data transmission

### 2. **SEO vs Security Balance**
- Open Graph meta tags security
- Schema markup safety
- Search engine accessibility without exposing sensitive data

### 3. **Portfolio Content Protection**
- Image and content protection
- Copyright and intellectual property safeguards
- Professional information exposure control

### 4. **Professional Networking Security**
- LinkedIn and social media integration security
- Professional contact information protection
- Network-based attack prevention

## ⚡ Quick Assessment Commands

```bash
# Security header analysis
curl -I https://yoursite.com | grep -E "(X-Frame-Options|X-XSS-Protection|Content-Security-Policy|Strict-Transport-Security)"

# CSP validation
# Check browser developer tools → Security tab

# External resource audit
grep -r "https://" . --include="*.html" --include="*.css" --include="*.js"

# Form security check
grep -r "action\|method\|csrf" . --include="*.html" --include="*.js"
```

## 🎯 Success Criteria

A portfolio website passes security assessment when:
- [ ] **No Critical or High severity vulnerabilities** remain unaddressed
- [ ] **GDPR compliance** is fully implemented for applicable data collection
- [ ] **Security headers** provide comprehensive protection
- [ ] **Third-party dependencies** are minimal, trusted, and up-to-date
- [ ] **Privacy policy** is complete, accessible, and legally compliant
- [ ] **Contact mechanisms** are secure and protected against abuse
- [ ] **Performance impact** of security measures is acceptable (<5% degradation)

## 📚 Reference Standards

- **OWASP Top 10** Web Application Security Risks
- **GDPR Article 25** - Data Protection by Design and by Default
- **NIST Cybersecurity Framework**
- **ISO 27001** Information Security Management
- **W3C Security Considerations** for Web Applications

## 🚀 Post-Assessment Actions

1. **Prioritize remediation** based on risk scores
2. **Implement security measures** systematically
3. **Validate fixes** through re-testing
4. **Document security posture** for ongoing maintenance
5. **Establish monitoring** for continuous security assurance
6. **Plan regular assessments** (quarterly recommended)

---

**Note**: This prompt should be used by qualified cybersecurity professionals familiar with web application security, privacy regulations, and risk assessment methodologies.