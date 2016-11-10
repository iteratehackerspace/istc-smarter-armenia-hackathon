import React from 'react';
import { render } from 'react-dom';

const { Component } = React;

class Application extends Component {
  constructor(){
    super();
    this.state = {workoutPlaces: [{place: 'Opera', completedNumber: 0, availableNumber: 0},{place: 'Opera', completedNumber: 0, availableNumber: 0},{place: 'Opera', completedNumber: 0, availableNumber: 0}],
      active: [false, false, false],
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  componentDidMount() {
    this.conn.onmessage = (message) => {
      const reply = JSON.parse(message.data);
      switch(reply.message_type) {
        case 'new_statistics':
          this.setState({workoutPlaces: reply.payload});
          break;
      }
    }
  }
  clickHandler(e){
    console.log(e.currentTarget.id );
    let newState = this.state.active;
    newState = [false, false, false];
    newState[e.currentTarget.id] = true;
    this.setState({...this.state, active: newState});
  }
  render () {
    const style = {
      header: {
        textAlign: 'center',
        backgroundColor: 'green',
      },
      logo: {
        fontSize: '40px',
      },
      flexDescription: {
        display: 'flex',
      },
      DescDiv: {
        width: 'calc(100%/3)',
        textAlign: 'center',
        fontSize: '20px',
      },
      flexItem: {
        display: 'flex',
        cursor: 'pointer',
        width: '100%',
      },
      flexItemColumnActive: {
        display: 'flex',
        cursor: 'pointer',
        flexDirection: 'column',
        height: '300px',
        transition: '2s',
        backgroundColor: 'green',
      },
      flexItemColumnPassive: {
        display: 'flex',
        cursor: 'pointer',
        flexDirection: 'column',
        transition: '2s',
        backgroundColor: 'blue',
        height: '50px',
      },
      item: {
        width: 'calc(100%/3)',
        textAlign: 'center',
      },
      innerItemActive: {
        display: 'flex',
        transition: '2s',
        opacity: '1',
      },
      innerItemPassive: {
        display: 'none',
        transition: '2s',
        opacity: '0',
      },
      highScores: {
        width: '50%',
        textAlign: 'center',
      },
      openChallenges: {
        width: '50%',
        textAlign: 'center',
      },
    }
    const bringPlaces = this.state.workoutPlaces.map((stats, idx) => {
      return(
          <div style={this.state.active[idx] ? style.flexItemColumnActive : style.flexItemColumnPassive} onClick={this.clickHandler} id={idx}>
            <div style={style.flexItem}>
              <div style={style.item}>
                {stats.place}
              </div>
              <div style={style.item}>
                {stats.completedNumber}
              </div>
              <div style={style.item}>
                {stats.availableNumber}
              </div>
            </div>
            <div style={this.state.active[idx] ? style.innerItemActive : style.innerItemPassive}>
              <div style={style.highScores}>
                High Scores
              </div>
              <div style={style.openChallenges}>
                Open Challenges
              </div>
            </div>
          </div>
      )
    })
    return (
      <div>
        <header style={style.header}>
          <p style={style.logo}>Yerevan WorkOut</p>
        </header>
        <div style={style.flexDescription}>
          <div style={style.DescDiv}>
            Place
          </div>
          <div style={style.DescDiv}>
            Number of completed challenges
          </div>
          <div style={style.DescDiv}>
            Number of available challenges
          </div>
        </div>
        {bringPlaces}
      </div>
    );
  }
};

render(<Application/>,
       document.getElementById('container'));
