import { useContext, useState } from "react";
import "./App.css";
import { CountContext } from "./context/countContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
}

function CountRenderer() {
  const { count } = useContext(CountContext);
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

function Button() {
  const { setCount } = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
    </div>
  );
}

export default App;
