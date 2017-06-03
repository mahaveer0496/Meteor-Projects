import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import App from '../imports/components/App.jsx';

Meteor.startup(() => {
  Tracker.autorun(() => {
    render(<App />, document.getElementById('app'));
  })
});