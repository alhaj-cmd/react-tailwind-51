
import './App.css';
import AssinChart from './components/AssinChart/AssinChart';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="text-6xl font-bold underline">
      Hello world!
    </h1>
    <Pricing></Pricing>
    <AssinChart></AssinChart>
    </div>
  );
}

export default App;
