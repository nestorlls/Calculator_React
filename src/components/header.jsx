import fccLogo from '../image/freecodecamp-logo.png';
import '../styleSheets/Header.css';

function Header() {
  return (
    <div className='fcc-logo-container'>
      <img src={fccLogo} alt='logo de fcc' className='fcc-logo' />
    </div>
  );
}

export default Header;
