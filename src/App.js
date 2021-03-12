import './App.css';
import Home from './components/Home.js'

//Podria prescindir de Home y usar App pero como explico en Home aquie podría usar react-router-dom y
//tener distintas pestañas o secciones dentro de una App mas grande, consideré mas realista dejarlo de esta forma.
function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
