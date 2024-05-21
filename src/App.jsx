import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { countAtom } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
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
  const count = useRecoilValue(countAtom);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

function Button() {
  const setCount = useSetRecoilState(countAtom);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
    </div>
  );
}

export default App;
