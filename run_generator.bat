@echo off
title AlcheMY Data Generator & Editor
python "%~dp0alchemy_generator.py"
if %errorlevel% neq 0 (
    echo.
    echo Wystapil blad podczas uruchamiania generatora.
    pause
)
