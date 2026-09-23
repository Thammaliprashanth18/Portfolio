# Prashanth - Personal Portfolio Website (CSE – AI & ML)

A modern, high-performance developer portfolio website built specifically for a Computer Science & Engineering student specializing in **Artificial Intelligence and Machine Learning**.

---

## 🚀 Quick Start

### 1. Install Dependencies
Open this folder in VS Code or your terminal and run:
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production (Deploy to Vercel / Netlify / GitHub Pages)
```bash
npm run build
```
The optimized production build is output to the `dist/` directory.

---

## 📁 Project Structure

```
Prashanth-Portfolio/
├── index.html              # HTML entrypoint with SEO meta tags & Inter fonts
├── package.json            # React 18, Vite, Tailwind CSS, Framer Motion, React Icons
├── tailwind.config.js      # Tailwind configuration with class-based Dark Mode
├── vite.config.ts          # Vite configuration
├── public/
│   └── resume.pdf          # Your resume PDF for the "Download Resume" button
├── src/
│   ├── assets/
│   │   └── profile.jpg     # Your profile photo (replace anytime)
│   ├── data/
│   │   └── portfolioData.js # Central configuration (edit text, links, projects here!)
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky navbar with dark/light mode toggle & mobile menu
│   │   ├── Hero.jsx        # Floating profile, role typing cycler, CTAs
│   │   ├── About.jsx       # About narrative & 6 core technical interests
│   │   ├── Skills.jsx      # Categorized skill cards (no progress bars)
│   │   ├── Projects.jsx    # 4 featured projects with filter tabs & links
│   │   ├── Education.jsx   # Vertical timeline for B.Tech CSE (AI & ML)
│   │   ├── Certifications.jsx # 5 editable certification cards
│   │   ├── Experience.jsx  # Recruiter focus banner & open source initiatives
│   │   ├── Achievements.jsx# Hackathon, competitive coding & academic honors
│   │   ├── Contact.jsx     # Responsive contact form & social links
│   │   └── Footer.jsx      # Clean footer with quick links & back-to-top button
│   ├── App.jsx             # Theme manager & layout composition
│   ├── main.jsx            # React 18 createRoot mounting
│   └── index.css           # Tailwind directives, custom scrollbars & transitions
└── dist/                   # Ready-to-deploy pre-built static site
```

---

## 🎨 How to Customize

1. **Update Links & Personal Info**:
   Open `src/data/portfolioData.js` to change your email, GitHub link, LinkedIn link, education details, CGPA, or add new projects.
2. **Change Profile Photo**:
   Drop any photo named `profile.jpg` into `src/assets/profile.jpg`.
3. **Change Resume**:
   Drop your updated PDF named `resume.pdf` into `public/resume.pdf`.

---

## 🌟 Tech Stack
- **React.js 18**
- **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion**
- **React Icons**
