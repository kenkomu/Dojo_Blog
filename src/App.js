import './App.css';
import Navbar from './navbar';
import Home from './home';
function App() {
  
  //const person = {name: 'kenneth', age: "20"}
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
