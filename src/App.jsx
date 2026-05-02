import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 5) alert("count is greater than five");
  }, [count]);

  let obj = {
    name: "prasad",
    age: 20,
  };

  let arr = [
    obj,
    { name: "bharat", age: 20 },
    { name: "tejas", age: 22 },
    { name: "soham", age: 23 },
    { name: "pratik", age: 25 },
  ];

  return (
    <>
      <div>
        count:{count}
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          add
        </button>
        <button
          onClick={() => {
            setCount((prev) => {
              if (prev == 0) return 0;
              else return prev - 1;
            });
          }}
        >
          sub
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          reset
        </button>
        <div>
          <table border={"red"}>
            {arr.map((obj, index) => (
              <tr key={index}>
                <td>{obj.name}</td>
                <td>{obj.age}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
