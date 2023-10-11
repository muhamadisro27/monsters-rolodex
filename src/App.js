import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import Search from "./components/Search";

export default function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
        response.json().then((users) => setMonsters(users));
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonster(newFilteredMonsters);
  }, [monsters, searchField]);

  function handleChange(e) {
    e.preventDefault();

    const searchString = e.target.value.toLocaleLowerCase();

    setSearchField(searchString);
  }

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <Search
        handleChange={handleChange}
        className="monster-search-box"
        type="search"
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonster} />
    </div>
  );
}
