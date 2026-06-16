import './Contact.css';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container contact__container">
        <div className="contact__content">
          <span className="contact__tag">Contato</span>

          <h2>Agende seu horário no Studio P Concept</h2>

          <p>
            Entre em contato pelo WhatsApp ou Instagram e venha cuidar da sua
            beleza com quem entende do assunto.
          </p>

          <div className="contact__info">
            <a href="https://wa.me/5511974765855" target="_blank" rel="noreferrer">
              <FaWhatsapp />
              (11) 97476-5855
            </a>

            <a href="https://www.instagram.com/studiop.ce" target="_blank" rel="noreferrer">
              <FaInstagram />
              @studiop.ce
            </a>

            <p>
              <FaMapMarkerAlt />
              Rua Leopoldo de Passos Lima, 238 - Sala 2
            </p>

            <p>
              <FaClock />
              Segunda a Sábado, das 9h às 20h
            </p>
          </div>
        </div>

        <div className="contact__map">
          <iframe
            title="Localização Studio P Concept"
            src="https://www.google.com/maps?q=Rua%20Leopoldo%20de%20Passos%20Lima%20238%20Sala%202&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;