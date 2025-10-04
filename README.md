# Sangamesh's Portfolio

A modern, minimal, and fully responsive portfolio website showcasing skills, projects, and experience in Full-Stack Development and AI/ML Engineering.

## ✨ Design Highlights

- **Minimal & Clean** - Focus on content with reduced visual clutter
- **Full-Width Responsive** - Adapts to any screen size (mobile to 4K)
- **Smooth Animations** - Professional fade-in effects
- **Modern Typography** - Larger fonts with better readability
- **Cyan Accent** - Name highlighted with accent color and subtle underline

## ✨ Features

### Design & UI
- **Minimal Dark Theme** - Clean dark color scheme with cyan accents
- **Full-Width Layout** - Content spans entire screen width with smart padding
- **Smooth Animations** - Fade-in effects, hover transitions, and scroll animations
- **Fully Responsive** - Perfect on mobile, tablet, desktop, and ultra-wide displays
- **Sticky Navigation** - Smart header with scroll-based background change
- **Professional Typography** - Larger fonts (3rem hero, 2.2rem sections) with better spacing

### Sections
1. **Hero Section**
   - Clean introduction with availability badge
   - Large title (3rem) with name highlighted in cyan with underline
   - Social media icons (GitHub, LinkedIn, Instagram)
   - Animated avatar with rotating gradient border
   - Two clear call-to-action buttons
   - Smooth fade-in animation on page load

2. **About Section**
   - Detailed professional bio
   - Contact information with icons
   - Quick stats card with key metrics
   - Two-column grid layout

3. **Projects Section**
   - Grid layout with 3 featured projects
   - Project cards with hover effects
   - Technology badges
   - Links to live demos and source code

4. **Skills Section**
   - Organized by categories (Frontend, Backend, AI/ML, Tools)
   - Interactive skill tags with hover effects
   - Comprehensive technology stack display

5. **Contact Section**
   - Professional contact form
   - Form validation
   - Loading states and feedback
   - Two-column layout for name/email

### Interactions
- **Mobile Menu** - Hamburger menu for mobile devices with smooth slide-down animation
- **Smooth Scrolling** - Navigation links smoothly scroll to sections with proper offset
- **Scroll to Top** - Floating button appears after scrolling 300px
- **Page Refresh** - Always starts from top of page
- **Intersection Observer** - Sections fade in as you scroll into view
- **Form Feedback** - Visual feedback with loading states on form submission
- **Hover Effects** - Interactive elements respond with smooth transitions
- **Active Nav Links** - Current section highlighted in navigation

## 🚀 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)** - Vanilla JS for interactivity
- **Responsive Design** - Mobile-first approach

## 📱 Responsive Design

- **Ultra-wide/4K**: Full width with 80px padding
- **Desktop**: 920px and above - optimal spacing and layout
- **Mobile**: Below 920px - 20px padding, single column layout
- **All sizes**: Content adapts fluidly to any screen size

## 🎨 Color Palette

- **Background**: `#071126` - `#071728` (gradient)
- **Card Background**: Semi-transparent white overlays
- **Accent**: `#06b6d4` (Cyan)
- **Text**: `#e6eef8` (Light gray)
- **Muted**: `#9aa6b2` (Medium gray)

## 📝 Customization Guide

### Update Personal Information
1. Edit `index.html`:
   - Update name, bio, and contact details
   - Replace project information
   - Update social media links
   - Add your own skills

### Add Your Projects
Replace the placeholder projects in the Projects section with your own:
```html
<article class="project">
  <img src="your-project-image.jpg" alt="Project description">
  <div class="pd">
    <h3>Your Project Name</h3>
    <p>Project description...</p>
    <div class="badges">
      <div class="badge">Tech 1</div>
      <div class="badge">Tech 2</div>
    </div>
    <div style="margin-top:12px;display:flex;gap:8px">
      <a class="btn-outline" href="live-url" target="_blank">Live Demo</a>
      <a class="btn" href="github-url" target="_blank">View Code</a>
    </div>
  </div>
</article>
```

### Add Profile Image
Place your profile image in an `images` folder and update the path:
```html
<img class="avatar" src="images/your-photo.png" alt="Your name">
```

### Update Email
Replace `sangamesh123ragam@gmail.com` in both:
- `index.html` (About section)
- `script.js` (Contact form handler)

### Add Resume
Add your resume PDF to the project folder and ensure the path is correct:
```html
<a href="resume.pdf" download>Resume</a>
```

## 🔧 Optional Enhancements

### Enable Typing Effect
Uncomment the typing effect code at the bottom of `script.js` for an animated hero title.

### Add More Projects
Copy the project article structure and add more projects to the grid.

### Integrate Contact Form API
Replace the `mailto` functionality in `script.js` with an actual form submission API (e.g., Formspree, EmailJS, or your own backend).

## 📦 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # Interactive functionality
├── README.md          # Documentation (this file)
├── images/
│   └── sangu.png      # Profile image
└── resume.pdf         # Resume (add your own)
```

## 🌐 Deployment

This portfolio is ready to deploy to:
- **GitHub Pages** - Push to a GitHub repo and enable Pages
- **Netlify** - Drag and drop the folder or connect to Git
- **Vercel** - Deploy with a single command
- **Any Static Host** - Upload the files to any web hosting service

## 📄 License

Feel free to use this template for your own portfolio. No attribution required, but appreciated!

## 🙏 Credits

Designed and developed by Sangamesh
