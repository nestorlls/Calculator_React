import '../styleSheets/BotonClear.css';

const BotonClear = (props) => {
  return (
    <div className='btn-clear' onClick={props.listenClear}>
      {props.children}
    </div>
  );
};

export default BotonClear;
