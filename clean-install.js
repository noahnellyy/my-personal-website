import { execSync } from "child_process"

function runCommand(command) {
  console.log(`Executing: ${command}`)
  try {
    execSync(command, { stdio: "inherit" })
  } catch (error) {
    console.error(`Failed to execute command: ${command}`)
    console.error(error)
    process.exit(1)
  }
}

// Remove existing files
runCommand("rm -rf node_modules package-lock.json .next")

// Clean npm cache
runCommand("npm cache clean --force")

// Install dependencies
runCommand("npm install")

// Add all changes
runCommand("git add .")

// Commit changes
runCommand('git commit -m "Remove problematic dependencies"')

// Push to remote
runCommand("git push")

console.log("Dependencies cleaned and reinstalled successfully.")

