import React from 'react'

const Art = props => {
  const bg = {
    height: window.innerHeight,
    width: window.innerWidth,
    backgroundImage: 'url(' + props.imgUrl + ')',
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
    <div className="intro wow fadeIn" style={bg}>
      <div className="inspo wow fadeIn" data-wow-duration="1s" data-wow-delay="2s">
        {/*team work makes the dream work*/}
      </div>
    </div>
  )
}

export default Art;