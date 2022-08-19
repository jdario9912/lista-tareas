import './App.css';
import Formulario from './componentes/formulario';
import Logo from './componentes/logo';

function App() {
  return (
    <div className="App">
      <Logo />
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <Formulario />
      </div>
    </div>
  );
}

export default App;