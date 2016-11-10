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
           background: 'linear-gradient(to right, #000000, #28287A)',
           scrollBehavior: 'smooth',
           transition: 'ease-in 2s',
           animationName: 'anim',
           textAlign: 'center',
           height: '3rem',
           width: '100%',
     },
   };
    return (
      <div>
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
};
render(<Application/>,
       document.getElementById('container'));
