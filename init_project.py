#!/usr/bin/env python3
"""
Project Initializer Script

This script creates a new project directory with a standardized project management structure
including copilot instructions and task management workflow.
"""

import os
import sys
import argparse
from pathlib import Path
from datetime import datetime


def create_copilot_instructions(project_path: Path, project_name: str) -> None:
    """Create a .copilot-instructions.md file with project guidelines."""
    instructions_content = f"""# Copilot Instructions for {project_name}

## Project Overview
This is the {project_name} project. Please follow these guidelines when assisting with development:

## Project Structure
- `pm/` - Project management files and documentation
- `pm/phase1/` - Current phase tasks and planning
- `pm/phase1/TASKS.md` - Task tracking and project workflow

## Development Guidelines
1. Always check the current phase tasks in `pm/phase1/TASKS.md` before starting work
2. Update task status as you complete work
3. Follow the project's coding standards and conventions
4. Document significant changes and decisions
5. Test thoroughly before marking tasks as complete

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

Generated on: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
"""
    
    instructions_path = project_path / ".copilot-instructions.md"
    with open(instructions_path, 'w') as f:
        f.write(instructions_content)
    print(f"✓ Created copilot instructions: {instructions_path}")


def create_tasks_md(phase_path: Path, project_name: str) -> None:
    """Create the TASKS.md file with initial project management template."""
    tasks_content = f"""# {project_name} - Phase 1 Tasks

## Project Setup and Planning

### Overview
This document tracks tasks and progress for Phase 1 of the {project_name} project.

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
| Project directory structure | ✅ | System | {datetime.now().strftime("%Y-%m-%d")} | Auto-generated |
| Initial documentation | 🔴 | - | TBD | README, contributing guidelines |
| Development environment setup | 🔴 | - | TBD | Dependencies, tools, configs |

### Core Development
| Task | Status | Assignee | Due Date | Notes |
|------|--------|----------|----------|-------|
| Define project requirements | 🔴 | - | TBD | Functional and non-functional |
| Architecture planning | 🔴 | - | TBD | System design, technology stack |
| Initial implementation | 🔴 | - | TBD | Core functionality |

### Quality Assurance
| Task | Status | Assignee | Due Date | Notes |
|------|--------|----------|----------|-------|
| Testing strategy | 🔴 | - | TBD | Unit, integration, e2e tests |
| Code review process | 🔴 | - | TBD | Review criteria and workflow |
| Documentation review | 🔴 | - | TBD | Technical and user docs |

---

## Notes and Decisions

### Architecture Decisions
- *Record key architectural decisions here*

### Dependencies
- *List external dependencies and their justification*

### Risks and Mitigations
- *Identify potential risks and mitigation strategies*

---

## Phase Completion Criteria
- [ ] All TODO tasks moved to DONE
- [ ] Code review completed
- [ ] Testing completed with acceptable coverage
- [ ] Documentation updated
- [ ] Phase retrospective conducted

---

*Last updated: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}*
"""
    
    tasks_path = phase_path / "TASKS.md"
    with open(tasks_path, 'w') as f:
        f.write(tasks_content)
    print(f"✓ Created tasks file: {tasks_path}")


def create_readme(project_path: Path, project_name: str) -> None:
    """Create a basic README.md file for the project."""
    readme_content = f"""# {project_name}

## Overview
Brief description of the {project_name} project.

## Project Management
This project uses a phase-based task management approach:
- Tasks are organized in the `pm/` directory
- Current phase tasks are tracked in `pm/phase1/TASKS.md`
- See `.copilot-instructions.md` for development guidelines

## Getting Started
1. Review the current phase tasks in `pm/phase1/TASKS.md`
2. Check the copilot instructions in `.copilot-instructions.md`
3. Set up your development environment
4. Start working on assigned tasks

## Project Structure
```
{project_name}/
├── .copilot-instructions.md  # Development guidelines for AI assistance
├── README.md                 # This file
├── pm/                       # Project management
│   └── phase1/               # Current phase
│       └── TASKS.md          # Task tracking
└── src/                      # Source code (create as needed)
```

## Contributing
1. Check current tasks and pick an unassigned TODO item
2. Update task status to IN_PROGRESS
3. Work on the task following project guidelines
4. Update task status as you progress
5. Mark as DONE when complete

## License
[Specify your license here]

---

*Generated on: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}*
"""
    
    readme_path = project_path / "README.md"
    with open(readme_path, 'w') as f:
        f.write(readme_content)
    print(f"✓ Created README: {readme_path}")


def create_gitignore(project_path: Path) -> None:
    """Create a basic .gitignore file."""
    gitignore_content = """# OS generated files
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
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Dependency directories
node_modules/
__pycache__/
*.py[cod]
*$py.class

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build outputs
dist/
build/
*.egg-info/

# Temporary files
tmp/
temp/
"""
    
    gitignore_path = project_path / ".gitignore"
    with open(gitignore_path, 'w') as f:
        f.write(gitignore_content)
    print(f"✓ Created .gitignore: {gitignore_path}")


def init_project(project_name: str, base_path: str = ".") -> None:
    """Initialize a new project with the standard structure."""
    
    print(f"🚀 Initializing project: {project_name}")
    print("=" * 50)
    
    # Create project directory
    base_path = Path(base_path).resolve()
    project_path = base_path / project_name
    
    if project_path.exists():
        print(f"❌ Error: Project directory '{project_path}' already exists!")
        sys.exit(1)
    
    # Create directory structure
    project_path.mkdir(parents=True)
    print(f"✓ Created project directory: {project_path}")
    
    pm_path = project_path / "pm"
    pm_path.mkdir()
    print(f"✓ Created PM directory: {pm_path}")
    
    phase1_path = pm_path / "phase1"
    phase1_path.mkdir()
    print(f"✓ Created Phase 1 directory: {phase1_path}")
    
    # Create source directory placeholder
    src_path = project_path / "src"
    src_path.mkdir()
    print(f"✓ Created source directory: {src_path}")
    
    # Create files
    create_copilot_instructions(project_path, project_name)
    create_tasks_md(phase1_path, project_name)
    create_readme(project_path, project_name)
    create_gitignore(project_path)
    
    print("=" * 50)
    print("✅ Project initialization complete!")
    print(f"\nNext steps:")
    print(f"1. cd {project_name}")
    print(f"2. Review .copilot-instructions.md for development guidelines")
    print(f"3. Check pm/phase1/TASKS.md for current tasks")
    print(f"4. Start development!")
    
    return project_path


def main():
    """Main entry point for the script."""
    parser = argparse.ArgumentParser(
        description="Initialize a new project with standardized PM structure"
    )
    parser.add_argument(
        "project_name",
        help="Name of the project to create"
    )
    parser.add_argument(
        "--path",
        default=".",
        help="Base path where the project directory will be created (default: current directory)"
    )
    
    args = parser.parse_args()
    
    # Validate project name
    if not args.project_name or not args.project_name.replace("_", "").replace("-", "").replace(".", "").isalnum():
        print("❌ Error: Project name must be alphanumeric (underscores, hyphens, and dots allowed)")
        sys.exit(1)
    
    try:
        init_project(args.project_name, args.path)
    except Exception as e:
        print(f"❌ Error: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
