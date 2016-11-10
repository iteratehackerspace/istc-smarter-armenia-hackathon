import React from 'react';
import { render } from 'react-dom';

import WorkoutSpots from './WorkoutSpots';

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
      div1Style: {
        background: 'black',
        width: '100%',
      },
      div2Style: {
        background: 'black',
        width: '100%',
        height: '100px',
        border: '1px solid white'
      },
      h1Style: {
        textAlign: 'center',
        color: 'white',
      },
      listItems: {
            listStyleType: 'none',
            color: 'white',
            fontFamily: 'sans-serif',
            margin: '0.5em auto',
            padding: '.50rem',
            wordWrap: 'break-word',
            transition: 'top 1s',
            width: '20%',
            textAlign: 'center',
          },
      stylee: {
           display: 'flex',
           background: 'linear-gradient(to right, #0080FF,#01A9DB,#DF7401 )',
           //scrollBehavior: 'smooth',
           transition: 'ease-in 2s',
           //animationName: 'anim',
           textAlign: 'center',
           height: '3rem',
           width: '100%',
     },
    };
    return(
      <div style = {styles.div1Style}>
          <h1 style = {styles.h1Style}>Yerevan Works Out</h1>
          <div style = {styles.color}>
            <div style = {styles.stylee}>
              <li style = {styles.listItems}>
                Place
              </li>
              <li style = {styles.listItems}>
                Completed challenges today
              </li>
              <li style = {styles.listItems}>
                Active challenges
              </li>
            </div>
          </div>
          <div style = {styles.div2Style}></div>
          <div style = {styles.div2Style}></div>
          <div style = {styles.div2Style}></div>
      </div>
    );
  };
};
render(<Application/>,
       document.getElementById('container'));
