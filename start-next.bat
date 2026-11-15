@echo off
setlocal
cd /d "%~dp0nextjs"
echo ========================================================
echo       Career Compass - Next.js Fullstack Platform
echo   Theme: Royal Blue & White ^| Tagline: Discover Your Future
echo ========================================================
echo.

where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Node.js is not found in your system PATH.
    echo Please download and install Node.js (v18 or higher) from https://nodejs.org/
    echo After installing Node.js, run this batch file again.
    echo.
    echo Alternatively, you can run the Python/Flask version using start.bat
    pause
    exit /b 1
)

if not exist node_modules (
    echo [INFO] Installing required dependencies (npm install)...
    call npm install
    if %ERRORLEVEL% neq 0 (
        echo [ERROR] npm install encountered an error.
        pause
        exit /b 1
    )
)

echo.
echo [INFO] Starting Next.js development server on port 8000...
echo [INFO] Opening web browser at http://localhost:8000 ...
start "" http://localhost:8000
call npm run dev

pause
