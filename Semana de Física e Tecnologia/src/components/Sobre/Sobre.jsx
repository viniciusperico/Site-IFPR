import './style.css';

export default function Sobre() {
    return (
        <div className="container">
        <div className="section">
          <h2 className="title">EVENTO</h2>
          <h3 className="subtitle">Semana de Física e Tecnologia Semana de Física e Tecnologia Semana de Física e Tecnologia </h3>
          <div className="image-container">
            <img src="" alt="Imagem Evento" />
            <div className="info">
              <p>Informações sobre Semana de Física e Tecnologia Semana de Física e Tecnologia...</p>
              <button className="button">INSCREVA-SE</button>
            </div>
          </div>
        </div>
  
        <div className="section">
          <h2 className="partners-title">Nossas Parcerias</h2>
          <div className="partners-container">
            <img src="" alt="Parceiro 1" />
            <img src="" alt="Parceiro 2" />
            <img src="" alt="Parceiro 3" />
            <img src="" alt="Parceiro 4" />
  
          </div>
        </div>
      </div>
    );
}
