# Career Compass - Next.js PowerShell Launcher
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location "$scriptDir\nextjs"

Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "      Career Compass - Next.js Fullstack Platform       " -ForegroundColor Yellow
Write-Host "  Theme: Royal Blue & White | Tagline: Discover Future   " -ForegroundColor White
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "[ERROR] Node.js is not found in your system PATH." -ForegroundColor Red
    Write-Host "Please download and install Node.js (v18+) from https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "Alternatively, launch the Python/Flask backend using .\run.ps1" -ForegroundColor Green
    exit 1
}

if (-not (Test-Path "node_modules")) {
    Write-Host "[INFO] Installing dependencies (npm install)..." -ForegroundColor Cyan
    npm install
}

Write-Host "[INFO] Starting Next.js App Router on http://localhost:8000 ..." -ForegroundColor Green
Start-Process "http://localhost:8000"
npm run dev
