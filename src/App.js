import React, { useState } from 'react';
//import { Document, Page } from 'react-pdf';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function FileUploader() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
 
  const [creationDate, setCreationDate] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);
    setCreationDate(selectedFile.lastModifiedDate);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {file && (
        <div>
        <div>
        <p> {creationDate.toLocaleString()} </p>{fileName}
       
          
          </div>
          
          <Document file={file}>
            <Page pageNumber={1} />
          </Document>
        </div>
      )}
    </div>
  );
}

export default FileUploader;



