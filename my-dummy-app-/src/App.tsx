import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const arr: any = [];
  let count: number = 0;

  const [arr2, setarr2] = useState<any>([]);
  const [cliclCount, setClickCount] = useState<number>(0);
  const [diable, setDisable] = useState<boolean>(false);

  useEffect(() => {
    if (cliclCount > 2) {
      setDisable(true);
    }
  }, [cliclCount, arr2]);

  const handleStart = () => {
    for (let i = 0; i < 9; i++) {
      arr.map((item: number) => {});
      // arr[i] = Math.floor(Math.random() * 9);
      arr[i] = { id: i + 1, className: "grayCard" };

      setDisable(false);
      setClickCount(0);
    }
    setarr2(arr);
    console.log("created");
  };
  const handleColorChange = (id: any) => {
    setClickCount(cliclCount + 1);
    console.log("clicked");
    console.log(id);
    const updatedValue = arr2.map((item: any) => {
      if (item.id == id) {
        if (item.id == 2) {
          return { ...item, className: "greenCard" };
        } else {
          return { ...item, className: "redCard" };
        }
      } else {
        return item;
      }
    });
    console.log(updatedValue);
    setarr2(updatedValue);
  };

  return (
    <div key="1" className="App">
      <span className="head">
        <button onClick={handleStart}>start</button>
        <label>Click Count {cliclCount}</label>
      </span>

      <br></br>
      {arr2.map((item: any) => {
        count = count + 1;

        return (
          <button
            key={count}
            className={item.className}
            disabled={diable}
            onClick={() => handleColorChange(item.id)}
          >
            {item.id}
          </button>
        );
      })}
    </div>
  );
}

export default App;
