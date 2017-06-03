import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import FlipMove from 'react-flip-move';
import { Players as PlayersFromDB} from './../api/players.js'; //DB Collection

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
    console.log(this.props.players);
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.props.players.map(player => (
            <p key={player._id}>
              <button onClick={() => this.incrementScore(player._id, player.score)}>
                +
              </button>
              <button onClick={() => this.decrementScore(player._id, player.score)}>
                -
              </button>
              {player.name}
              {player.score}
              <button onClick={() => this.deletePlayer(player._id)}>
                Delete
            </button>
            </p>

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