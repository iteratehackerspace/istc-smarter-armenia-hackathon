import React from 'react';
import { render } from 'react-dom';

const { Component } = React;

class Application extends Component {
  constructor(){
    super();
    this.state = {workoutPlaces: [], active: [true, false, false],
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  async componentDidMount() {
    setInterval(async () => {
      let request = 'http://localhost:8080/main_sports_statistics';
      let recordsHistory = await fetch(request);
      let all_records = await recordsHistory.json();
      this.setState({workoutPlaces: all_records.payload});
    }, 1*1000);

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
        background: '#ccc',
        height: '100vh',
        background: 'linear-gradient(to right, #c7bfec, #73baaf)',
        color: '#E6DDDD',
      },
      header: {
        textAlign: 'center',
        background: 'linear-gradient(to right, #c7bfec, #73baaf)',
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
      },
      innerDivs: {
        width: '50%',
        textAlign: 'center',
      },
      openChallenges: {
        width: '50%',
        textAlign: 'center',
      },
    }
    const bringPlaces = this.state.workoutPlaces.map((stats, idx) => {
      const rowFlex = {
        display: 'flex',
        textAlign: 'center',
        transition: '2s',
        justifyContent: 'center',
      };
      const basicFlex = {
        display: 'flex',
        flexDirection: 'column',
      };
      const sample = {
        transition: '2s',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };
      const center = {
        textAlign: 'center',
        justifyContent: 'center',
        width: 'calc(100%/3)',
      };
      const styleArray = [
        {
          flexItemColumnActive: {
            height: '70vh',
            background: 'url(http://d1vmp8zzttzftq.cloudfront.net/wp-content/uploads/2012/05/Travel-To-Armenia-Opera-Theater-Building-Yerevan-Armenia-1600x1053.jpg)',
          },
          flexItemColumnPassive: {
            cursor: 'pointer',
            background: 'url(http://d1vmp8zzttzftq.cloudfront.net/wp-content/uploads/2012/05/Travel-To-Armenia-Opera-Theater-Building-Yerevan-Armenia-1600x1053.jpg)',
            height: '50px',
          },
        },
        {
          flexItemColumnActive: {
            height: '70vh',
            background: 'url(http://abrill.net/worldtour/wp-content/uploads/2012/07/Armenia-23.jpg)',
          },
          flexItemColumnPassive: {
            cursor: 'pointer',
            background: 'url(http://abrill.net/worldtour/wp-content/uploads/2012/07/Armenia-23.jpg)',
            height: '50px',
          },
        },
        {
          flexItemColumnActive: {
            height: '70vh',
            background: 'url(http://www.hayweb.ru/uploads/posts/2014-06/1402979319_rl2mkiwyszs.jpg)',
          },
          flexItemColumnPassive: {
            cursor: 'pointer',
            background: 'url(http://www.hayweb.ru/uploads/posts/2014-06/1402979319_rl2mkiwyszs.jpg)',
            height: '50px',
          },
        },
      ];
      const getUsers = this.state.workoutPlaces[idx].usersWhoCompletCh.map((user, idx) => {
        return(
          <div style={rowFlex}>
            <div style={center}>
              {user.username}
            </div>
            <div style={center}>
              {user.challenge}
            </div>
            <div style={center}>
              {user.time}sec
            </div>
          </div>
        );
      });
      const getChallenges = this.state.workoutPlaces[idx].activeChallenges.map((chal, idx) => {
        return(
          <div style={rowFlex}>
            <div style={center}>
              {chal.whoMade}
            </div>
            <div style={center}>
              {chal.name}
            </div>
            <div style={center}>
              {chal.description}
            </div>
          </div>
        )
      })
        return(
            <div style={this.state.active[idx] ? {...basicFlex, ...sample, ...styleArray[idx].flexItemColumnActive} : {...basicFlex, ...sample, ...styleArray[idx].flexItemColumnPassive}} onClick={this.clickHandler} id={idx}>
              <div style={style.flexItem}>
                <div style={style.item}>
                  {stats.place}
                </div>
                <div style={style.item}>
                  {stats.usersWhoCompletCh.length}
                </div>
                <div style={style.item}>
                  {stats.activeChallenges.length}
                </div>
              </div>
              <div style={this.state.active[idx] ? style.innerItemActive : style.innerItemPassive}>
                <div style={style.innerDivs}>
                  <div style={basicFlex}>
                    <div>
                      High Scores
                    </div>
                    <div style={rowFlex}>
                      <div style={center}>
                        Username
                      </div>
                      <div style={center}>
                        Challenge
                      </div>
                      <div style={center}>
                        Time
                      </div>
                    </div>
                    {getUsers}
                  </div>
                </div>
                <div style={style.innerDivs}>
                  <div style={basicFlex}>
                    <div>
                      Open Challenges
                    </div>
                    <div style={rowFlex}>
                      <div style={center}>
                        Username
                      </div>
                      <div style={center}>
                        Challenge
                      </div>
                      <div style={center}>
                        description
                      </div>
                    </div>
                    {getChallenges}
                  </div>
                </div>
              </div>
            </div>
        )
      })
    return (
      <div style={style.bigContainer}>
        <header style={style.header}>
          Yerevan WorkOut
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
