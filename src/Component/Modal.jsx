const Modal = ({ setIsOpen }) => {
  return (
    <div>
      <h1>Modal</h1>
      <button onClick={() => setIsOpen(false)}>Close Modal </button>
    </div>
  );
};

export default Modal;
