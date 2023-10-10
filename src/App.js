import "./App.css";
import { Component } from "react";
import CardList from "./components/CardList";
import Search from "./components/Search";

class App extends Component {
  // eslint-disable-next-line
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const searchString = e.target.value.toLocaleLowerCase();

    this.setState({
      searchString,
    });
  }

  componentDidMount() {
    try {
      fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
        response.json().then((users) =>
          this.setState(() => {
            return { monsters: users };
          })
        );
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { monsters, searchString } = this.state;

    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <Search
          handleChange={this.handleChange}
          className="monster-search-box"
          type="search"
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
