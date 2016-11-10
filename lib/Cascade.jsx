import React from 'react';

const { Component } = React;

export default
class Workout extends Component {
  constructor() {
    super();
  }
  render () {
    const ledgerStyle = {
     styleee: {
       display: 'flex',
       color: "white",


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
           background: 'linear-gradient(to right, #11B9AE, #E18610)',
           //scrollBehavior: 'smooth',
           transition: 'ease-in 2s',
           //animationName: 'anim',
           textAlign: 'center',
           height: '3rem',
           width: '100%',
           maxWidth: '50%'
     },
     color: {
       backgroundColor: 'black',
       border: '1px'
     },
   };
    return (
      <div>
      <div style = {ledgerStyle.color}>
        <li style = {ledgerStyle.listItems}>
Cascade
        </li>
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

           Record
          </li>

      </div>
    </div>




  </div>
    );
};
}
