import { useRef, useState } from "react";
import "./App.css";
import { Box } from "./Box";

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <div className="App">
      <Box as={"a"} href="/" ref={ref}>
        as anchor
      </Box>
      <Box as={"h1"}>As h1</Box>
      <Box as={"span"}>as span</Box>
    </div>
  );
}

export default App;
