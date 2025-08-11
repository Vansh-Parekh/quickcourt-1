@echo off
echo 🏟️ Setting up QuickCourt with pleasant sample data...
echo.

cd /d "%~dp0.."

echo 📦 Installing dependencies...
call npm install

echo 🗄️ Setting up database...
call npx prisma generate
call npx prisma db push

echo 🎯 Loading enhanced sample data...
node scripts/enhanced-sample-data.js

echo.
echo ✅ Setup complete! Your QuickCourt app is ready with pleasant sample data.
echo 🚀 Run 'npm run dev' to start the application.
echo.
pause