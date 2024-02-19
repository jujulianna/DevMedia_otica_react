import './App.css';
import Topo from './componentes/Topo/Topo';
import Conteudo from './componentes/Conteudo/Conteudo';
import Rodape from './componentes/Rodape/Rodape';

function App() {
  return (
    <div className="container">
      <Topo></Topo>
      <Conteudo></Conteudo>
      <Rodape></Rodape>
    </div>
  );
}

export default App;
