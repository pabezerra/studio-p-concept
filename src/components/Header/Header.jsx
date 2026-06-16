import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

import './Header.css';
import logo from '../../assets/images/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container header__container">
        <a href="#home" className="header__brand" onClick={closeMenu}>
          <img src={logo} alt="Studio P Concept" />

          <div>
            <strong>Studio P Concept</strong>
            <span>Salão de beleza</span>
          </div>
        </a>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Início</a>
          <a href="#about" onClick={closeMenu}>Sobre</a>
          <a href="#services" onClick={closeMenu}>Serviços</a>
          <a href="#gallery" onClick={closeMenu}>Galeria</a>
          <a href="#contact" onClick={closeMenu}>Contato</a>
        </nav>

        <a
          href="https://wa.me/5511974765855"
          target="_blank"
          rel="noreferrer"
          className="header__button"
        >
          Agendar
        </a>

        <button
          className="header__menu-button"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Header;