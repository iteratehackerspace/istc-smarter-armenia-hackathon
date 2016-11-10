import React from 'react';
import { render } from 'react-dom';

const { Component } = React;

const spot = max => Math.floor(Math.random() * max);

const elementals = [
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
    //const Valodik = elementals[spot(elementals.length)].name;
    return (
      <div>
        <div>
          <li>
            Name
          </li>
          <li>
            Score
          </li>
          <li>
	          Field
          </li>
          <li>
            Place
          </li>
          <li>
	          Record
          </li>
        </div>
      </div>
    );
};
};
render(<Application/>,
       document.getElementById('container'));
