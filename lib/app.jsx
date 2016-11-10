import React from 'react';
import { render } from 'react-dom';
import WorkoutSpots from '././WorkoutSpots.jsx';
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
    const styles = {
      divStyle: {
        background: 'black',
      },
      h1Style: {
        textAlign: 'center',
        color: 'white',
      },
    };
    return(
      <div style = {styles.divStyle}>
        <h1 style = {styles.h1Style}>Yerevan Works Out</h1>
        <WorkoutSpots/>
      </div>
    );
  };
};
render(<Application/>,
       document.getElementById('container'));
