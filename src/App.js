import logo from './logo.svg';
import './App.css';
import HyperMove from './HyperMove';
import { MetaMaskProvider } from "metamask-react";
function App() {
  return (
    <MetaMaskProvider>
      <HyperMove/>
      </MetaMaskProvider>
   
  );
}

export default App;
