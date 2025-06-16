const App = ({ seconds }) => {
  const padded = seconds.toString().padStart(6, "0").split("");

  return (
    <div className="counter">
      <span>🕒</span>
      {padded.map((digit, i) => (
        <div key={i} className="digit">{digit}</div>
      ))}
    </div>
  );
};

let counter = 0;
const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(<App seconds={counter} />);
  counter++;
}, 1000);
