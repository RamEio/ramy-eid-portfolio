# 🎨 Wireframe Package - Ramy Eid Portfolio

## Wireframe Descriptions & Annotations

### 1. Homepage Wireframe (home.png)

**Layout Structure:**
- **Header (Top 80px):** Logo left, navigation center, CTA button right
- **Hero Section (Full viewport height):** Background image, centered content block
- **Intro Section (2/3 viewport):** Text block with bio, experience highlight
- **Project Preview (1/2 viewport):** 3 project cards in grid
- **Footer (200px):** Contact info, social links

**Annotations:**
1. **Logo Area:** Placeholder for LOGO EID.png, clickable home link
2. **Navigation:** 5 menu items (Home, Projects, Experience, About, Contact)
3. **Hero CTA:** "View My Work" button, prominent placement
4. **Intro Text:** "10+ years in retail design" headline, bio paragraph
5. **Project Cards:** 3 cards showing latest projects with hover states
6. **Contact CTA:** "Get In Touch" button in footer

**Responsive Notes:**
- Mobile: Stacked layout, hamburger menu
- Tablet: Side-by-side project cards
- Desktop: Full grid layout

---

### 2. Projects Page Wireframe (projects.png)

**Layout Structure:**
- **Header:** Same navigation as home
- **Page Title:** "My Work" with subtitle
- **Filter Bar:** Year, category, type filters
- **Project Grid:** 3x2 grid of project cards
- **Load More:** Pagination or load more button

**Annotations:**
1. **Filter Controls:** Dropdown menus for year, category, project type
2. **Project Cards:** Image, title, description, tags, view button
3. **Card Interactions:** Hover to show details, click to expand
4. **Grid Layout:** Responsive grid, 3 columns desktop, 2 tablet, 1 mobile
5. **View Details:** Modal or new page for full project view

**Functional Specs:**
- Filter by year (2020-2024)
- Filter by category (Retail, UX, UI, Strategy)
- Filter by type (Web, Mobile, Physical, Research)
- Hover states show project details
- Click opens full project view

---

### 3. Experience Timeline Page Wireframe (experience.png)

**Layout Structure:**
- **Header:** Same navigation
- **Page Title:** "My Journey" with subtitle
- **Timeline:** Vertical timeline with milestones
- **Year Filters:** Quick jump to specific years
- **Detail Panels:** Expandable project details

**Annotations:**
1. **Timeline Line:** Vertical line connecting all milestones
2. **Milestone Cards:** Year, company, role, achievements
3. **Year Filters:** Clickable year buttons for quick navigation
4. **Detail Panels:** Expandable sections for each role
5. **Achievement Lists:** Bullet points of key accomplishments
6. **Skills Tags:** Visual tags for skills used in each role

**User Flow:**
- Scroll through timeline chronologically
- Click year filters for quick navigation
- Expand milestone cards for detailed view
- See skills and achievements for each role

---

### 4. About Page Wireframe (about.png)

**Layout Structure:**
- **Header:** Same navigation
- **Hero Section:** Personal photo with intro text
- **Bio Section:** Professional background and story
- **Hobbies Section:** Grid of hobby highlights
- **Skills Section:** Visual skill representation
- **Contact CTA:** Call-to-action section

**Annotations:**
1. **Personal Photo:** Profile picture with professional styling
2. **Bio Text:** Professional story, 10+ years experience
3. **Hobby Cards:** 5 cards (Drone, Piloting, Horse Riding, YouTube, Photography)
4. **Skill Visualization:** Progress bars or skill tags
5. **Contact CTA:** "Let's Work Together" button
6. **Social Links:** LinkedIn, email, other platforms

**Content Structure:**
- Professional background and expertise
- Personal interests and hobbies
- Skills and specializations
- Contact information and social links

---

### 5. Contact Page Wireframe (contact.png)

**Layout Structure:**
- **Header:** Same navigation
- **Page Title:** "Get In Touch" with subtitle
- **Contact Form:** Main form section
- **Contact Info:** Alternative contact methods
- **Social Links:** Professional social media
- **Map/Location:** Optional location information

**Annotations:**
1. **Contact Form:** Name, email, subject, message fields
2. **Form Validation:** Required field indicators, error messages
3. **Submit Button:** "Send Message" with loading state
4. **Contact Info:** Email, LinkedIn, phone (if available)
5. **Social Links:** LinkedIn, professional platforms
6. **Success Message:** Confirmation after form submission

**Form Fields:**
- Name (required)
- Email (required, validation)
- Subject (required)
- Message (required, minimum 10 characters)
- Submit button with loading state

---

## Component Specifications

### Navigation Components
- **Logo:** LOGO EID.png, clickable home link
- **Menu Items:** 5 items with hover states
- **Mobile Menu:** Hamburger icon, slide-out menu
- **CTA Button:** "Contact" in header

### Hero Components
- **Background Image:** Professional photo from Pexels
- **Content Block:** Centered text with CTA
- **Intro Text:** Professional bio and experience
- **CTA Buttons:** Primary and secondary actions

### Project Components
- **Project Cards:** Image, title, description, tags
- **Gallery Grid:** Responsive 3x2 grid layout
- **Filter Controls:** Dropdown menus for filtering
- **Detail Modal:** Full project view with images

### Timeline Components
- **Timeline Line:** Vertical line connecting milestones
- **Milestone Cards:** Year, role, company, achievements
- **Year Filters:** Quick navigation buttons
- **Detail Panels:** Expandable role descriptions

### Contact Components
- **Contact Form:** 4 fields with validation
- **Contact Info:** Email and LinkedIn display
- **Social Links:** Professional platform links
- **Success Message:** Form submission confirmation

---

## Accessibility Requirements

### Keyboard Navigation
- All interactive elements keyboard accessible
- Tab order: Logo → Menu → Content → CTAs → Footer
- Focus indicators visible on all interactive elements

### Screen Reader Support
- Semantic HTML structure
- ARIA labels for all interactive elements
- Alt text for all images
- Form field labels and error messages

### Color Contrast
- Minimum 4.5:1 ratio for normal text
- Minimum 3:1 ratio for large text
- Focus indicators meet contrast requirements

---

## Responsive Breakpoints

### Mobile (320px - 767px)
- Stacked layout for all sections
- Hamburger menu for navigation
- Single column for project cards
- Full-width forms and content

### Tablet (768px - 1023px)
- Side-by-side layouts where appropriate
- 2-column project grid
- Expanded navigation menu
- Optimized touch targets

### Desktop (1024px+)
- Full grid layouts
- Hover states and interactions
- Multi-column content sections
- Enhanced visual hierarchy

---

**Wireframe Package Status:** ✅ Complete and ready for Graphist handoff 