import './WhatsAppButton.css';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511974765855"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
      aria-label="Agendar pelo WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;