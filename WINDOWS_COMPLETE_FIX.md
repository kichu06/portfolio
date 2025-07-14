# Complete Windows Fix for Portfolio Project

## Problems Identified:
1. **Port 5000 in use** - Another process is using the port
2. **Network connectivity issues** - npm install failing with ECONNRESET
3. **File permission issues** - Windows can't remove some directories
4. **NODE_ENV not recognized** - Windows doesn't support Unix environment variables

## Complete Solution:

### Step 1: Run the Windows Fix Script
Save and run this batch file as administrator:
```batch
windows-fixes.bat
```

This will:
- Kill any process using port 5000
- Clean npm cache and node_modules properly
- Handle Windows permission issues
- Set up proper npm configuration for network issues
- Try multiple installation methods

### Step 2: Alternative Manual Fix
If the batch file doesn't work, run these commands as administrator:

```bash
# Kill process using port 5000
netstat -ano | findstr :5000
# Note the PID and kill it:
taskkill /F /PID [PID_NUMBER]

# Clean everything
npm cache clean --force
rmdir /s /q node_modules
del package-lock.json

# Create .npmrc for network issues
echo registry=https://registry.npmjs.org/ > .npmrc
echo fetch-retry-mintimeout=20000 >> .npmrc
echo fetch-retry-maxtimeout=120000 >> .npmrc
echo fetch-retries=5 >> .npmrc
echo fetch-timeout=300000 >> .npmrc

# Install cross-env
npm install -g cross-env

# Try installation methods in order:
npm install --fetch-timeout=300000 --cache-max=0
# OR
npm install --legacy-peer-deps --fetch-timeout=300000
# OR
npm install --no-optional --legacy-peer-deps --fetch-timeout=300000
```

### Step 3: Use Alternative Server (if port issues persist)
Replace your `server/index.ts` with `server-windows.ts` which includes:
- Automatic port detection (finds available port starting from 5000)
- Better error handling for Windows
- Graceful port conflict resolution

### Step 4: Alternative Package Manager
If npm continues to fail, use yarn:
```bash
npm install -g yarn
yarn install
yarn dev
```

### Step 5: Network Configuration
If you're behind a corporate firewall or proxy:
```bash
# Check if proxy is needed
npm config get proxy
npm config get https-proxy

# If yes, configure proxy:
npm config set proxy http://proxy-server:port
npm config set https-proxy http://proxy-server:port

# Or use direct connection:
npm config set registry https://registry.npmjs.org/
```

## Expected Results:
After running the fixes:
```
✅ Port 5000 conflicts cleared
✅ npm installation successful
✅ Network timeout issues resolved
✅ Windows compatibility enabled

> portfolio-project@1.0.0 dev
> cross-env NODE_ENV=development tsx server/index.ts
serving on port 5000
```

## Common Windows Issues & Solutions:

### Permission Errors:
- Run Command Prompt as Administrator
- Disable Windows Defender temporarily during installation
- Use `--unsafe-perm` flag: `npm install --unsafe-perm`

### Network Errors:
- Check antivirus/firewall settings
- Try different DNS servers (8.8.8.8, 1.1.1.1)
- Use mobile hotspot to test if it's network-related

### Port Already in Use:
- Close other development servers
- Check Task Manager for node.js processes
- Use `netstat -ano | findstr :5000` to find what's using the port

## Alternative Port Configuration:
If you need to use a different port permanently, update the server configuration:
```typescript
const port = process.env.PORT || 3000; // Use 3000 instead of 5000
```

## Final Verification:
1. ✅ Dependencies installed successfully
2. ✅ Server starts without port conflicts
3. ✅ Browser opens at http://localhost:5000 (or alternative port)
4. ✅ Portfolio website loads correctly
5. ✅ All sections work (Hero, About, Skills, Projects, Contact)
6. ✅ CV/Cover Letter downloads work

The portfolio project should now run smoothly on your Windows system!