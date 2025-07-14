# Windows Setup Guide for Portfolio Project

## Issues You're Facing:
1. **NODE_ENV command not recognized** - Windows doesn't understand Unix-style environment variables
2. **npm install errors** - Likely due to dependency conflicts or network issues

## Quick Fix Steps:

### Step 1: Fix the Windows Environment Issue
Run this command in your project directory:
```bash
npm install -g cross-env
```

### Step 2: Use Windows-Compatible Package.json
Replace your current `package.json` with the `package-windows.json` file I created:
```bash
copy package-windows.json package.json
```

### Step 3: Clean Install
```bash
# Remove existing files
rmdir /s /q node_modules
del package-lock.json

# Clear npm cache
npm cache clean --force

# Install dependencies
npm install
```

### Step 4: Alternative Installation (if step 3 fails)
```bash
npm install --legacy-peer-deps
```

## Automated Setup (Recommended)
I've created a Windows batch file that does everything automatically:

1. **Run the setup script:** `windows-setup.bat`
2. **Wait for completion**
3. **Run the project:** `npm run dev`

## Manual Alternative Commands:
If you prefer to run commands manually:

```bash
# Install cross-env globally
npm install -g cross-env

# Clean install
npm cache clean --force
npm install --legacy-peer-deps

# Run project
npm run dev
```

## Common Windows Issues & Solutions:

### If you get permission errors:
```bash
# Run as administrator or use:
npm install --no-optional
```

### If Node.js/npm is not installed:
1. Download Node.js from: https://nodejs.org/
2. Install the LTS version
3. Restart your terminal
4. Verify: `node --version` and `npm --version`

### If npm install still fails:
```bash
# Try with different registry
npm install --registry https://registry.npmjs.org/

# Or use yarn instead
npm install -g yarn
yarn install
```

## Updated Scripts (Windows-compatible):
```json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development tsx server/index.ts",
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "cross-env NODE_ENV=production node dist/index.js"
  }
}
```

## Next Steps After Setup:
1. ✅ Fix Windows compatibility (use the files I provided)
2. ✅ Install dependencies successfully
3. ✅ Add your CV and Cover Letter PDFs to `client/public/`
4. ✅ Run `npm run dev`
5. ✅ Open http://localhost:5000 in your browser

The project should work perfectly on Windows after these fixes!