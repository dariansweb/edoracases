// Import Node.js 'path' module for handling and transforming file paths
import path from "path";
// Import 'fs' module with promises to read files asynchronously
import { promises as fs } from "fs";

// This is the default export of the handler function that will handle incoming HTTP requests
export default async function handler(req, res) {
  // Step 1: Build the path to the 'clients.json' file
  // 'process.cwd()' returns the current working directory of the Node.js process, which is the root of your project
  // 'path.join' is used to safely build the file path (it works across different operating systems)
  const filePath = path.join(process.cwd(), "api", "clients", "clients.json");

  try {
    // Step 2: Read the contents of the 'clients.json' file asynchronously
    // 'fs.readFile' reads the file contents. We're using 'utf-8' encoding to get it as a readable string.
    const jsonData = await fs.readFile(filePath, "utf-8");

    // Step 3: Parse the JSON data
    // 'JSON.parse' converts the string content of the file into a JavaScript object
    const data = JSON.parse(jsonData);

    // Step 4: Send the parsed data as a JSON response
    // 'res.status(200)' sets the HTTP status code to 200 (OK)
    // 'res.json(data)' sends the parsed data in JSON format back to the client
    res.status(200).json(data);
  } catch (error) {
    // Step 5: Error handling
    // If there's an error (like the file doesn't exist or can't be read), it will be caught here
    // 'res.status(500)' sets the HTTP status to 500 (Internal Server Error)
    // 'res.json({ error: 'message' })' sends an error message as JSON back to the client
    console.error("Error reading clients.json:", error);
    res.status(500).json({ error: "Failed to load clients.json" });
  }
}
