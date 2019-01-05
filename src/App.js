import React, { Component } from 'react';
import options from './options';
import Card from './Card';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      gridSize: 5,
      outputCount: 15,
      cards: [],
    }
  }

  componentDidMount() {
    this.createCards();
  }

  createCards = () => {
    const { gridSize, outputCount } = this.state;
    const cards = [];
    
    for (let i = 0; i < outputCount; i++) {
      const row = this.shuffle(options).slice(0, gridSize*gridSize - 1);
      cards.push(row);
    }

    this.setState({ cards })
  }
  
  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  render() {
    return (
      <div className="App">
        {this.state.cards.map(card => <Card squares={card}/>)}
      </div>
    );
  }
}

export default App;
