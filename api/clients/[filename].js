import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const { filename } = req.query; // Get the dynamic part of the URL

  try {
    // Dynamically build the path to the requested JSON file
    const filePath = path.join(process.cwd(), 'api', 'clients', `${filename}.json`);

    // Read the file contents as a string
    const jsonData = await fs.readFile(filePath, 'utf-8');

    // Parse the JSON into an object
    const data = JSON.parse(jsonData);

    // Send the parsed JSON object as the API response
    res.status(200).json(data);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    res.status(500).json({ error: `Failed to load the file ${filename}` });
  }
}
