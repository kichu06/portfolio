# Simple Portfolio - Nikhil Nath P

A clean, simple portfolio website built with React and TypeScript.

## 🚀 Quick Start

1. **Clone/Download this folder**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
4. **Open in browser**: http://localhost:3000

## 📁 Simple Structure

```
simple-portfolio-local/
├── public/
│   ├── cv.pdf                 # Your CV file
│   └── cover-letter.pdf       # Your cover letter
├── src/
│   ├── components/
│   │   ├── Hero.tsx          # Hero/intro section
│   │   └── Contact.tsx       # Contact form & info
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Styles
├── package.json              # Dependencies
├── vite.config.ts            # Build config
└── tailwind.config.ts        # Styling config
```

## 🎨 Features

- ✅ Clean, professional design
- ✅ Dark theme
- ✅ Responsive layout
- ✅ CV/Cover letter downloads
- ✅ Contact form (frontend-only)
- ✅ Social media links
- ✅ Modern React with TypeScript
- ✅ Tailwind CSS for styling

## 🛠️ Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📝 Customization

### Update Your Information
Edit these files with your details:
- `src/components/Hero.tsx` - Name, title, description
- `src/components/Contact.tsx` - Email, phone, location
- `public/cv.pdf` - Replace with your CV
- `public/cover-letter.pdf` - Replace with your cover letter

### Change Colors
Edit `src/index.css` CSS variables:
```css
:root {
  --accent-cyan: #00bcd4;    /* Primary accent color */
  --accent-blue: #0288d1;    /* Secondary accent color */
  --success-green: #4caf50;  /* Success messages */
}
```

## 🚀 Build for Production

```bash
npm run build
```

Files will be in `dist/` folder - upload to any static hosting service.

## 📋 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 Deploy

Works with any static hosting:
- **Vercel**: Connect GitHub repo
- **Netlify**: Drag & drop build folder
- **GitHub Pages**: Upload dist folder
- **Any web hosting**: Upload dist folder

That's it! Simple and clean structure for easy local development and deployment.