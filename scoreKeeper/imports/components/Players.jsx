import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import FlipMove from 'react-flip-move';
import { Players as PlayersFromDB } from './../api/players.js'; //DB Collection

class Players extends Component {
  constructor(props) {
    super(props);
    this.deletePlayer = this.deletePlayer.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
    this.decrementScore = this.decrementScore.bind(this);
  }

  incrementScore(id, score) {
    PlayersFromDB.update(id, {
      $set: { score: score + 1 }
    })
  }
  decrementScore(id, score) {
    PlayersFromDB.update(id, {
      $set: { score: score - 1 }
    })
  }
  deletePlayer(id) {
    PlayersFromDB.remove({ _id: id })
  }
  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.props.players.map(player => (
            <div key={player._id} className="player">
              <p className="player__name">{player.name} - <span className="player__score">{player.score}</span> </p>
              <button className="button" onClick={() => this.incrementScore(player._id, player.score)}>+</button>
              <button className="button" onClick={() => this.decrementScore(player._id, player.score)}>-</button>
              <button className="button" onClick={() => this.deletePlayer(player._id)}>x</button>
            </div>
          ))}
        </FlipMove>
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    players: PlayersFromDB.find({}, { sort: { score: -1 } }).fetch()
  };
}, Players);