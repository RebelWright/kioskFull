import React from 'react';

const VideoComponent = ({ videoUrl, onClose }) => {
  return (
    <div className="video-player">
      <button className="close-button" onClick={onClose}>X</button>
      <video controls autoPlay src={videoUrl}></video>
    </div>
  );
};

export default VideoComponent;