import React from 'react';

// images
import logo from '../layouts/img/moz-logo.svg';
import bg from './img/about/bg.png';

// styles
const aboutPhotoStyle = {
  backgroundImage: `url(${bg})`,
};

const About = () => (
  <div className="about" id="mission">
    <div className="about__content">
      <div>
        <img className="about__logo mb6" src={logo} alt="Mozilla Mixed Reality Logo" />
        <p className="mb6">
          Our mission is to keep the Internet open to innovators, creators, and
          builders on the Web. Virtual Reality is set to change the future of
          Web interaction. The ability for anyone to access and enjoy VR
          experiences is critical. This is why Mozilla set out to bring virtual
          reality to Web browsers, and why we are enabling WebVR in Firefox.
        </p>
        {/* <a href="https://www.mozilla.org" rel="noreferrer noopener" target="_blank">Read More</a> */}
      </div>
    </div>
    <div className="about__photo" style={aboutPhotoStyle} />
  </div>
);

export default About;
