import './App.css';
import fccLogo from './image/freecodecamp-logo.png';

function App() {
  return (
    <div className='App'>
      <div className='fcc-logo-container'>
        <img src={fccLogo} alt='logo de fcc' className='fcc-logo' />
      </div>
    </div>
  );
}

export default App;
