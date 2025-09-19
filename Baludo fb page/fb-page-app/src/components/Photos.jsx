import React, { useState } from 'react';
import PhotoViewer from './PhotoViewer';
import '../styles/Photos.css';

const photoUrls = [
  './photos/photo2.jpg',
  './photos/photo3.jpg',
  // ... more photo paths
];

function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="photos-container">
        <div className="photos-header">
            <h2>Photos</h2>
            <a href="#">Add photos/video</a>
      </div>
      <div className="photos-grid">
        {photoUrls.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index}`}
            className="photo-thumbnail"
            onClick={() => setSelectedPhoto(photo)}
          />
        ))}
      </div>

      {/* Lightbox / Modal */}
      <PhotoViewer photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </div>
  );
}

export default Photos;
