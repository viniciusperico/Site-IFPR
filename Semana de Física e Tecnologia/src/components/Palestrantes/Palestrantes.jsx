import './style.css';

export default function Palestrantes({palestrante1, palestrante2, palestrante3}) {
    return (
      <div>
        <h2 class="titulo">Palestrantes</h2>
      <div class="palestrantes-container">
      <div class="palestrante">
          <img src="" alt="Palestrante 1" />
          <h3>{palestrante1.nome1}</h3>
          <p>{palestrante1.subtitulo1}</p>
      </div>
      <div class="palestrante">
          <img src="" alt="Palestrante 2" />
          <h3>{palestrante2.nome2}</h3>
          <p>{palestrante2.subtitulo2}</p>
      </div>
      <div class="palestrante">
          <img src="" alt="Palestrante 3" />
          <h3>{palestrante3.nome3}</h3>
          <p>{palestrante3.subtitulo3}</p>
      </div>
      </div>
      </div>
    );
}