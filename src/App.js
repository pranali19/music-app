import logo from "./logo.svg";
import "./App.css";
import MusicAppMain from "./components/musicAppMain";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <MusicAppMain />
      </div>
    </ChakraProvider>
  );
}

export default App;
