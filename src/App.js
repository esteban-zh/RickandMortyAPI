import {useState, useEffect} from 'react';
import CardList from './components/CardList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const loadData = () => {
      fetch("https://rickandmortyapi.com/api/character")
      .then ((data) => data.json())
      .then ((data) => {
        console.log("datos", data);
        setCharacters(data.results);
      });
    };
    loadData();
  }, []);

  return (
    <div className="App">
      <h1>rick and morty characters</h1>
      <CardList items={characters}/>
    </div>
  );
}

export default App;
