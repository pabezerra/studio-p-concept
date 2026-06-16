import './About.css';
import aboutImage from '../../assets/images/gal-1.jpg';

function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__container">
        <div className="about__image">
          <img src={aboutImage} alt="Resultado de cabelo feito no Studio P Concept" />
        </div>

        <div className="about__content">
          <span className="about__tag">Sobre o Studio P</span>

          <h2>Um espaço pensado para cuidar da sua beleza.</h2>

          <p>
            O Studio P Concept oferece atendimento personalizado em um ambiente
            acolhedor, moderno e preparado para realçar a beleza de cada cliente.
          </p>

          <p>
            Trabalhamos com corte, coloração, mechas, tratamentos capilares,
            escova, babyliss, manicure e pedicure, utilizando marcas profissionais
            como JOICO, MED e TRUSS.
          </p>

          <a
            href="https://wa.me/5511974765855"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Agendar atendimento
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;