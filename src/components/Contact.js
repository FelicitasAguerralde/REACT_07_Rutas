import React from 'react';
import GitHubLogo from '../assets/img/git.svg';
import Email from '../assets/img/mail.svg';
import Phone from '../assets/img/phone.svg';

export const Contact = () => {
  return (
    <div>
      <h2>Contactame!!!</h2>
      <div className='contact'>
      <a href="https://github.com/FelicitasAguerralde" target="_blank" rel="noopener noreferrer">
        <img src={GitHubLogo} alt="GitHub Logo" />
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=felicitas.aguerralde@gmail.com&su=Prueba"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Email} alt="Email Logo" />
      </a>
      <a href="https://wa.me/+5492494026987" target="_blank" rel="noopener noreferrer">
        <img src={Phone} alt="Phone Logo" />
      </a>
      </div>
    </div>
  )
}
