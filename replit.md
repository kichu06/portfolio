# replit.md

## Overview

This is a modern portfolio website built with React and TypeScript, featuring a clean, dark-themed design. The application serves as a personal portfolio for Nikhil Nath P, a Frontend Developer with 2+ years of experience. The site includes a hero section with personal information and a contact form, all styled with a modern dark aesthetic using Tailwind CSS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

This is a client-side React application with a simple static structure. The application uses modern React patterns with TypeScript for type safety and Tailwind CSS for styling. The architecture is straightforward and focuses on presentation rather than complex data management.

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite for fast development and building
- **Component Structure**: Functional components with hooks
- **State Management**: Local React state (useState) for form handling

### File Structure
```
src/
├── components/
│   ├── hero-frontend.tsx    # Hero section with personal info and download buttons
│   └── contact-frontend.tsx # Contact form and information
├── App.tsx                  # Main application component
├── main.tsx                 # Application entry point
└── index.css               # Global styles and CSS variables
```

## Key Components

### Hero Section (`hero-frontend.tsx`)
- Displays personal information and professional title
- Includes download buttons for CV and cover letter
- Features social media links
- Uses gradient backgrounds and animations

### Contact Section (`contact-frontend.tsx`)
- Contact form with validation
- Displays contact information with icons
- Form submission simulation (frontend-only)
- Success/error state management

### Styling System
- Custom CSS variables for consistent theming
- Dark color scheme with cyan/blue accents
- Responsive design using Tailwind CSS
- Custom gradient backgrounds

## Data Flow

The application follows a simple unidirectional data flow:
1. User interactions trigger state updates via useState hooks
2. Form data is managed locally in component state
3. Form submission is simulated with setTimeout (no backend integration)
4. Success/error states are managed locally and reset automatically

## External Dependencies

### UI Libraries
- **Radix UI**: Comprehensive set of accessible UI components
- **Lucide React**: Icon library for modern icons
- **React Icons**: Additional icon sets (Font Awesome icons)

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: For component variants
- **clsx**: For conditional class names

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and enhanced developer experience
- **ESLint/TSC**: Code quality and type checking

### Backend Dependencies (Currently Unused)
The project includes backend-related dependencies that are not currently utilized:
- Express.js framework
- Drizzle ORM
- Neon Database serverless
- Authentication libraries

## Deployment Strategy

### Build Process
- **Development**: `npm run dev` - Uses Vite dev server with hot reloading
- **Build**: `npm run build` - Vite builds the client-side application
- **Production**: Static files served from `dist/public`

### Environment Configuration
- Development environment includes Replit-specific plugins
- Production build excludes development-only features
- Environment variables control build behavior

### File Structure for Deployment
```
dist/
└── public/          # Built client-side application
    ├── index.html
    ├── assets/       # Bundled CSS and JS
    └── cv.pdf        # Static assets (CV, cover letter)
```

## Notes

- The application is currently frontend-only with simulated backend functionality
- Contact form submissions are handled locally without server integration
- CV and cover letter downloads expect PDF files in the public directory
- The project structure suggests preparation for full-stack development but currently serves as a static portfolio site
- Backend dependencies are included but not actively used in the current implementation