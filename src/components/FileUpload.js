import React, { useState } from 'react';
import { fetchFiles, uploadFile } from '../services/api';

const FileUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      try {
        await uploadFile(file);
        const response = await fetchFiles(); // Fetch updated files list after upload
        onUpload(response.data);
        setFile(null); // Clear the file input
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <div className="file-upload">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-2">Upload</button>
    </div>
  );
};

export default FileUpload;
