#!/bin/bash
# Global Installation Script for Project Initializer

echo "🚀 Installing Project Initializer globally..."

# Check if node_modules exists and install dependencies if needed
if [ ! -d "node_modules" ] || [ ! -f "node_modules/.package-lock.json" ]; then
    echo "📦 Installing dependencies..."
    npm install
    
    if [ $? -ne 0 ]; then
        echo "❌ Dependency installation failed. Please check your npm configuration and try again."
        exit 1
    fi
else
    echo "✅ Dependencies already installed."
fi

# Build the project
echo "📦 Building TypeScript..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix any TypeScript errors and try again."
    exit 1
fi

# Install globally
echo "🌍 Installing globally..."
npm install -g .

if [ $? -eq 0 ]; then
    echo "✅ Installation complete!"
    echo ""
    echo "You can now use the project initializer from anywhere:"
    echo "  init-project my-awesome-project"
    echo "  project-init my-other-project"
    echo ""
    echo "Available options:"
    echo "  --help                    Show help"
    echo "  --path <path>            Set base path (default: current directory)"
    echo "  --no-git                 Skip git initialization"
    echo ""
    echo "To uninstall: npm run uninstall-global"
else
    echo "❌ Global installation failed."
    exit 1
fi
