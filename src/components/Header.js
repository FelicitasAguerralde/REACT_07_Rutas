import React from 'react';
import ReactLogo from "../assets/img/react.svg";
import ReactRouter from "../assets/img/reactRouter.svg";
import Rectangle from "../assets/img/rectangle.svg";

export const Header = () => {
  return (
    <header className="header">
        <img className="react-router" src={ReactRouter} alt="react-router" />
        <h1>React Router</h1>
        <img className="react-logo" src={ReactLogo} alt="react" />
        <img className="rectangle" src={Rectangle} alt="rectangle" />
      </header>
  )
}
