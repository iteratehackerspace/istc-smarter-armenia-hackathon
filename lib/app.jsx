import React from 'react';
import { render } from 'react-dom';
import WorkoutSpots from './dropdown';
const { Component } = React;


class Application extends Component {
  constructor(){
    super();
    this.state = {elementals: [
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
    ]}
  }
  render () {
    return(
      <WorkoutSpots/>
    );
  };
};
render(<Application/>,
       document.getElementById('container'));
