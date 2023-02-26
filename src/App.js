import './App.css';
import Boton from './components/button';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Header from './components/header';

function App() {
  const [input, setInput] = useState('');

  const addInput = (value) => {
    setInput(input + value);
  };

  const result = () => {
    input ? setInput(evaluate(input)) : alert('invalid value');
  };

  return (
    <div className='App'>
      <Header/>
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
          <Boton listenClick={result}>=</Boton>
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
