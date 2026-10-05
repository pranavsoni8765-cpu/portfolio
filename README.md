# 🚀 Classy AI/ML Student & Python Developer Portfolio

A modern, classy, and responsive personal developer portfolio website built from scratch with **React 18**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

Designed specifically for an AI/ML student, Python developer, and automation enthusiast to present practical projects, academic foundation, technical skills, and achievements to recruiters in a clean, trustworthy format.

---

## 📸 Key Features

- **Dark Futuristic Aesthetic**: Slate & Obsidian palette (`#080A10`) with subtle cyan & indigo accents and glassmorphism cards.
- **Interactive AI Neural Network**: Custom, lightweight HTML5 Canvas hero visualization with floating nodes and gentle cursor physics.
- **Sticky Responsive Navigation**: Dynamic navbar that shifts appearance on scroll, tracks active sections, and includes a full mobile slide-out menu.
- **Honest & Transparent Skills**: Practical categorization (Programming, AI/ML, Automation, Web) with realistic stage badges (*Learning*, *Practicing*, *Building*, *Exploring*) instead of fake percentage bars.
- **Prominent Project Showcase**: Dedicated flagship breakdown featuring Problem statement, Engineered Solution, 4-step Architecture flow, and Python code preview.
- **Modular Project Catalog**: 5 realistic student projects with category filtering, highlights, and direct GitHub links.
- **Academic Timeline & Milestones**: Structured education and editable achievement cards (Certifications, Hackathons, Courses, Practice).
- **Recruiter Contact Section**: Validated contact form ready for Formspree / EmailJS, plus one-click email copying.
- **Resume Ready**: Accessible modal and button pre-configured with placeholder `# Add your resume URL here` and instructions to add your PDF or cloud link.
- **Zero-Config Personalization**: Change your name, links, bio, and projects inside a single file: `src/data/portfolio.js`.
- **Framer Motion Viewport Animations**: Every section animates as you scroll down with GPU-friendly reveals.
- **Desktop Custom Cursor**: Smooth center dot + expanding outer ring that reacts to buttons, links, and cards (automatically disabled on mobile/touch).
- **GPU Scroll Progress**: A sleek, spring-smoothed top progress indicator.

---

## 📁 Project Structure

```text
├── public/
│   └── resume.pdf                 <-- Drop your actual resume PDF here (optional)
├── src/
│   ├── assets/                    <-- Static assets and images
│   ├── components/
│   │   ├── AnimatedSection.jsx    <-- Framer Motion scroll-reveal container
│   │   ├── CustomCursor.jsx       <-- Desktop-only cursor with soft ring & dot
│   │   ├── HeroVisual.jsx         <-- Interactive HTML5 Canvas AI network
│   │   ├── Navbar.jsx             <-- Sticky navbar with mobile menu
│   │   ├── ResumeModal.jsx        <-- Resume download & preview dialog
│   │   ├── ScrollProgress.jsx     <-- GPU-accelerated scroll progress bar
│   │   └── SectionHeading.jsx     <-- Reusable section title component
│   ├── data/
│   │   └── portfolio.js           <-- 🌟 CENTRAL CONFIG FILE (Edit everything here)
│   ├── sections/
│   │   ├── About.jsx              <-- Recruiter-friendly bio & stats
│   │   ├── Achievements.jsx       <-- Certifications & hackathon cards
│   │   ├── Contact.jsx            <-- Validated contact form, phone & socials
│   │   ├── CurrentFocus.jsx       <-- "What I'm Building & Learning"
│   │   ├── Education.jsx          <-- B.Tech academic timeline
│   │   ├── Footer.jsx             <-- Minimal footer with back-to-top
│   │   ├── Hero.jsx               <-- Main headline & action buttons
│   │   ├── Projects.jsx           <-- Project catalog with filters
│   │   └── ProjectShowcase.jsx    <-- Flagship project deep-dive
│   ├── App.jsx                    <-- Main React application
│   ├── index.css                  <-- Global Tailwind directives & styles
│   └── main.jsx                   <-- React DOM entry point
├── index.html                     <-- SEO meta tags, title & fonts
├── tailwind.config.js             <-- Custom colors & typography
├── vite.config.js                 <-- Vite build setup (relative base path)
└── package.json                   <-- Dependencies and scripts
```

---

## 🛠️ Step 1: Running the Project Locally

### 1. Prerequisites
Make sure **Node.js** (v18 or newer) is installed.
Check by opening your terminal or PowerShell and typing:
```bash
node -v
```

### 2. Install Dependencies
Run:
```bash
npm install
```

### 3. Start the Development Server
Run:
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser. You will see your portfolio live!

### 4. Build for Production
To test the production build:
```bash
npm run build
```
This generates an optimized static bundle in the `dist/` folder.

---

## ✏️ Step 2: Personalizing Your Information

You do **not** need to touch complex code. Almost everything is controlled from one file:

👉 **`src/data/portfolioData.js`**

Open `src/data/portfolioData.js` in your editor and replace the placeholder fields:

1. **Your Name & Tagline**:
   ```javascript
   name: "Alex Doe", // Replace [YOUR NAME]
   role: "AI/ML Student | Python Developer | AI Automation Enthusiast",
   location: "Mumbai, India",
   ```

2. **Your Social Links & Email**:
   ```javascript
   email: "alex@example.com",
   socialLinks: {
     github: "https://github.com/your-username",
     linkedin: "https://linkedin.com/in/your-username",
     emailMailto: "mailto:alex@example.com"
   }
   ```

3. **Your Education**:
   ```javascript
   education: {
     degree: "B.Tech in Computer Science & Engineering",
     college: "Your University / College Name",
     timeline: "2023 - 2027",
     ...
   }
   ```

4. **Your Projects & Achievements**:
   Update `projectsList`, `featuredProject`, and `achievementsList` with your real projects, repo links, and certifications.

5. **SEO & Browser Tab Title**:
   Open `index.html` and update the `<title>` and `<meta name="description">` tags to match your name.

---

## 📄 Step 3: Adding Your Resume

1. Place your resume PDF in the `public/` folder and name it **`resume.pdf`**:
   ```text
   public/resume.pdf
   ```
2. When visitors click the **"Resume"** or **"Download Resume"** buttons, your PDF will automatically open and download!
3. Alternatively, if you prefer using a Google Drive or Notion link, simply update `resumeUrl` in `src/data/portfolioData.js`:
   ```javascript
   resumeUrl: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
   ```

---

## 🔗 Step 4: Connecting the Contact Form to Send Real Emails

The contact form in `src/sections/Contact.jsx` currently validates input and simulates a clean submission. To receive real emails for free:

### Free Option A: Formspree
1. Go to [https://formspree.io](https://formspree.io) and create a free account.
2. Create a new form and copy your form ID (e.g. `https://formspree.io/f/mqkvpzaa`).
3. In `src/sections/Contact.jsx`, replace the simulated `setTimeout` in `handleSubmit` with a `fetch`:
   ```javascript
   await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(formData)
   });
   ```

### Free Option B: Web3Forms
1. Visit [https://web3forms.com](https://web3forms.com) and get an Access Key sent to your email.
2. Send submissions directly without needing any backend server!

---

## 🌐 Step 5: Uploading to GitHub & Free Deployment

### 1. Uploading to GitHub

If you don't have Git installed yet:
- Download and install Git from [https://git-scm.com/downloads](https://git-scm.com/downloads), OR
- Download **GitHub Desktop** from [https://desktop.github.com](https://desktop.github.com) for a 1-click visual interface.

Using terminal:
```bash
# 1. Initialize git in the project root
git init

# 2. Stage all files
git add .

# 3. Create your initial commit
git commit -m "feat: complete classy portfolio website"

# 4. Create a new empty repository on github.com (e.g., 'portfolio')

# 5. Link and push to your GitHub repo
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

---

### OPTION 1: Deploy Free with Vercel (Recommended ⚡)

Vercel is the fastest and easiest way to host modern React websites with automatic HTTPS and instant CI/CD.

1. Go to [https://vercel.com](https://vercel.com) and click **Sign Up** (choose "Continue with GitHub").
2. Click **"Add New..."** -> **"Project"**.
3. Under "Import Git Repository", find your `portfolio` repository and click **Import**.
4. Vercel will automatically detect:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.
6. In ~30 seconds, your site is live at a free URL like:
   `https://portfolio-yourname.vercel.app`!
7. Whenever you commit and push updates to GitHub, Vercel will automatically redeploy your changes.

---

### OPTION 2: Deploy Free with GitHub Pages

1. Install the `gh-pages` helper package:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Open `package.json` and add these two scripts under `"scripts"`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run:
   ```bash
   npm run deploy
   ```
4. On GitHub, go to your repository **Settings** -> **Pages**:
   - Under **Source**, select **Deploy from a branch**.
   - Select branch **gh-pages** and folder **/ (root)**.
   - Click **Save**.
5. Your website will be available at:
   `https://YOUR_USERNAME.github.io/portfolio/`

---

## 📋 Checklist for Recruiters

- [x] Responsive layout tested on desktop, tablet, and mobile.
- [x] Semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- [x] Accessible form labels and focus indicators (`:focus-visible`).
- [x] Clean dark color contrast for effortless readability.
- [x] Honest skill stage indicators (no fake percentages).
- [x] 0 build errors & ultra-fast Vite bundle size.

---

## 📄 License
This project is open-source and free to customize for your own portfolio.
