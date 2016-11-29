import React from 'react';
import email from '../images/icons/contact/email@2x.png';
import linkedin from '../images/icons/contact/linkedin@2x.png';
import github from '../images/icons/contact/github@2x.png';
import angellist from '../images/icons/contact/angellist@2x.png';
import pdf from '../images/icons/contact/pdf@2x.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-header wow fadeInDown">
        <div className="footer-title">Let's build together.</div>
        <div className="footer-subtitle">Job proposal, freelance opportunity or even a coffee - I would like to hear from you</div>
      </div>
      {/*<a className="simeon-btn" href="/files/simeon-lee-resume.pdf" target="_blank">Download Resume PDF</a>*/}
      <div className="footer-modules wow fadeInUp">
        <a href="mailto:simeonhlee@gmail.com" target="_blank">
          <div className="email">
            <img src={email} className="contact-icon" />
            Email
          </div>
        </a>
        <a href="https://www.linkedin.com/in/simeonhlee" target="_blank">
          <div className="linkedin">
            <img src={linkedin} className="contact-icon" />
            LinkedIn
          </div>
        </a>
        <a href="https://www.github.com/simeonlee" target="_blank">
          <div className="github">
            <img src={github} className="contact-icon" />
            Github
          </div>
        </a>
        <a href="https://angel.co/simeonlee" target="_blank">
          <div className="angellist">
            <img src={angellist} className="contact-icon" />
            AngelList
          </div>
        </a>
        <a href="/files/simeon-lee-resume.pdf" target="_blank">
          <div className="pdf">
            <img src={pdf} className="contact-icon" />
            Resume
          </div>
        </a>
      </div>
    </div>
  )
}

export default Footer;