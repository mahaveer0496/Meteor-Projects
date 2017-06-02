import React from 'react';
import {
  Meteor
} from 'meteor/meteor';
import {
  render
} from 'react-dom';
import {
  Tracker
} from 'meteor/tracker';
import App from '../imports/ui/App.jsx';
import {
  Players
} from './../imports/api/players';

Meteor.startup(() => {
  Tracker.autorun(() => {
    var players = Players.find({}, { sort: { score: 1 } }).fetch();
    console.log(players);
    render(<App players={players} />, document.getElementById('app'));
  })
});