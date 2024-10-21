import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const { file } = req.query; // Get the file name from the query parameter

  if (!file) {
    return res.status(400).json({ error: 'No file specified' });
  }

  try {
    // Dynamically build the path to the requested JSON file
    const filePath = path.join(process.cwd(), 'api', `${file}.json`);

    // Read and parse the JSON file
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    // Send the parsed data as the response
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load the specified file' });
  }
}
