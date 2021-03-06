import React from 'react';

// images
import apainter from '../img/built/apainter.png';
import kid from '../img/built/kid.jpg';
import puzzlerain from '../img/built/puzzlerain.jpg';

const apainterStyle = {
  backgroundImage: `url(${apainter})`,
  backgroundSize: 'cover',
};
const kidStyle = {
  backgroundImage: `url(${kid})`,
};
const puzzlerainStyle = {
  backgroundImage: `url(${puzzlerain})`,
  backgroundSize: 'cover',
};

const Built = () => (
  <div className="fxr-built">
    <div className="fxr-built__square one">
      <p>Built by Mozilla</p>
    </div>
    <div style={apainterStyle} className="fxr-built__square two" />
    <div style={puzzlerainStyle} className="fxr-built__square three" />
    <div className="fxr-built__square four">
      <div>
        <p>
          We have a bit of experience when it comes to making an awesome
          browser.
        </p>
        <p>Mozilla has been fighting for a better Internet since 1998.</p>
      </div>
    </div>
    <div style={kidStyle} className="fxr-built__square five" />
  </div>
);

export default Built;
