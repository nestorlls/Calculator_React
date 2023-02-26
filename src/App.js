import './App.css';
import fccLogo from './image/freecodecamp-logo.png';
import Boton from './components/button';

function App() {
  return (
    <div className='App'>
      <div className='fcc-logo-container'>
        <img src={fccLogo} alt='logo de fcc' className='fcc-logo' />
      </div>
      <div className='container-calculator'>
        <div className='row'>
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
