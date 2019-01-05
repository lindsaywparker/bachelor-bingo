import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './App.css';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { squares } = this.props;
    const bottom = squares;
    const top = bottom.splice(0, Math.floor(bottom.length / 2));

    return (
      <div className="Card">
        <h1 className="Card-header">
          Bachelor Bingo
        </h1>
        <main className="Card-grid">
          {top.map(square => <Paper className="square">{square}</Paper>)}
          {<Paper className="square">
            <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/colton-underwood-burst-onto-the-scene-during-season-14-of-news-photo-1069618920-1546466223.jpg?crop=0.843xw:0.633xh;0,0.0597xh&resize=120:*'/>
          </Paper>}
          {bottom.map(square => <Paper className="square">{square}</Paper>)}
        </main>
        <p style={{pageBreakBefore: "always"}}/>
      </div>
    );
  }
}

export default Card;
