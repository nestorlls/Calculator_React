import '../styleSheets/Boton.css';

function Boton(props) {
  const isOperator = (value) => {
    return isNaN(value) && value !== '.' && value !== '=';
  };

  // // Condicionales
  // if (isOperator(props.children)) {
  //   return (
  //     <div
  //       className='boton-container operator'
  //       onClick={() => props.listenClick(props.children)}>
  //       {props.children}
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div
  //       className='boton-container'
  //       onClick={() => props.listenClick(props.children)}>
  //       {props.children}
  //     </div>
  //   );
  // }

  return (
    <button
      className={`boton-container ${
        isOperator(props.children) ? 'operator' : ''
      }`.trim()}
      onClick={() => props.listenClick(props.children)}>
      {props.children}
    </button>
  );
}

export default Boton;
