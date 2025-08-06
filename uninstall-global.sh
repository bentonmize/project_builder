#!/bin/bash
# Global Uninstallation Script for Project Initializer

echo "🗑️  Uninstalling Project Initializer globally..."

npm uninstall -g project-initializer

if [ $? -eq 0 ]; then
    echo "✅ Project Initializer has been uninstalled globally."
    echo "You can no longer use 'init-project' or 'project-init' commands."
else
    echo "❌ Uninstallation failed or package was not installed globally."
fi
