const Decrease10Button = ({ setCount }) => {
  return (
    <button onClick={() => setCount((count) => count - 10)}>
      Decrease By 10
    </button>
  );
};

export default Decrease10Button;
