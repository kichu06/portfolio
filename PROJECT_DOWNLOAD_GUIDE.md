# Portfolio Project Download Guide

## Project Structure

```
portfolio-project/
├── client/
│   ├── public/
│   │   ├── nikhil-cv.pdf
│   │   └── nikhil-cover-letter.pdf
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/ (complete shadcn/ui components)
│   │   │   ├── about.tsx
│   │   │   ├── contact.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── navigation.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── services.tsx
│   │   │   └── skills.tsx
│   │   ├── hooks/
│   │   │   ├── use-intersection-observer.ts
│   │   │   ├── use-mobile.tsx
│   │   │   ├── use-smooth-scroll.ts
│   │   │   └── use-toast.ts
│   │   ├── lib/
│   │   │   ├── queryClient.ts
│   │   │   └── utils.ts
│   │   ├── pages/
│   │   │   ├── not-found.tsx
│   │   │   └── portfolio.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   └── index.html
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
├── shared/
│   └── schema.ts
├── components.json
├── drizzle.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## Setup Instructions

1. **Create a new project directory:**
   ```bash
   mkdir portfolio-project
   cd portfolio-project
   ```

2. **Initialize the project:**
   ```bash
   npm init -y
   ```

3. **Install dependencies:**
   ```bash
   npm install @hookform/resolvers @neondatabase/serverless @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip @tailwindcss/typography @tailwindcss/vite @tanstack/react-query @types/connect-pg-simple @types/express @types/express-session @types/node @types/passport @types/passport-local @types/react @types/react-dom @types/ws @vitejs/plugin-react autoprefixer class-variance-authority clsx cmdk connect-pg-simple date-fns drizzle-kit drizzle-orm drizzle-zod embla-carousel-react esbuild express express-session framer-motion input-otp lucide-react memorystore nanoid next-themes passport passport-local postcss react react-day-picker react-dom react-hook-form react-icons react-resizable-panels recharts tailwind-merge tailwindcss tailwindcss-animate tsx typescript vaul vite wouter ws zod zod-validation-error
   ```

4. **Create the directory structure**
5. **Copy all the files from the sections below**
6. **Add your actual CV and Cover Letter PDFs to client/public/**
7. **Run the development server:**
   ```bash
   npm run dev
   ```

## Key Features

- **Dark Theme**: Modern dark design with cyan accents
- **Responsive Design**: Mobile-first approach
- **File Downloads**: CV and Cover Letter download functionality
- **Contact Form**: Working contact form with backend
- **Smooth Animations**: Intersection observer animations
- **Professional Portfolio**: Complete with projects, skills, and services sections

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, Node.js
- **UI Components**: Radix UI + shadcn/ui
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with custom animations
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: TanStack Query

## Customization

To customize this portfolio for your own use:

1. **Update personal information** in all component files
2. **Replace CV and Cover Letter** files in client/public/
3. **Update projects** in client/src/components/projects.tsx
4. **Modify skills** in client/src/components/skills.tsx
5. **Update contact information** in client/src/components/contact.tsx and hero.tsx
6. **Adjust colors** in client/src/index.css