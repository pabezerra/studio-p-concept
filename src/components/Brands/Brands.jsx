import './Brands.css';

import joicoLogo from '../../assets/images/brands/joico.png';
import medLogo from '../../assets/images/brands/med.png';
import trussLogo from '../../assets/images/brands/truss.png';

const brands = [
  {
    name: 'JOICO',
    logo: joicoLogo,
  },
  {
    name: 'MED',
    logo: medLogo,
  },
  {
    name: 'TRUSS',
    logo: trussLogo,
  },
];

function Brands() {
  return (
    <section className="brands">
      <div className="container brands__container">
        <span className="brands__tag">Produtos profissionais</span>

        <h2>Marcas que fazem parte do nosso cuidado</h2>

        <p>
          Trabalhamos com produtos reconhecidos pela qualidade, performance e
          cuidado com a saúde dos fios.
        </p>

        <div className="brands__list">
          {brands.map((brand) => (
            <div className="brands__card" key={brand.name}>
              <img src={brand.logo} alt={`Logo ${brand.name}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;