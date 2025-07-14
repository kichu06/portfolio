# Portfolio Website - Replit Project Guide

## Overview

This is a modern portfolio website built with React, TypeScript, and Express.js. It features a single-page application (SPA) with a dark-themed design showcasing professional skills, projects, and contact functionality. The application uses a full-stack architecture with file-based PDF serving and contact form submission capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless)
- **Session Management**: In-memory storage with potential for database persistence

### Key Components

1. **Portfolio Components**
   - Navigation with smooth scrolling
   - Hero section with downloadable CV/Cover Letter
   - About section with achievements showcase
   - Skills section with animated progress bars
   - Projects section with live demos and GitHub links
   - Services section outlining capabilities
   - Contact form with validation and submission
   - Footer with social links

2. **UI System**
   - Complete shadcn/ui component library
   - Custom hooks for intersection observer and smooth scrolling
   - Responsive design with mobile-first approach
   - Toast notifications for user feedback
   - Form validation with error handling

3. **Backend Services**
   - Contact form API endpoint with validation
   - File download endpoints for CV and cover letter
   - Contact messages retrieval (admin functionality)
   - Request logging and error handling middleware

## Data Flow

### Contact Form Flow
1. User fills out contact form on frontend
2. Form data validated using Zod schema
3. POST request sent to `/api/contact` endpoint
4. Server validates data and stores in database
5. Success/error response sent back to client
6. Toast notification displayed to user

### File Download Flow
1. User clicks download button (CV or Cover Letter)
2. Request sent to respective download endpoint
3. Server locates file in public directory
4. File streamed to client with proper headers
5. Browser initiates download with custom filename

### Database Schema
- **Users Table**: Basic user authentication (currently unused)
- **Contact Messages Table**: Stores form submissions with timestamps
- **Schema Validation**: Drizzle-Zod integration for type-safe operations

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessible components
- **Icons**: Lucide React icons and React Icons
- **Animations**: CSS transitions and transforms
- **Date Handling**: date-fns for timestamp formatting
- **Validation**: Zod for runtime type checking
- **HTTP Client**: Fetch API with custom wrapper

### Backend Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Store**: connect-pg-simple for PostgreSQL sessions
- **Validation**: Zod for request validation
- **File Handling**: Node.js built-in modules

### Development Dependencies
- **Build**: Vite with React plugin
- **Type Checking**: TypeScript with strict mode
- **CSS Processing**: PostCSS with Autoprefixer
- **Development Tools**: Replit-specific plugins for debugging

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static files
2. **Backend Build**: esbuild bundles server code for production
3. **Database Migration**: Drizzle pushes schema changes to database
4. **Asset Handling**: Static files served from build directory

### Environment Configuration
- **Development**: Uses Vite dev server with HMR
- **Production**: Express serves static files and API routes
- **Database**: PostgreSQL connection via environment variable
- **File Storage**: Local file system for PDF storage

### Production Considerations
- Server-side rendering not implemented (SPA architecture)
- Static file serving through Express in production
- Database migrations handled through Drizzle CLI
- Environment-specific configurations for different deployment stages
- Error handling and logging for production debugging

### Key Features
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Performance**: Code splitting and lazy loading where applicable
- **Accessibility**: ARIA labels and keyboard navigation support
- **SEO**: Meta tags and semantic HTML structure
- **User Experience**: Smooth scrolling, transitions, and feedback mechanisms