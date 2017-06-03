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
import App from '../imports/components/App.jsx';
import {
  Players
} from './../imports/api/players';

Meteor.startup(() => {
  Tracker.autorun(() => {
    // var players = Players.find({}, { sort: { score: -1 } }).fetch();
    render(<App />, document.getElementById('app'));
  })
});