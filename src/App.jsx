import Modal from "./Component/Modal";
import SlowComponent from "./Component/SlowComponent";

import React, { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Open Modal </button>
      <div>Do somethign Here</div>
      <div>{isOpen && <Modal setIsOpen={setIsOpen} />}</div>
      <h1> App Component </h1>
      <SlowComponent />
    </div>
  );
};

export default App;
