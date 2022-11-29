import "./App.css";
import React, { Component } from "react";
import logo from "./img/logo.png";
import CharactersContainer from "./components/CharactersContainer";
class App extends Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  state = {
    profile: [],
    isLoading: true,
    input: "",
  };

  componentDidMount() {
    fetch(`https://breakingbadapi.com/api/characters`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          isLoading: false,
          profile: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSearchChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    let { input, profile } = this.state;
    let searchcharac = profile.filter((items) => {
      return items.name.toLowerCase().includes(input.toLowerCase());
    });
    console.log(searchcharac);

    return (
      <>
        {console.log(this.state.profile)}
        <div className='parentBD'>
          <div className='logoBD'>
            <img src={logo} />
          </div>
          <div className='searchMain'>
            <CharactersContainer
              searchcharac={searchcharac}
              input={this.state.input}
              handleSearchChange={this.handleSearchChange}
              isLoading={this.state.isLoading}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
