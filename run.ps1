# Career Compass Startup Script for PowerShell
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location "$scriptPath\backend"
Write-Host "===============================================================" -ForegroundColor Cyan
Write-Host "🚀 Launching Career Compass AI Career Guidance Platform" -ForegroundColor Green
Write-Host "🌐 Opening: http://localhost:8000" -ForegroundColor Yellow
Write-Host "===============================================================" -ForegroundColor Cyan
Start-Process "http://localhost:8000"
python server.py 8000
