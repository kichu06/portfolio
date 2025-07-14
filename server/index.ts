// Temporary minimal server file to prevent build errors
// This is a placeholder while transitioning to frontend-only
import { spawn } from 'child_process';

console.log('Starting frontend-only development server...');

// Start Vite dev server with correct configuration
const vite = spawn('npx', ['vite', '--port', '5000', '--host', '--config', 'vite-frontend-only.config.ts'], {
  stdio: 'inherit',
  shell: true
});

vite.on('error', (error) => {
  console.error('Failed to start vite:', error);
});

vite.on('close', (code) => {
  console.log(`Vite process exited with code ${code}`);
});