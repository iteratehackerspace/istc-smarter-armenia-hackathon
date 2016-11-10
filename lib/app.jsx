import React from 'react';
import { render } from 'react-dom';

const { Component } = React;

class Application extends Component {
  constructor(){
    super();
    this.state = {workoutPlaces: [{place: 'Opera', completedNumber: 0, availableNumber: 0},{place: 'Opera', completedNumber: 0, availableNumber: 0},{place: 'Opera', completedNumber: 0, availableNumber: 0}],
      active: [true, false, false],
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
      bigContainer: {
        background: 'url(http://www.jtsstrength.com/wp-content/uploads/2013/04/stan-efferding-wallpaper1.jpg)',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      },
      header: {
        textAlign: 'center',
        backgroundColor: 'linear-gradient(0%, #c7bfec,100%, #73baaf)',
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
      item: {
        width: 'calc(100%/3)',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: '20px',
      },
      innerItemActive: {
        display: 'flex',
        transition: '2s',
        opacity: '1',
        fontWeight: '700',
        fontSize: '20px',
      },
      innerItemPassive: {
        display: 'none',
        transition: '2s',
        opacity: '0',
        fontWeight: '700',
        fontSize: '20px',
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
      const opera = {
        flexItemColumnActive: {
          display: 'flex',
          cursor: 'pointer',
          flexDirection: 'column',
          height: '70vh',
          transition: '2s',
          background: 'url(http://d1vmp8zzttzftq.cloudfront.net/wp-content/uploads/2012/05/Travel-To-Armenia-Opera-Theater-Building-Yerevan-Armenia-1600x1053.jpg)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        },
        flexItemColumnPassive: {
          display: 'flex',
          cursor: 'pointer',
          flexDirection: 'column',
          transition: '2s',
          background: 'url(http://d1vmp8zzttzftq.cloudfront.net/wp-content/uploads/2012/05/Travel-To-Armenia-Opera-Theater-Building-Yerevan-Armenia-1600x1053.jpg)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          height: '50px',
        },
      }
      const cascade = {
        flexItemColumnActive: {
          display: 'flex',
          cursor: 'pointer',
          flexDirection: 'column',
          height: '70vh',
          transition: '2s',
          background: 'url(http://abrill.net/worldtour/wp-content/uploads/2012/07/Armenia-23.jpg)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        },
        flexItemColumnPassive: {
          display: 'flex',
          cursor: 'pointer',
          flexDirection: 'column',
          transition: '2s',
          background: 'url(http://abrill.net/worldtour/wp-content/uploads/2012/07/Armenia-23.jpg)',
          height: '50px',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        },
      }
      const monument = {
        flexItemColumnActive: {
          display: 'flex',
          cursor: 'pointer',
          flexDirection: 'column',
          height: '70vh',
          transition: '2s',
          backgroundPosition: 'top center',
          background: 'url(http://www.hayweb.ru/uploads/posts/2014-06/1402979319_rl2mkiwyszs.jpg)',
          backgroundSize: 'cover',
        },
        flexItemColumnPassive: {
          display: 'flex',
          cursor: 'pointer',
          flexDirection: 'column',
          transition: '2s',
          background: 'url(http://www.hayweb.ru/uploads/posts/2014-06/1402979319_rl2mkiwyszs.jpg)',
          backgroundSize: 'cover',
          height: '50px',
        },
      }
      if(idx === 0){
        return(
            <div style={this.state.active[idx] ? opera.flexItemColumnActive : opera.flexItemColumnPassive} onClick={this.clickHandler} id={idx}>
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
      }else if(idx === 1){
        return(
          <div style={this.state.active[idx] ? cascade.flexItemColumnActive : cascade.flexItemColumnPassive} onClick={this.clickHandler} id={idx}>
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
      }else if(idx === 2){
        return(
          <div style={this.state.active[idx] ? monument.flexItemColumnActive : monument.flexItemColumnPassive} onClick={this.clickHandler} id={idx}>
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
      }
    })
    return (
      <div style={style.bigContainer}>
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
