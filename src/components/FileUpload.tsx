import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    onFileUpload(URL.createObjectURL(file));
  }, [onFileUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/png' });

  return (
    <div {...getRootProps()} style={{ margin: '20px', padding: '20px', border: '1px dashed #ccc' }}>
      <input {...getInputProps()} />
      <p>Drag & drop a PNG file here, or click to select one</p>
    </div>
  );
};

export default FileUpload;
