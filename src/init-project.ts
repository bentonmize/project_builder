#!/usr/bin/env node

import { Command } from 'commander';
import { ProjectInitializer } from './ProjectInitializer';
import chalk from 'chalk';

const program = new Command();

program
  .name('init-project')
  .description('Initialize a new project with standardized PM structure and TypeScript setup')
  .version('1.0.0');

program
  .argument('<project-name>', 'Name of the project to create')
  .option('-p, --path <path>', 'Base path where the project directory will be created', '.')
  .option('--no-git', 'Skip git initialization')
  .option('--no-npm', 'Skip npm initialization')
  .action(async (projectName: string, options: { path: string; git: boolean; npm: boolean }) => {
    try {
      // Validate project name
      if (!projectName || !/^[a-zA-Z0-9_.-]+$/.test(projectName)) {
        console.error(chalk.red('❌ Error: Project name must be alphanumeric (underscores, hyphens, and dots allowed)'));
        process.exit(1);
      }

      const initializer = new ProjectInitializer();
      await initializer.initProject(projectName, options);
    } catch (error) {
      console.error(chalk.red(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`));
      process.exit(1);
    }
  });

program.parse();
