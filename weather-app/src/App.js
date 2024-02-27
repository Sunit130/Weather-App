import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';

function App() {

  const onSearchChange = (search) => {
    console.log(search);
  }

  return (
    <div className="container">
      <Search onSearchChange={onSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
