@echo off
echo Fixing Windows issues for Portfolio Project...
echo.

:: Kill any process using port 5000
echo Checking for processes using port 5000...
netstat -ano | findstr :5000 > nul
if %errorlevel% == 0 (
    echo Found process using port 5000. Attempting to terminate...
    for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5000') do (
        taskkill /F /PID %%a 2>nul
    )
    echo Port 5000 should now be free.
) else (
    echo Port 5000 is already free.
)

:: Clean npm cache and node_modules more thoroughly
echo Cleaning npm cache and node_modules...
npm cache clean --force 2>nul
npm cache verify 2>nul

:: Remove node_modules with force (handles permission issues)
if exist node_modules (
    echo Removing node_modules folder...
    rd /s /q node_modules 2>nul
    :: If normal removal fails, try with attrib
    if exist node_modules (
        attrib -r node_modules\*.* /s
        rd /s /q node_modules
    )
)

:: Remove package-lock.json
if exist package-lock.json (
    echo Removing package-lock.json...
    del package-lock.json
)

:: Create .npmrc file to handle network issues
echo Creating .npmrc for better network handling...
echo registry=https://registry.npmjs.org/ > .npmrc
echo fetch-retry-mintimeout=20000 >> .npmrc
echo fetch-retry-maxtimeout=120000 >> .npmrc
echo fetch-retries=5 >> .npmrc
echo fetch-timeout=300000 >> .npmrc

:: Install cross-env globally if not already installed
echo Installing cross-env globally...
npm install -g cross-env 2>nul

:: Try different installation approaches
echo Attempting to install dependencies...
echo.

:: Method 1: Standard install with longer timeout
echo Method 1: Standard install with extended timeout...
npm install --fetch-timeout=300000 --cache-max=0
if %errorlevel% == 0 (
    echo ✅ Installation successful with Method 1
    goto :success
)

:: Method 2: Legacy peer deps
echo Method 2: Install with legacy peer deps...
npm install --legacy-peer-deps --fetch-timeout=300000
if %errorlevel% == 0 (
    echo ✅ Installation successful with Method 2
    goto :success
)

:: Method 3: Without optional dependencies
echo Method 3: Install without optional dependencies...
npm install --no-optional --legacy-peer-deps --fetch-timeout=300000
if %errorlevel% == 0 (
    echo ✅ Installation successful with Method 3
    goto :success
)

:: Method 4: Using yarn as fallback
echo Method 4: Trying with yarn as fallback...
npm install -g yarn 2>nul
if %errorlevel% == 0 (
    yarn install
    if %errorlevel% == 0 (
        echo ✅ Installation successful with Yarn
        goto :success
    )
)

echo ❌ All installation methods failed. Please check your network connection.
echo Try running as administrator or check firewall settings.
goto :end

:success
echo.
echo ✅ Setup completed successfully!
echo.
echo The following issues have been resolved:
echo 1. Port 5000 conflicts cleared
echo 2. npm installation issues fixed
echo 3. Network timeout issues handled
echo.
echo You can now run: npm run dev
echo.

:end
pause