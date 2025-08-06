import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';

export interface ProjectOptions {
  path: string;
  git: boolean;
  npm: boolean;
}

export class ProjectInitializer {
  private getCurrentTimestamp(): string {
    return new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }

  private getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  private createCopilotInstructions(projectPath: string, projectName: string): void {
    const instructionsContent = `# Copilot Instructions for ${projectName}

## Project Overview
This is the ${projectName} project. Please follow these guidelines when assisting with development:

## Project Structure
- \`pm/\` - Project management files and documentation
- \`pm/phase1/\` - Current phase tasks and planning
- \`pm/phase1/TASKS.md\` - Task tracking and project workflow

## Development Guidelines
1. Always check the current phase tasks in \`pm/phase1/TASKS.md\` before starting work
2. Update task status as you complete work
3. Follow the project's coding standards and conventions
4. Write tests for new functionality
5. Document significant changes and decisions
6. Use proper error handling

## Task Management Workflow
- **TODO**: Task is defined but not started
- **IN_PROGRESS**: Currently being worked on
- **REVIEW**: Ready for code review
- **TESTING**: In testing phase
- **DONE**: Completed and verified
- **BLOCKED**: Cannot proceed due to dependencies

## Communication
- Update task descriptions with progress notes
- Mark blockers clearly with reasons
- Document any architectural decisions in the appropriate phase folder

## Code Quality
- Write clean, readable code
- Include appropriate comments and documentation
- Follow established patterns in the codebase
- Ensure proper error handling
- Write tests for critical functionality

Generated on: ${this.getCurrentTimestamp()}
`;

    // Create .github directory if it doesn't exist
    const githubPath = path.join(projectPath, '.github');
    fs.mkdirSync(githubPath, { recursive: true });
    
    const instructionsPath = path.join(githubPath, 'copilot-instructions.md');
    fs.writeFileSync(instructionsPath, instructionsContent);
    console.log(chalk.green(`✓ Created copilot instructions: ${instructionsPath}`));
  }

  private createTasksMd(phasePath: string, projectName: string): void {
    const tasksContent = `# ${projectName} - Phase 1 Tasks

## Project Setup and Planning

### Overview
This document tracks tasks and progress for Phase 1 of the ${projectName} project.

### Task Status Legend
- 🔴 **TODO**: Not started
- 🟡 **IN_PROGRESS**: Currently being worked on  
- 🔵 **REVIEW**: Ready for review
- 🟢 **TESTING**: In testing phase
- ✅ **DONE**: Completed
- ⛔ **BLOCKED**: Cannot proceed

---

## Phase 1 Tasks

### Project Foundation
| Task | Status | Assignee | Due Date | Notes |
|------|--------|----------|----------|-------|
| Project directory structure | ✅ | System | ${this.getCurrentDate()} | Auto-generated |
| Initial documentation | 🔴 | - | TBD | README, contributing guidelines |
| Development environment setup | 🔴 | - | TBD | Dependencies, tools, configs |

### Core Development
| Task | Status | Assignee | Due Date | Notes |
|------|--------|----------|----------|-------|
| Define project requirements | 🔴 | - | TBD | Functional and non-functional |
| Architecture planning | 🔴 | - | TBD | System design, technology stack |
| Choose technology stack | 🔴 | - | TBD | Programming language, frameworks, tools |
| Initial implementation | 🔴 | - | TBD | Core functionality |

### Quality Assurance
| Task | Status | Assignee | Due Date | Notes |
|------|--------|----------|----------|-------|
| Testing strategy | 🔴 | - | TBD | Unit, integration, e2e tests |
| Code review process | 🔴 | - | TBD | Review criteria and workflow |
| Documentation review | 🔴 | - | TBD | Technical and user docs |

### Build & Deployment
| Task | Status | Assignee | Due Date | Notes |
|------|--------|----------|----------|-------|
| Build pipeline | 🔴 | - | TBD | Compilation, bundling, packaging |
| CI/CD setup | 🔴 | - | TBD | Automated testing and deployment |
| Environment configuration | 🔴 | - | TBD | Dev, staging, production configs |

---

## Notes and Decisions

### Architecture Decisions
- *Record key architectural decisions here*

### Technology Stack
- *Document chosen technologies and their justification*

### Dependencies
- *List external dependencies and their justification*

### Risks and Mitigations
- *Identify potential risks and mitigation strategies*

---

## Phase Completion Criteria
- [ ] All TODO tasks moved to DONE
- [ ] Technology stack chosen and documented
- [ ] Development environment set up
- [ ] Code review completed
- [ ] Testing completed with acceptable coverage
- [ ] Documentation updated
- [ ] Phase retrospective conducted

---

*Last updated: ${this.getCurrentTimestamp()}*
`;

    const tasksPath = path.join(phasePath, 'TASKS.md');
    fs.writeFileSync(tasksPath, tasksContent);
    console.log(chalk.green(`✓ Created tasks file: ${tasksPath}`));
  }

  private createReadme(projectPath: string, projectName: string): void {
    const readmeContent = `# ${projectName}

## Overview
Brief description of the ${projectName} project.

## Project Management
This project uses a phase-based task management approach:
- Tasks are organized in the \`pm/\` directory
- Current phase tasks are tracked in \`pm/phase1/TASKS.md\`
- See \`.github/copilot-instructions.md\` for development guidelines

## Getting Started

### Prerequisites
- [List any prerequisites here]

### Installation
\`\`\`bash
# Add installation instructions here
\`\`\`

### Development
\`\`\`bash
# Add development commands here
\`\`\`

### Project Management Workflow
1. Review the current phase tasks in \`pm/phase1/TASKS.md\`
2. Check the copilot instructions in \`.github/copilot-instructions.md\`
3. Set up your development environment
4. Start working on assigned tasks

## Project Structure
\`\`\`
${projectName}/
├── .github/
│   └── copilot-instructions.md  # Development guidelines for AI assistance
├── README.md                    # This file
├── pm/                          # Project management
│   └── phase1/                  # Current phase
│       └── TASKS.md             # Task tracking
└── src/                         # Source code (create as needed)
\`\`\`

## Contributing
1. Check current tasks and pick an unassigned TODO item
2. Update task status to IN_PROGRESS
3. Work on the task following project guidelines
4. Write tests for new functionality
5. Update task status as you progress
6. Mark as DONE when complete

## License
[Specify your license here]

---

*Generated on: ${this.getCurrentTimestamp()}*
`;

    const readmePath = path.join(projectPath, 'README.md');
    fs.writeFileSync(readmePath, readmeContent);
    console.log(chalk.green(`✓ Created README: ${readmePath}`));
  }

  private createGitignore(projectPath: string): void {
    const gitignoreContent = `# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# IDE files
.vscode/
.idea/
*.swp
*.swo
*~

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Temporary files
tmp/
temp/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Add language-specific ignores as needed
# For example:
# node_modules/     # Node.js
# __pycache__/      # Python
# target/           # Java/Rust
# bin/              # Go
# build/            # General build output
# dist/             # Distribution files
`;

    const gitignorePath = path.join(projectPath, '.gitignore');
    fs.writeFileSync(gitignorePath, gitignoreContent);
    console.log(chalk.green(`✓ Created .gitignore: ${gitignorePath}`));
  }

  private async initializeGitRepo(projectPath: string): Promise<void> {
    try {
      // Initialize git repository
      execSync('git init', { cwd: projectPath, stdio: 'pipe' });
      console.log(chalk.green(`✓ Initialized git repository`));
      
      // Add initial commit
      execSync('git add .', { cwd: projectPath, stdio: 'pipe' });
      execSync('git commit -m "Initial commit: Project structure created"', { cwd: projectPath, stdio: 'pipe' });
      console.log(chalk.green(`✓ Created initial git commit`));
      
    } catch (error) {
      console.log(chalk.yellow(`⚠ Warning: Could not initialize git repository: ${error instanceof Error ? error.message : 'Unknown error'}`));
    }
  }

  public async initProject(projectName: string, options: ProjectOptions): Promise<string> {
    console.log(chalk.blue(`🚀 Initializing project: ${projectName}`));
    console.log(chalk.blue('='.repeat(50)));

    // Create project directory
    const basePath = path.resolve(options.path);
    const projectPath = path.join(basePath, projectName);

    if (fs.existsSync(projectPath)) {
      throw new Error(`Project directory '${projectPath}' already exists!`);
    }

    // Create directory structure
    fs.mkdirSync(projectPath, { recursive: true });
    console.log(chalk.green(`✓ Created project directory: ${projectPath}`));

    const pmPath = path.join(projectPath, 'pm');
    fs.mkdirSync(pmPath);
    console.log(chalk.green(`✓ Created PM directory: ${pmPath}`));

    const phase1Path = path.join(pmPath, 'phase1');
    fs.mkdirSync(phase1Path);
    console.log(chalk.green(`✓ Created Phase 1 directory: ${phase1Path}`));

    // Create source directory placeholder
    const srcPath = path.join(projectPath, 'src');
    fs.mkdirSync(srcPath);
    console.log(chalk.green(`✓ Created source directory: ${srcPath}`));

    // Create files
    this.createCopilotInstructions(projectPath, projectName);
    this.createTasksMd(phase1Path, projectName);
    this.createReadme(projectPath, projectName);
    this.createGitignore(projectPath);

    // Initialize git repository if enabled
    if (options.git) {
      await this.initializeGitRepo(projectPath);
    }

    console.log(chalk.blue('='.repeat(50)));
    console.log(chalk.green('✅ Project initialization complete!'));
    console.log(chalk.yellow('\nNext steps:'));
    console.log(chalk.white(`1. cd ${projectName}`));
    console.log(chalk.white('2. Review .github/copilot-instructions.md for development guidelines'));
    console.log(chalk.white('3. Check pm/phase1/TASKS.md for current tasks'));
    console.log(chalk.white('4. Choose your technology stack and update tasks'));
    console.log(chalk.white('5. Set up your development environment'));
    console.log(chalk.white('6. Start development!'));

    return projectPath;
  }
}
