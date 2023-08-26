import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './styles.css';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [fileDetails, setFileDetails] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFile = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('https://rapid-backend.onrender.com/upload', formData); // Use Axios for the POST request
        console.log(response.data); // Check the response in the browser console
        setFileDetails('File uploaded successfully'); // Update fileDetails with a message
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const getFileDetails = async () => {
    try {
      const response = await axios.get(`https://rapid-backend.onrender.com/file_info/${file.name}`); // Use Axios for the GET request
      console.log(response.data); // Check the response in the browser console
      setFileDetails(response.data.fileDetails);
    } catch (error) {
      console.error('Error getting file details:', error);
    }
  };

  return (
    <div className="card upload-card">
      <div className="card-body">
        <h5 className="card-title upload-title">Upload File</h5>
        <input type="file" onChange={handleFileChange} className="form-control mb-3" />
        <button onClick={uploadFile} className="btn btn-primary upload-button">
          Upload
        </button>
        <button onClick={getFileDetails} className="btn btn-secondary mt-2">
          Get File Details
        </button>
        {fileDetails && (
          <div className="mt-3">
            <div className="card">
              <div className="card-body">
                <h6>File Information:</h6>
                <pre>{fileDetails}</pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadForm;
