import './Services.css';

const services = [
  {
    title: 'Corte',
    description:
      'Cortes femininos personalizados para valorizar o formato do rosto, o estilo e a rotina de cada cliente.',
  },
  {
    title: 'Coloração',
    description:
      'Colorações com acabamento profissional, respeitando a saúde dos fios e o resultado desejado.',
  },
  {
    title: 'Mechas',
    description:
      'Técnicas de iluminação para criar movimento, luminosidade e um visual moderno nos cabelos.',
  },
  {
    title: 'Tratamentos capilares',
    description:
      'Protocolos de cuidado para hidratação, reconstrução, nutrição e recuperação da fibra capilar.',
  },
  {
    title: 'Escova',
    description:
      'Finalização com brilho, leveza e movimento para deixar os fios alinhados e elegantes.',
  },
  {
    title: 'Babyliss',
    description:
      'Ondas modeladas com acabamento natural ou mais definido, ideal para eventos e ocasiões especiais.',
  },
  {
    title: 'Manicure e pedicure',
    description:
      'Cuidados para unhas das mãos e dos pés com capricho, higiene e acabamento delicado.',
  },
];

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <span className="services__tag">Nossos serviços</span>

        <h2 className="section-title">Cuidados pensados para você</h2>

        <p className="section-subtitle">
          Trabalhamos com marcas profissionais como JOICO, MED e TRUSS.
        </p>

        <div className="services__grid">
          {services.map((service) => (
            <article className="services__card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;