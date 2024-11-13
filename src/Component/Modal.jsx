const Modal = ({ close }) => {
  return (
    <div>
      <h1>Modal</h1>
      <button onClick={() => close(false)}>Close Modal </button>
    </div>
  );
};

export default Modal;
