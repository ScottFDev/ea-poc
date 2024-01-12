import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import MapComponent from './components/map';

const App = () => {
  const [overlayImage, setOverlayImage] = useState(null);

  const handleFileUpload = (imageURL) => {
    setOverlayImage(imageURL);
  };

  return (
    <div>
      <FileUpload onFileUpload={handleFileUpload} />
      <MapComponent overlayImage={overlayImage}  />
    </div>
  );
};

export default App;
