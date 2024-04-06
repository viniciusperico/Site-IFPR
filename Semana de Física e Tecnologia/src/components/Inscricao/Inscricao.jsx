import './style.css';

export default function Inscricao() {
    return (

        <div className="inscricoes-container">
        <h2>Inscrições</h2>
        <div className="inscricao-content">
          <div className="imagem-quadrada">
            <img src= "" alt="Imagem" />
          </div>
          <div className="formulario-inscricao">
            <h3>Faça sua inscrição!</h3>
            <form>
              <div className="form-group">
                <label htmlFor="nomeCompleto">Nome Completo:</label>
                <input type="text" id="nomeCompleto" name="nomeCompleto" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" />
              </div>
              <button type="submit">Inscrever</button>
            </form>
          </div>
        </div>
      </div>
        
    )

}

