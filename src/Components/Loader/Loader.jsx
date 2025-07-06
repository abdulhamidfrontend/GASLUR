import "../../../src/Loader.css";

const Loader = () => {
  const text = "GASLUR";

  return (
    <div className="loader-container">
      <div className="gaslur-letters">
        {text.split("").map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
