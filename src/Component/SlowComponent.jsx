// Note: This component is slow to load
const waitingForSomething = (ms) => {
  const start = Date.now();
  let now = start;
  while (now - start < ms) {
    now = Date.now();
  }
};
const SlowComponent = () => {
  waitingForSomething(2000); // just to go to return line it takes 5seconds so it is slow
  return (
    <div>
      <h1>Slow Component</h1>
      <p>This component is slow to load</p>
    </div>
  );
};

export default SlowComponent;
