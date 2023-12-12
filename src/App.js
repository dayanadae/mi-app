import './App.css';
import Testimonio from './componentes/Testimonio.js'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'></div>
      <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCampp</h1>
      <Testimonio
        nombre='Emma Boston'
        pais='Suecia'
        imagen='emma'
        cargo='Ingeniera de Software'
        empresa='Spotify'
        testimonio='La Ingeniería de Software es una de las ramas de las ciencias de la computación que estudia la creación de software confiable y de calidad, basándose en métodos y técnicas de ingeniería, y brindando soporte operacional y de mantenimiento. El campo de estudio de la ingeniería de software integra ciencias de la computación, ciencias aplicadas y las ciencias básicas en las cuales se encuentra apoyada la ingeniería.'      
      />
    </div>
  );
}

export default App;
