import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// components----
import Form from './Form';
import Player from './Players';

const App = () => {
  return (
    <div className="container">
      <Player />
      <Form />
    </div>
  );

}

export default App;