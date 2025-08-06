#!/bin/bash
# TypeScript Project Initializer
# Usage: ./init-project.sh <project_name> [options]

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
NODE_SCRIPT="$SCRIPT_DIR/dist/init-project.js"

# Check if the compiled JavaScript exists
if [ ! -f "$NODE_SCRIPT" ]; then
    echo "Error: Compiled JavaScript not found. Please run 'npm run build' first."
    exit 1
fi

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed or not in PATH."
    exit 1
fi

# Run the TypeScript project initializer
node "$NODE_SCRIPT" "$@"
