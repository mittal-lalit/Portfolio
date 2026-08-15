# Lalit Mittal — AI / ML & Full-Stack Developer Portfolio

A modern, responsive portfolio website showcasing production-ready AI/ML systems, RAG workflows, LLM applications, and full-stack web applications. Built with **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

🔗 **Live Portfolio**: [lalitmittal.vercel.app](https://lalitmittal.vercel.app)  
👤 **Developer**: Lalit Mittal | B.Tech CSE (JECRC University)  
📧 **Email**: mittallalit169@gmail.com | 📱 **Phone**: +91 89555 42573  
🌐 **GitHub**: [github.com/mittal-lalit](https://github.com/mittal-lalit) | **LinkedIn**: [linkedin.com/in/lalit-mittal-727945288](https://www.linkedin.com/in/lalit-mittal-727945288/)

---

## Technical Stack

| Category | Technologies |
|----------|-------------|
| **Core Framework** | React 18, Vite |
| **Styling & UI** | Tailwind CSS 3, PostCSS, Glassmorphism, Responsive Design |
| **Animation** | Framer Motion |
| **Icons & Media** | Centralized SVG Icons, DevIcons |
| **Contact Integration** | EmailJS (with mailto fallback) |
| **Deployment** | Vercel |

---

## Featured Projects Showcase

1. **WakeGuard – Real-Time Driver Drowsiness Detection System**
   - Multi-signal detection system (MediaPipe face landmarks, EAR/MAR, solvePnP head pose) with event logging & emergency contact alerts.
   - MobileNetV2 transfer-learning CNN eye-state classifier (98.3% accuracy on 67K+ images).
   - [GitHub Repository](https://github.com/mittal-lalit/WakeGuard)

2. **AI Test Case Generation System**
   - AI system using LLMs and RAG to auto-generate test cases from requirement specs, reducing manual effort by ~60%.
   - Integrated Neo4j Knowledge Graph for requirement traceability and coverage mapping.
   - [GitHub Repository](https://github.com/mittal-lalit/graph_rag)

3. **RoomAI – AI Interior Design SaaS**
   - Full-stack AI SaaS featuring a WebGL 3D hero, real-time style morphing, JWT auth, Stripe payment gateway, and Claude/Replicate AI integration.
   - [GitHub Repository](https://github.com/mittal-lalit/RoomAI)

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm 9+

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/mittal-lalit/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Create environment file (optional for EmailJS)
cp .env.example .env.local

# 4. Start local development server
npm run dev
# Server will run at http://localhost:3000
```

### Production Build

```bash
npm run build    # Compiled output in ./dist
npm run preview  # Preview production build locally
```

---

## Updating Content

All site data is modularized inside the `src/data/` directory:

| Data File | Content Covered |
|-----------|----------------|
| `src/data/profile.js` | Name, roles, bio, summary, location, contact details, resume path |
| `src/data/experience.js` | Work experience timeline (internships, roles, tech stacks, bullets) |
| `src/data/education.js` | Academic history (degrees, institutions, CGPA/percentage, coursework) |
| `src/data/skills.js` | Technical categories (AI/ML, Web, Tools), tech stack, soft skills |
| `src/data/projects.js` | Real project showcases (title, description, tech stack, repo links) |
| `src/data/achievements.js` | Hackathons, DSA challenge milestones, club memberships |

---

## Contact Form Setup (EmailJS)

The contact form sends messages directly to EmailJS. If environment variables are omitted, it smoothly falls back to native mail client links.

To configure EmailJS:
1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Create an Email Service and Template.
3. Add the following variables to `.env.local` or Vercel Environment Variables:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxx
```

---

## Project Structure

```
├── index.html              # Root HTML & SEO Structured Data
├── public/                 # Static assets & downloadable resume.pdf
├── src/
│   ├── components/         # Navbar, Card, Footer, Centralized Icons
│   ├── data/               # profile, experience, education, skills, projects, achievements
│   ├── views/              # Home, About, Experience, Education, Skills, Projects, Achievements, Contact
│   ├── themeProvider.jsx   # Dark / Light theme context manager
│   ├── index.css           # Tailwind design tokens & custom CSS
│   ├── index.jsx           # Entry point
│   └── App.jsx             # Main Application layout
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## License

MIT © [Lalit Mittal](https://github.com/mittal-lalit)
