import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : ''
    }
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters : users }))
  }

  handleChange =(e) => {
    this.setState({ searchField : e.target.value })
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           { this.state.string }
  //         </p>
  //         <button onClick = {() => {this.setState({string : 'Bye ;)'})}}>Change Text!!!!</button>
  //       </header>
  //     </div>
  // );

  render(){
    // destructuring : pulling properties and converting them into consts 
    const { monsters,searchField} = this.state ;

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())  
    );

    return (
      <div className = "App">
        <h1 className = "h1">Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange = {this.handleChange}
        />
        <CardList monsters = {filteredMonsters} />
      </div>
    )
  }
};


export default App;



// <a
// className="App-link"
// href="https://reactjs.org"
// target="_blank"
// rel="noopener noreferrer"
// >
// Learn React
// </a>