import { useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  //   add 1 after 3 secs
  const asyncAdd = () => setTimeout(() => setCount((count) => count + 1), 3000);

  return (
    <>
      {console.log("Timer")}
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => asyncAdd()}>Async Add</button>
    </>
  );
};

export default Timer;
