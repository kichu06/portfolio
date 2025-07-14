@echo off
echo Setting up Portfolio Project for Windows...
echo.

:: Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed. Please install Node.js first.
    echo Visit: https://nodejs.org/
    pause
    exit /b 1
)

:: Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo Node.js and npm are installed. Continuing setup...
echo.

:: Clean up any existing node_modules and package-lock.json
if exist node_modules (
    echo Removing existing node_modules...
    rmdir /s /q node_modules
)

if exist package-lock.json (
    echo Removing existing package-lock.json...
    del package-lock.json
)

:: Copy the Windows-compatible package.json
if exist package-windows.json (
    echo Using Windows-compatible package.json...
    copy package-windows.json package.json
) else (
    echo ERROR: package-windows.json not found. Please make sure it exists.
    pause
    exit /b 1
)

:: Clear npm cache
echo Clearing npm cache...
npm cache clean --force

:: Install dependencies
echo Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo ERROR: npm install failed. Trying with --legacy-peer-deps...
    npm install --legacy-peer-deps
    
    if %errorlevel% neq 0 (
        echo ERROR: npm install still failed. Please check your internet connection and try again.
        pause
        exit /b 1
    )
)

echo.
echo ✅ Setup completed successfully!
echo.
echo Next steps:
echo 1. Make sure you have all the project files in place
echo 2. Add your CV and Cover Letter PDFs to client/public/
echo 3. Run: npm run dev
echo.
pause