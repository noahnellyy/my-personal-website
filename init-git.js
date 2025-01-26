import { execSync } from 'child_process';

function runCommand(command) {
  console.log(`Executing: ${command}`);
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to execute command: ${command}`);
    console.error(error);
    process.exit(1);
  }
}

// Initialize git repository
runCommand('git init');

// Add all files
runCommand('git add .');

// Initial commit
runCommand('git commit -m "Initial commit"');

// Rename the default branch to main
runCommand('git branch -M main');

// Add the remote origin
runCommand('git remote add origin https://github.com/noahnellyy/my-personal-website.git');

// Push to GitHub with -u flag to set upstream
runCommand('git push -u origin main');

console.log('Repository initialized and pushed to GitHub successfully.');