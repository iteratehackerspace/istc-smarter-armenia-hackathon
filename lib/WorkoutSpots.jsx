import React from 'react';

const { Component } = React;

export default
class WorkoutSpots extends Component {
  constructor() {
    super();
  }
  render () {
    const ledgerStyle = {
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
     color: {
       backgroundColor: 'green',
     },
   };
    return (
      <div style = {ledgerStyle.color}>
        <div style = {ledgerStyle.stylee}>
          <li style = {ledgerStyle.listItems}>
            Name
          </li>
          <li style = {ledgerStyle.listItems}>
            Score
          </li>
          <li style = {ledgerStyle.listItems}>
	          Field
          </li>
          <li style = {ledgerStyle.listItems}>
            Place
          </li>
          <li style = {ledgerStyle.listItems}>
	          Record
          </li>
        </div>
      </div>
    );
};
}
