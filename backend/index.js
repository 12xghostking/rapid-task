const express = require('express');
const multer = require('multer');
const { exec } = require('child_process');
const path = require('path');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors());
// Set up multer to handle file uploads
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'upload'),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});


const upload = multer({ storage });

// Define a route to handle file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'File uploaded successfully' });
});

// Define a route to provide detailed information about an uploaded file
app.get('/file_info/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(__dirname, 'upload', filename);
  
    exec(`file "${filePath}"`, (error, stdout, stderr) => {
      if (error) {
        res.status(500).json({ error: 'An error occurred while getting file information' });
        return;
      }
  
      const fileDetails = stdout.split(',').map((detail) => detail.trim());
  
      res.json({ fileDetails });
    });
  });


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});