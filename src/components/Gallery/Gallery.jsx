import './Gallery.css';

import hair1 from '../../assets/images/gal-1.jpg';
import hair2 from '../../assets/images/gal-2.jpg';
import hair3 from '../../assets/images/gal-3.jpg';
import salon from '../../assets/images/hero-local.jpg';

const galleryItems = [
  {
    image: hair1,
    title: 'Morena iluminada',
  },
  {
    image: hair2,
    title: 'Loiro iluminado',
  },
  {
    image: hair3,
    title: 'Mechas naturais',
  },
  {
    image: salon,
    title: 'Nosso espaço',
  },
];

function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <span className="gallery__tag">Galeria</span>

        <h2 className="section-title">
          Resultados que valorizam sua beleza
        </h2>

        <div className="gallery__grid">
          {galleryItems.map((item) => (
            <div className="gallery__card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div className="gallery__overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;