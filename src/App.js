import './App.css';
import ListaDeTareas from './componentes/lista-de-tareas';
import Logo from './componentes/logo';

function App() {
  return (
    <div className="App">
      <Logo />
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;