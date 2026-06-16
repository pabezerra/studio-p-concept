import './Footer.css';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div>
          <h3>Studio P Concept</h3>
          <p>Beleza, cuidado e sofisticação em cada detalhe.</p>
        </div>

        <div className="footer__links">
          <a href="https://wa.me/5511974765855" target="_blank" rel="noreferrer">
            <FaWhatsapp />
            WhatsApp
          </a>

          <a href="https://www.instagram.com/studiop.ce" target="_blank" rel="noreferrer">
            <FaInstagram />
            Instagram
          </a>

          <span>
            <FaMapMarkerAlt />
            Rua Leopoldo de Passos Lima, 238 - Sala 2
          </span>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Studio P Concept. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;