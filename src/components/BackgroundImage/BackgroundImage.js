import React from 'react';
import Image from '../../Assets/Images/bedroom.jpg'
import './image.scss'

function BackgroundImage() {

  return (
    <div class="container">
      <img src={Image} alt="Logo" className="center"
        height={600} />
      <div>
        <p className="top-left">ENJOY THE BEST NIGHTS <br />
          OF YOUR LIFE.</p>
        <p className="description">Hospitality is an art and Pelourinho Hotel made it
          a masterpiece <br />and turned it into spontaneous personalization.</p>
      </div>
    </div >

  );
}

export default BackgroundImage;