import fs from "fs/promises"
import { execSync } from "child_process"

async function updatePackageJson() {
  try {
    // Read the current package.json
    const packageJson = JSON.parse(await fs.readFile("package.json", "utf8"))

    // Update the dependencies
    packageJson.dependencies = {
      ...packageJson.dependencies,
      "date-fns": "^2.30.0",
      "react-day-picker": "^8.10.1",
    }

    // Write the updated package.json
    await fs.writeFile("package.json", JSON.stringify(packageJson, null, 2))

    console.log("package.json updated successfully")

    // Remove package-lock.json and node_modules
    await fs.rm("package-lock.json", { force: true })
    await fs.rm("node_modules", { recursive: true, force: true })

    console.log("package-lock.json and node_modules removed")

    // Run npm install
    console.log("Installing dependencies...")
    execSync("npm install", { stdio: "inherit" })

    console.log("Dependencies installed successfully")
  } catch (error) {
    console.error("Error:", error)
  }
}

updatePackageJson()

