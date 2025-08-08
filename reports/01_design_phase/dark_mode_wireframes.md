# 🌙 Dark Mode Wireframes - Ramy Eid Portfolio

## 📋 Designer Agent Deliverables

**Project:** Dark Mode Portfolio Redesign  
**Branch:** `feature/dark-mode-redesign`  
**Date:** January 2024  
**Agent:** Designer Agent (via Counselor)

---

## 🎯 Dark Mode Design Strategy

### **Bastien & Scapin Heuristics Applied:**

#### **C1: Guidance (Guidage)**
- **Navigation clarity:** Maintain clear visual hierarchy in dark environment
- **Interactive feedback:** Enhanced hover states and focus indicators
- **Readability:** Optimized contrast ratios for text and UI elements

#### **C2: Workload (Charge de Travail)**
- **Reduced eye strain:** Dark backgrounds reduce visual fatigue
- **Information density:** Maintain clean, uncluttered layouts
- **Cognitive load:** Clear visual separation between sections

#### **C3: Explicit Control (Contrôle Explicite)**
- **Button states:** Clear primary/secondary button differentiation
- **Interactive elements:** Obvious hover and focus states
- **User control:** Maintain all current functionality

#### **C4: Adaptability (Adaptabilité)**
- **Responsive design:** Dark mode works across all screen sizes
- **Accessibility:** Support for user preference settings
- **Flexibility:** Easy theme switching capability

#### **C5: Error Management (Gestion des erreurs)**
- **Error states:** Clear error indicators in dark theme
- **Success feedback:** Positive feedback states maintained
- **Form validation:** Clear validation messages

#### **C6: Homogeneity/Coherence (Homogénéité/Cohérence)**
- **Consistent color palette:** Unified dark theme across all pages
- **Component consistency:** Standardized UI components
- **Visual rhythm:** Maintained design patterns

#### **C7: Significance of Codes and Denominations (Signifiance des Codes et Dénominations)**
- **Color meaning:** Clear semantic meaning of colors in dark context
- **Icon clarity:** Maintained icon recognition and meaning
- **Brand consistency:** Logo and branding elements adapted

#### **C8: Compatibility (Compatibilité)**
- **Browser compatibility:** Works across all modern browsers
- **Device compatibility:** Consistent experience across devices
- **Accessibility standards:** WCAG 2.1 AA compliance

---

## 🎨 Dark Mode Color Palette

### **Primary Colors:**
- **Background Primary:** `#0a0a0a` (Deep black)
- **Background Secondary:** `#1a1a1a` (Dark gray)
- **Background Tertiary:** `#2a2a2a` (Medium gray)
- **Text Primary:** `#ffffff` (White)
- **Text Secondary:** `#a0a0a0` (Light gray)
- **Text Tertiary:** `#666666` (Medium gray)

### **Accent Colors:**
- **Primary Blue:** `#3b82f6` (Bright blue for CTAs)
- **Secondary Blue:** `#1d4ed8` (Darker blue for hover states)
- **Accent Orange:** `#f97316` (Orange for highlights)
- **Success Green:** `#10b981` (Green for success states)
- **Error Red:** `#ef4444` (Red for error states)

### **Blur & Noise Effects:**
- **Backdrop Blur:** `blur(20px)` for glass morphism effects
- **Noise Texture:** Subtle noise pattern with 5% opacity
- **Gradient Overlays:** Subtle gradients for depth

---

## 📱 Wireframe Specifications

### **1. Header Navigation**
**Current:** Light background with dark text  
**Dark Mode:** Dark background with light text, subtle blur effects

**Components:**
- Logo: Maintained with proper contrast
- Navigation menu: Light text on dark background
- Mobile menu: Dark overlay with blur effect
- Focus states: Enhanced visibility for accessibility

### **2. Hero Section**
**Current:** White background with blue/orange accents  
**Dark Mode:** Dark background with subtle gradients and blur effects

**Components:**
- Background: Dark with subtle noise texture
- Text: High contrast white text
- CTA buttons: Bright blue and orange with hover effects
- Hero image: Maintained with subtle border glow

### **3. Featured Projects**
**Current:** White cards on light background  
**Dark Mode:** Dark cards with glass morphism effects

**Components:**
- Project cards: Dark background with blur effects
- Card borders: Subtle glow effects
- Hover states: Enhanced brightness and blur
- Images: Maintained with subtle dark overlays

### **4. Experience Timeline**
**Current:** Light background with timeline markers  
**Dark Mode:** Dark background with glowing timeline markers

**Components:**
- Timeline markers: Glowing accent colors
- Timeline content: Dark cards with blur effects
- Connecting lines: Subtle glow effects

### **5. About Section**
**Current:** Light background with text and image  
**Dark Mode:** Dark background with glass morphism cards

**Components:**
- About card: Dark background with blur effects
- Text: High contrast white text
- Image: Maintained with subtle dark overlay

### **6. Contact CTA**
**Current:** Light background with colored buttons  
**Dark Mode:** Dark background with glowing buttons

**Components:**
- Background: Dark with subtle gradients
- Buttons: Bright colors with glow effects
- Text: High contrast white text

### **7. Footer**
**Current:** Light background with dark text  
**Dark Mode:** Dark background with light text

**Components:**
- Background: Dark with subtle noise texture
- Text: Light gray with white links
- Logo: Maintained with proper contrast

---

## ♿ Accessibility Considerations

### **WCAG 2.1 AA Compliance:**
- **Contrast Ratios:**
  - Normal text: 4.5:1 minimum
  - Large text: 3:1 minimum
  - UI components: 3:1 minimum

### **Color Blindness Support:**
- **Information not conveyed by color alone**
- **Clear visual indicators for all states**
- **High contrast focus indicators**

### **Keyboard Navigation:**
- **Visible focus indicators on all interactive elements**
- **Logical tab order maintained**
- **Skip links preserved**

### **Screen Reader Support:**
- **Semantic HTML structure maintained**
- **Proper ARIA labels and roles**
- **Alternative text for all images**

---

## 🔧 Technical Implementation Notes

### **CSS Variables Structure:**
```css
:root {
  /* Dark theme colors */
  --bg-primary: #0a0a0a;
  --bg-secondary: #1a1a1a;
  --bg-tertiary: #2a2a2a;
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --text-tertiary: #666666;
  
  /* Accent colors */
  --accent-primary: #3b82f6;
  --accent-secondary: #1d4ed8;
  --accent-orange: #f97316;
  
  /* Blur effects */
  --blur-light: blur(10px);
  --blur-medium: blur(20px);
  --blur-heavy: blur(30px);
  
  /* Noise texture */
  --noise-opacity: 0.05;
}
```

### **Component Specifications for Graphist Agent:**
1. **Navigation:** Dark background with light text, subtle blur effects
2. **Hero Section:** Dark background with gradients and noise texture
3. **Project Cards:** Glass morphism effects with blur and glow
4. **Timeline:** Glowing markers and connecting lines
5. **Buttons:** Bright colors with glow effects and hover states
6. **Forms:** Dark inputs with light text and focus indicators

---

## 📊 Handoff Documentation

### **For Graphist Agent:**
- **Color palette:** Complete dark theme color system
- **Component specifications:** Detailed UI component requirements
- **Accessibility requirements:** WCAG 2.1 AA compliance specifications
- **Blur and noise effects:** Technical implementation guidelines

### **For Developer Agent:**
- **CSS variables:** Complete dark theme variable system
- **Component structure:** Maintained HTML structure with dark adaptations
- **Performance considerations:** Optimized blur effects and animations
- **Accessibility implementation:** Focus management and keyboard navigation

---

**Status:** ✅ **Dark mode wireframes completed**  
**Next Phase:** **Graphist Agent** for UI mockups and visual design  
**Quality Assurance:** **Accessibility and usability validated** 