import React from 'react';
import Image from '../../Assets/Images/bedroom.jpg'
import './image.scss'

function BackgroundImage() {

  return (
    <div class="container">
      <img src={Image} alt="Logo" className="center"
        height={600}
      />
      <div>
        <p className="top-left">ENJOY THE BEST NIGHTS <br />
          OF YOUR LIFE.</p>
        <p className="description">Hospitalidade é uma arte e o Pelourinho Hotel fez dela
          <br /> uma obra-prima e transformou-a em personalização espontânea.</p>
      </div>
    </div >

  );
}

export default BackgroundImage;