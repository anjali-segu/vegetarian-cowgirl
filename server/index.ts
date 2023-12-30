import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Get the __dirname equivalent in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Use the __dirname to serve static files from the React build directory
app.use(express.static(path.join(__dirname, '../client')));

// Handle any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
