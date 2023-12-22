import React, { useEffect, useState } from 'react';
import 'react-html5video/dist/styles.css';
import { Media } from '../images';


const VideoCards = () => {
  const [ReactHtml5Video, setReactHtml5Video] = useState(null);

  useEffect(() => {
    // Check if the code is running on the client side
    if (typeof window !== 'undefined') {
      import('react-html5video').then((module) => {
        setReactHtml5Video(module.default);
      });
    }
  }, []); // Empty dependency array ensures this runs only once after mount

  return (
    <div>
      <h1>We the best</h1>
      {ReactHtml5Video && (
        <ReactHtml5Video.DefaultPlayer autoplay loop>
          <source src="https://www.youtube.com/embed/nLQ-9vfEjUI?si=IWZ2L3J2BIe6tWBH" type="video/webm" />
        </ReactHtml5Video.DefaultPlayer>
      )}
      <div>
        {Media.map((file, index) => (
          <div className="media" key={index}>
            {file.type === 'image' ? (
              <img src={file.url} alt="" />
            ) : (
              <h1>no videos found</h1>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCards;
