const IncreaseButton = ({ setCount }) => {
  return (
    <button onClick={() => setCount((count) => count + 1)}>Increase</button>
  );
};

export default IncreaseButton;
