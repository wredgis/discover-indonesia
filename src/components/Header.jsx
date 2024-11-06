import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  // État pour suivre l'ouverture ou la fermeture du menu
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar navbg navbar-expand-lg">
        <div className="container-fluid">
          <button 
            className="navbar-toggler" 
            type="button" 
            aria-controls="navbarNav" 
            aria-expanded={isOpen} 
            aria-label="Toggle navigation"
            onClick={toggleMenu} // Appel de la fonction toggleMenu au clic
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="/population" className="nav-link">POPULATION</Link>
              </li>
              <li className="nav-item">
                <Link to="/culture" className="nav-link">CULTURE</Link>
              </li>
              <li className="nav-item">
                <Link to="/history" className="nav-link">HISTORY</Link>
              </li>
              <li className="nav-item">
                <Link to="/geography" className="nav-link">GEOGRAPHY</Link>
              </li>
              <li className="nav-item">
                <Link to="/tourism" className="nav-link">TOURISM</Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link">NEWS</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='bigpic'>
        <img className="birds" src="/pics/flying-birds2.png" alt="birds flying over a temple indonesia" />
        <img className="flag_header" src="/pics/flag-indonesia.jpg" alt="flag indonesia" />
        <div className='honeheader'><h1>DISCOVER INDONESIA</h1></div>
      </div>
    </header>
  );
};

export default Header;
