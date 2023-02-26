import './App.css';
import fccLogo from './image/freecodecamp-logo.png';
import Boton from './components/button';
import Pantalla from './components/Pantalla';

function App() {
  return (
    <div className='App'>
      <div className='fcc-logo-container'>
        <img src={fccLogo} alt='logo de fcc' className='fcc-logo' />
      </div>
      <div className='container-calculator'>
        <Pantalla />
        <div className='row'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='row'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='row'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='row'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
