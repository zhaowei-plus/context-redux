import React from "react";
import { ContextProvider } from "./reducer";

import Counter from "./Counter";
import CounterTest from "./CounterTest";

const App = () => {
  return (
    <ContextProvider>
      <Counter />
      <CounterTest />
    </ContextProvider>
  );
};

export default App;
