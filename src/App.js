
import './App.css';
import Navbar from './components/navbar/Navbar';
import WeatherApi from './components/weatherApi';
function App() {
  return (
    <div className="App">
<Navbar/>
<WeatherApi/>
    </div>
  );
}

export default App;
