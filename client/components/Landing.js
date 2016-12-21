import React from 'react';

const Landing = () => {
  const bgUrl = './images/background/inkscape.jpg';
  const bg = {
    height: window.innerHeight,
    width: window.innerWidth,
    backgroundImage: 'url(' + bgUrl + ')',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  return (
    <div className="intro wow fadeIn" data-wow-duration="1s" data-wow-delay="1s" style={bg}>
      <div className="inspo wow fadeIn" data-wow-duration="1s" data-wow-delay="2s">
        the things you are passionate about are not random, they are your calling
      </div>
    </div>
  )
}

export default Landing;