const DecreaseButton = ({ setCount }) => {
  return (
    <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
  );
};

export default DecreaseButton;
