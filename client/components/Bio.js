import React from 'react';

const Bio = () => {
  const bio = 'Simeon Lee is a software engineer who is \
             currently using his creativity and grit \
             to bring ideas to life in San Francisco. \
             His focus lies in digital creation with \
             a strong emphasis on user empathy \
             and a product sense backed by \
             business and marketing experience. \
             Welcome to Simeon\'s portfolio, where he showcases \
             a range of various projects that give an idea of \
             what\'s on his mind.'
  return (
    <div className="bio">
      <div className="bio-container">
        <div className="bio-letter wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">S</div>
        <div className="bio-right wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
          <div className="bio-title">Chicago-born</div>
          <div className="bio-title">Los Angeles-educated</div>
          <div className="bio-title">New York-trained</div>
          <div className="bio-title">San Francisco-based</div>
          <div className="bio-text">{bio}</div>
        </div>
      </div>
    </div>
  )
}

export default Bio;