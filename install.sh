#!/bin/bash

echo "========================================"
echo "  Shahul Hameed Portfolio Setup"
echo "========================================"
echo

echo "Installing all dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "Error installing dependencies"
    exit 1
fi

echo
echo "Setting up environment..."
if [ ! -f .env ]; then
    cp env.example .env
    echo ".env file created from template"
    echo "Please edit .env file with your email credentials"
else
    echo ".env file already exists"
fi

echo
echo "========================================"
echo "  Installation completed successfully!"
echo "========================================"
echo
echo "Available commands:"
echo "  npm run dev     - Start both frontend and backend"
echo "  npm run server  - Start only backend server (port 5000)"
echo "  npm run client  - Start only frontend (port 3000)"
echo "  npm run build   - Build for production"
echo "  npm run preview - Preview production build"
echo
echo "Next steps:"
echo "  1. Edit .env file with your email credentials"
echo "  2. Run 'npm run dev' to start development"
echo

