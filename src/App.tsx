import { ReactElement, useEffect, useMemo, useRef, useState } from "react";
import AnotherCounter from "./components/AnotherCounter";
import Counter from "./components/Counter";
import Header from "./components/Header";
import List from "./components/List";
import SubHeading from "./components/SubHeading";
import { CounterProvider, initialState } from "./context/CounterContext";

function App(): ReactElement {
  const [count, setCount] = useState<number>(0);

  return (
    <CounterProvider count={initialState.count} text={initialState.text}>
      <div className="flex flex-col justify-center items-center bg-yellow-200 h-screen">
        <Header title="Hello" />
        <SubHeading>This is My Subheading</SubHeading>
        <Counter count={count} setCount={setCount}>
          {" "}
          <p className="text-2xl underline text-center">Counter Section</p>
        </Counter>
        <List
          items={["Coffee", "Tacos", "Code"]}
          render={(item: string) => <span>{item}</span>}
        />
        <AnotherCounter />
      </div>
    </CounterProvider>
  );
}

export default App;
