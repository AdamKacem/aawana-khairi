import React, { useState } from "react";
import axios from "axios";

const EventForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("http://localhost:4000/api/uploadPhoto", formData, {
        method:"POST",
        body:formData,
       
      });
      console.log(file);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default EventForm;
