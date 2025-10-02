# TypeScript Project Initializer

A TypeScript-based tool that creates new projects with a standardized project management structure and copilot instructions.

## Features

- 🎯 **Structured Project Management**: Creates a phase-based task management system
- 🤖 **Copilot Integration**: Includes AI assistant guidelines and instructions
- 📝 **TypeScript Ready**: Full TypeScript setup with modern configuration
- 📋 **Task Tracking**: Built-in TASKS.md template for project workflow
- 🚀 **Ready to Use**: Complete project structure with build scripts

## Installation

### Local Development
```bash
git clone <this-repo>
cd project_builder
npm install
npm run build
```

### Global Installation (Recommended)
```bash
# Option 1: Using the install script (easiest - handles dependencies automatically)
./install-global.sh

# Option 2: Manual installation
npm install    # Install dependencies first
npm run build
npm install -g .

# Option 3: Using npm scripts
npm install    # Install dependencies first
npm run install-global
```

### Verify Installation
```bash
# Check if globally installed
init-project --help
project-init --help
```

### Alternative: Manual PATH Setup
If you prefer not to install globally, you can add the project to your PATH:
```bash
# Add to your ~/.bashrc, ~/.zshrc, or similar
export PATH="/path/to/project_builder:$PATH"

# Then you can use:
./init-project.sh my-project
```

### Uninstallation
```bash
# Option 1: Using the uninstall script
./uninstall-global.sh

# Option 2: Using npm
npm uninstall -g project-initializer

# Option 3: Using npm script
npm run uninstall-global
```

## Usage

### Global Commands (after installation)
```bash
# Create a new project anywhere
init-project my-awesome-app
project-init my-awesome-app

# With options
init-project my-app --path ~/Projects
init-project my-app --no-git
```

### Local Development Commands
```bash
# Using the shell script
./init-project.sh <project-name> [options]

# Using Node directly
node dist/init-project.js <project-name> [options]

# Using npm script
npm run dev -- <project-name> [options]
```

### Options
- `-p, --path <path>`: Base path where the project directory will be created (default: current directory)
- `--no-git`: Skip git initialization
- `--no-npm`: Skip npm initialization

### Examples
```bash
# Create a new project in current directory
./init-project.sh my-awesome-app

# Create a project in a specific directory
./init-project.sh my-app --path /path/to/projects

# Create without git initialization
./init-project.sh my-app --no-git
```

## Generated Project Structure

```
my-project/
├── .copilot-instructions.md  # AI assistant guidelines
├── .gitignore               # Git ignore rules
├── README.md                # Project documentation
├── package.json             # Node.js dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── pm/                     # Project management
│   └── phase1/            # Current phase
│       └── TASKS.md       # Task tracking
├── src/                   # TypeScript source code
│   └── index.ts          # Main entry point
├── dist/                 # Compiled JavaScript (after build)
└── tests/               # Test files
```

## Generated Project Features

### TypeScript Configuration
- Strict mode enabled for maximum type safety
- Modern ES2020 target with CommonJS modules
- Source maps and declarations generated
- Optimized for Node.js development

### Project Management
- Phase-based task organization
- Task status tracking (TODO, IN_PROGRESS, REVIEW, TESTING, DONE, BLOCKED)
- Built-in workflow templates
- Copilot instruction integration

### Development Scripts
The generated projects include these npm scripts:
- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Run TypeScript directly with ts-node
- `npm start` - Run compiled JavaScript
- `npm test` - Run tests (placeholder)
- `npm run clean` - Remove compiled output

## Copilot Integration

Each generated project includes comprehensive copilot instructions that help AI assistants understand:
- Project structure and conventions
- TypeScript best practices
- Task management workflow
- Code quality guidelines
- Development processes

## Development

### Building
```bash
npm run build
```

### Running in Development
```bash
npm run dev -- my-test-project
```

### Project Structure
- `src/init-project.ts` - CLI entry point
- `src/ProjectInitializer.ts` - Main project creation logic
- `dist/` - Compiled JavaScript output

## License

MIT

---

*This tool helps you create consistent, well-structured TypeScript projects with integrated project management workflows.*
