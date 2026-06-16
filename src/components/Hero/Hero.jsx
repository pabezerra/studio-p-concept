import './Hero.css';
import heroLocal from '../../assets/images/hero-local.jpg';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__container">
        <div className="hero__content">
          <span className="hero__tag">Studio P Concept</span>

          <h1>Seu cabelo merece um cuidado especial.</h1>

          <p>
            Salão de beleza especializado em corte, coloração, mechas,
            tratamentos capilares, escova, babyliss, manicure e pedicure.
          </p>

          <div className="hero__buttons">
            <a
              href="https://wa.me/5511974765855"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Agendar pelo WhatsApp
            </a>

            <a href="#services" className="btn-outline">
              Ver serviços
            </a>
          </div>
        </div>

        <div className="hero__image">
          <img src={heroLocal} alt="Ambiente do Studio P Concept" />
        </div>
      </div>
    </section>
  );
}

export default Hero;