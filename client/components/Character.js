import React from 'react';
import productIcon from '../images/icons/character/barcode-icon@2x.png';
import teamIcon from '../images/icons/character/teamwork-icon@2x.png';
import businessIcon from '../images/icons/character/barchart-icon@2x.png';

const Character = () => {
  const productTitle = '\"How you sell yourself is how you\'ll be bought\"';
  // Consider: 'Done is better than perfect'
  const productText = ['Simeon has a keen eye for product-market fit \
                        developed over years of working with skilled teams \
                        to develop product campaigns that cater to \
                        current states of technological innovation \
                        and a deep intuition for societal trends.',
                       'As a software engineer, he is able to \
                        leverage this ability to act as a \
                        cornerstone team contributor by \
                        understanding the greater picture \
                        and the overall sum of the technical parts.',
                       'In his worldview, well-written code has elegance, \
                        but beautiful technology is first and foremost \
                        a powerful tool to achieve greater means.'];

  const teamTitle = '\"No team outworks teamwork in making the dream work\"';
  const teamText = ['Through various leadership roles, \
                     Simeon has been able to stoke and \
                     appreciate the synergy that a well-functioning \
                     team can achieve over even the most \
                     incredible strivings of a single individual.',
                    'One of his highest mission priorities \
                     is to cultivate an undercurrent of \
                     empathy that informs mindful decision-making. \
                     Throughout life, he has found that \
                     most projects truly start at understanding \
                     what deeply motivates those around him.',
                    'To him, the most satisfactory way forward \
                     is one in which all stakeholders feel empowered \
                     as a result of having their voices heard.'];

  const businessTitle = '\"Companies never die, they just run out of money\"';
  const businessText = ['Simeon is skilled in business and product management \
                         and has a deep understanding of market dynamics \
                         and financial principles through a graduate-level \
                         education from the University of Southern California \
                         and several years of training on Wall Street.',
                        'He is constantly leveraging his innate understanding \
                         of cross-disciplinary analogues between the fields of \
                         business and technology to see what others don\'t.',
                        'His most unique strength is his multi-faceted depth \
                         through the lens of an engineer in helping others \
                         viably achieve their business development goals.'];

  return (
    <div className="character">
      <div className="character-module wow fadeInRight" data-wow-duration="1s" data-wow-delay="1s">
        <div className="character-title">
          <div>{productTitle}</div>
        </div>
        <div className="character-icon">
          <img src={productIcon} />
        </div>
        <div className="character-text">
          <div>{productText[0]}</div>
          <div>{productText[1]}</div>
          <div>{productText[2]}</div>
        </div>
      </div>
      <div className="character-module wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
        <div className="character-title">
          <div>{teamTitle}</div>
        </div>
        <div className="character-icon">
          <img src={teamIcon} />
        </div>
        <div className="character-text">
          <div>{teamText[0]}</div>
          <div>{teamText[1]}</div>
          <div>{teamText[2]}</div>
        </div>
      </div>
      <div className="character-module wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1.5s">
        <div className="character-title">
          <div>{businessTitle}</div>
        </div>
        <div className="character-icon">
          <img src={businessIcon} />
        </div>
        <div className="character-text">
          <div>{businessText[0]}</div>
          <div>{businessText[1]}</div>
          <div>{businessText[2]}</div>
        </div>
      </div>
    </div>
  )
}

export default Character;