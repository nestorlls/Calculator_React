import './App.css';
import fccLogo from './image/freecodecamp-logo.png';
import Boton from './components/button';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const addInput = (value) => {
    setInput(input + value);
  };

  return (
    <div className='App'>
      <div className='fcc-logo-container'>
        <img src={fccLogo} alt='logo de fcc' className='fcc-logo' />
      </div>
      <div className='container-calculator'>
        <Pantalla input={input} />
        <div className='row'>
          <Boton listenClick={addInput}>1</Boton>
          <Boton listenClick={addInput}>2</Boton>
          <Boton listenClick={addInput}>3</Boton>
          <Boton listenClick={addInput}>+</Boton>
        </div>
        <div className='row'>
          <Boton listenClick={addInput}>4</Boton>
          <Boton listenClick={addInput}>5</Boton>
          <Boton listenClick={addInput}>6</Boton>
          <Boton listenClick={addInput}>-</Boton>
        </div>
        <div className='row'>
          <Boton listenClick={addInput}>7</Boton>
          <Boton listenClick={addInput}>8</Boton>
          <Boton listenClick={addInput}>9</Boton>
          <Boton listenClick={addInput}>*</Boton>
        </div>
        <div className='row'>
          <Boton listenClick={addInput}>=</Boton>
          <Boton listenClick={addInput}>0</Boton>
          <Boton listenClick={addInput}>.</Boton>
          <Boton listenClick={addInput}>/</Boton>
        </div>
        <div className='row'>
          <BotonClear listenClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
