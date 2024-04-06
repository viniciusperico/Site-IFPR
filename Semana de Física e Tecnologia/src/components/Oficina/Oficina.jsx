import './style.css';
import React, { useState } from 'react';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <h2>Oficinas</h2>
      <div className="slide">
        <div className="content">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].subtitle}</p>
        </div>
      </div>
      <div className="controls">
        <button onClick={prevSlide}>Anterior</button>
        <button onClick={nextSlide}>Próximo</button>
      </div>
    </div>
  );
};

const Oficina = ({oficina1, oficina2, oficina3}) => {
  const slides = [
    { title: oficina1.nome1, subtitle: oficina1.conteudo1 },
    { title: oficina2.nome2, subtitle: oficina2.conteudo2 },
    { title: oficina3.nome3, subtitle: oficina3.conteudo3 },
  ];

  return (
    <div className="app">
      <Carousel slides={slides} />
    </div>
  );
};

export default Oficina;

