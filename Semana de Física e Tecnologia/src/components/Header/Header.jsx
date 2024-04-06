import './style.css';

export default function Header() {
    return (
        <header  className="header-container">
        <div className="left">
            <img className="logo" src="" alt="LOGO-IFPR" />
        </div>
        <nav className="right">
            <ul>
                <li><a href="inicio">Inicio</a></li>
                <li><a href="evento">Evento</a></li>
                <li><a href="palestrantes">Palestrantes</a></li>
                <li><a href="oficinas">Oficinas</a></li>
                <li><a href="cronograma">Cronograma</a></li>
                <li><a href="inscricao">Inscrição</a></li>
            </ul>
        </nav>
    </header>
    )
}
