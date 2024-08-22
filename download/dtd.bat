@echo off
setlocal

:: Define the folder name and path
set folderName=JCDBME Film
set destPath=%userprofile%\Desktop\%folderName%

:: Create the folder on the Desktop
if not exist "%destPath%" mkdir "%destPath%"

:: Copy all the files to the new folder
xcopy * "%destPath%" /E /I /Y

:: End the batch script
endlocal