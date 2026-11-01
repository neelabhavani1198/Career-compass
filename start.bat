@echo off
title Career Compass AI Platform
echo ===============================================================
echo Starting Career Compass AI Career Guidance Website...
echo ===============================================================
cd /d "%~dp0backend"
start http://localhost:8000
python server.py 8000
pause
