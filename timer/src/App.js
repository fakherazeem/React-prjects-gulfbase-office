import { useState, useEffect } from "react";

export default function App() {
  return (
    <>
      <Useeffect />
    </>
  );
}

function Useeffect() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // cleanup (important!)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="divv">
      <h1>Useeffect Component</h1>

      <h2>Count: {count}</h2>
      <h2>Time: {time}</h2>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}
