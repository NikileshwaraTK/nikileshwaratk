import { useState } from "react";
import EntryForm from "./components/EntryForm";
import Hero from "./components/Hero";

function App() {
  const [entered, setEntered] = useState(false);

  return entered ? <Hero /> : <EntryForm onEnter={() => setEntered(true)} />;
}

export default App;
