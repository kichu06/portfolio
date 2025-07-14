# Complete Portfolio Project Files

## Quick Setup Instructions

1. **Run the setup script:** `bash setup-project.sh`
2. **Install dependencies:** `npm install`
3. **Copy all files below to their respective locations**
4. **Add your CV and Cover Letter PDFs to client/public/**
5. **Run:** `npm run dev`

---

## FILE: client/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nikhil Nath P - Frontend Developer</title>
    <meta name="description" content="Frontend Developer specializing in Vue.js and React.js with 2+ years of experience building scalable web applications." />
    <meta property="og:title" content="Nikhil Nath P - Frontend Developer" />
    <meta property="og:description" content="Frontend Developer specializing in Vue.js and React.js with 2+ years of experience." />
    <meta property="og:type" content="website" />
  </head>
  <body class="dark">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## FILE: client/src/main.tsx

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

---

## FILE: client/src/App.tsx

```tsx
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Portfolio from "@/pages/portfolio";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
```

---

## FILE: client/src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: hsl(0, 0%, 100%);
  --foreground: hsl(20, 14.3%, 4.1%);
  --muted: hsl(60, 4.8%, 95.9%);
  --muted-foreground: hsl(25, 5.3%, 44.7%);
  --popover: hsl(0, 0%, 100%);
  --popover-foreground: hsl(20, 14.3%, 4.1%);
  --card: hsl(0, 0%, 100%);
  --card-foreground: hsl(20, 14.3%, 4.1%);
  --border: hsl(20, 5.9%, 90%);
  --input: hsl(20, 5.9%, 90%);
  --primary: hsl(207, 90%, 54%);
  --primary-foreground: hsl(211, 100%, 99%);
  --secondary: hsl(60, 4.8%, 95.9%);
  --secondary-foreground: hsl(24, 9.8%, 10%);
  --accent: hsl(60, 4.8%, 95.9%);
  --accent-foreground: hsl(24, 9.8%, 10%);
  --destructive: hsl(0, 84.2%, 60.2%);
  --destructive-foreground: hsl(60, 9.1%, 97.8%);
  --ring: hsl(20, 14.3%, 4.1%);
  --radius: 0.5rem;
  
  /* Dark theme portfolio colors */
  --dark-primary: hsl(0, 0%, 4%);
  --dark-secondary: hsl(0, 0%, 7%);
  --dark-tertiary: hsl(0, 0%, 12%);
  --dark-quaternary: hsl(0, 0%, 16%);
  --accent-cyan: hsl(195, 100%, 50%);
  --accent-blue: hsl(195, 100%, 40%);
  --success-green: hsl(144, 100%, 50%);
  --error-red: hsl(0, 90%, 70%);
}

.dark {
  --background: hsl(0, 0%, 4%);
  --foreground: hsl(0, 0%, 98%);
  --muted: hsl(0, 0%, 12%);
  --muted-foreground: hsl(0, 0%, 64%);
  --popover: hsl(0, 0%, 4%);
  --popover-foreground: hsl(0, 0%, 98%);
  --card: hsl(0, 0%, 4%);
  --card-foreground: hsl(0, 0%, 98%);
  --border: hsl(0, 0%, 12%);
  --input: hsl(0, 0%, 12%);
  --primary: hsl(195, 100%, 50%);
  --primary-foreground: hsl(0, 0%, 4%);
  --secondary: hsl(0, 0%, 12%);
  --secondary-foreground: hsl(0, 0%, 98%);
  --accent: hsl(0, 0%, 12%);
  --accent-foreground: hsl(0, 0%, 98%);
  --destructive: hsl(0, 62.8%, 30.6%);
  --destructive-foreground: hsl(0, 0%, 98%);
  --ring: hsl(0, 0%, 83%);
  --radius: 0.5rem;
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply font-sans antialiased;
    background: var(--dark-primary);
    color: hsl(0, 0%, 98%);
  }

  html {
    scroll-behavior: smooth;
  }
}

@layer components {
  .gradient-bg {
    background: linear-gradient(135deg, var(--dark-primary) 0%, var(--dark-tertiary) 100%);
  }
  
  .glass-card {
    background: rgba(42, 42, 42, 0.6);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .skill-bar {
    background: linear-gradient(90deg, var(--accent-cyan), var(--accent-blue));
    transition: width 1.5s ease-in-out;
  }
  
  .text-gradient {
    background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .hover-lift {
    transition: transform 0.3s ease;
  }
  
  .hover-lift:hover {
    transform: translateY(-8px);
  }
  
  .project-card .project-overlay {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .project-card:hover .project-overlay {
    opacity: 1;
  }
}

@layer utilities {
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-glow {
    animation: glow 2s ease-in-out infinite alternate;
  }
  
  .animate-slide-up {
    animation: slideUp 0.8s ease-out;
  }
  
  .animate-fade-in {
    animation: fadeIn 1s ease-out;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes glow {
  from { box-shadow: 0 0 20px hsla(195, 100%, 50%, 0.25); }
  to { box-shadow: 0 0 30px hsla(195, 100%, 50%, 0.5); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

## FILE: shared/schema.ts

```typescript
import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
```

---

## DOWNLOAD INSTRUCTIONS

1. **Copy the setup script to your local machine**
2. **Run:** `bash setup-project.sh`
3. **Install dependencies:** `npm install`
4. **Create all the component files** (I'll provide the remaining files in follow-up messages due to length limits)
5. **Add your actual CV and Cover Letter PDFs to client/public/**
6. **Run the project:** `npm run dev`

This gives you the complete foundation. The remaining component files and server files are quite lengthy - would you like me to provide them in separate files or continue with the most important ones first?