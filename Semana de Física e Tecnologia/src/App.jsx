import Header from "./components/Header/Header";
import Sobre from "./components/Sobre/Sobre";
import Palestrantes from "./components/Palestrantes/Palestrantes";
import Oficina from "./components/Oficina/Oficina";
import Cronograma from "./components/Cronograma/Cronograma";
import Inscricao from "./components/Inscricao/Inscricao";
import Info from "./components/Info/Info";



import './App.css'

export default function App() {

  return (

    <div>
      <Header />
      <Sobre />
      <Palestrantes palestrante1={{nome1:"Palestrante 1",subtitulo1: "Subtitulo Palestrante" }} palestrante2={{nome2:"Palestrante 2",subtitulo2: "Subtitulo Palestrante" }} 
      palestrante3={{nome3:"Palestrante 3",subtitulo3: "Subtitulo Palestrante" }}/>
      <Oficina oficina1={{nome1:"Nome da Oficina 1", conteudo1: "Conteudo da oficina"}} oficina2={{nome2:"Nome da Oficina 2", conteudo2: "Conteudo da oficina"}} 
      oficina3={{nome3:"Nome da Oficina 3", conteudo3: "Conteudo da oficina"}}/>
      <Cronograma />
      <Inscricao />
      <Info />
    </div>
    

  )

}

