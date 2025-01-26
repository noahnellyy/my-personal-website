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

// Remove all potentially problematic files
runCommand("rm -rf node_modules package-lock.json .next")

// Clean npm cache
runCommand("npm cache clean --force")

// Install with force flag
runCommand("npm install --force")

// Commit and push changes
runCommand("git add .")
runCommand('git commit -m "Fix: Rebuild dependencies with force install"')
runCommand("git push")

console.log("Dependencies have been forcefully installed.")

