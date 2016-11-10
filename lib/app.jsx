import React from 'react';
import { render } from 'react-dom';

const { Component } = React;

const pseudorandom = [
  {
    name: "Gohar",
    id: Math.random(),
    competition: "Running",
    place: 1,
  },
  {
    name: "Edgar",
    id: Math.random(),
    competition: "Geniosity",
    place: 0,
  },
  {
    name: "EdgarJ",
    id: Math.random(),
    competition: "nothing",
    place: "last",
  }
];

class Application extends Component {
  render () {
    return (
      <div>
  {pseudorandom[0].name}
      </div>
    );
  }
};
render(<Application/>,
       document.getElementById('container'));
