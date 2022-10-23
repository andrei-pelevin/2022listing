import './App.css';
import Listing from './Components/Listing';
import items from './data/etsy.js'

function App() {
  const data = items
  return (
    <div className="App">
      <Listing data={data}/>
    </div>
  );
}

export default App;
