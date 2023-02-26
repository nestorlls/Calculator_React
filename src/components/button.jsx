import '../styleSheets/Boton.css';

function Boton(props) {
  const isOperator = (value) => {
    return isNaN(value) && value !== '.' && value !== '=';
  };
  return (
    <div
      className={`boton-container ${
        isOperator(props.children) ? 'operator' : ''
      }`.trim()}
      onClick={() => props.listenClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;
