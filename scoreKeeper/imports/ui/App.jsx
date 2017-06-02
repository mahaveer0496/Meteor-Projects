import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Players } from './../api/players.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    let name = this.refs.player.value;
    let score = 0;
    if (name) {
      Players.insert({
        name,
        score
      });
      this.refs.player.value = '';
    }
  }
  deletePlayer(id) {
    Players.remove({ _id: id })
  }
  render() {
    return (
      <div className="container">
        {this.props.players.map(player => (
          <p key={player._id}>
            {player.name}
            <button onClick={() => this.deletePlayer(player._id)}>
              Delete
            </button>
          </p>

        ))}
        <form onSubmit={this.submitHandler}>
          <input type="text" name="player" ref="player" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;