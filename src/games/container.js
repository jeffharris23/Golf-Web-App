import * as React from 'react';
import { BackNext } from '../components/back-next/BackNext';
import { connect } from 'react-redux'; 
import { updatePlayers } from '../store/actions/players';
import './games.css';
import AddGame from './add-game/AddGame';
import PlayerList from './player-list/PlayerList';
import { Button, Icon } from 'react-materialize';



class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        next: {
            disabled: true
        },
        players: ['JG', 'JH', 'RK', 'SJ'],                 
        games: [
          {
            first: [
            ],
            second: [ 
            ]
     
          }         
        ],
                
    }

  }

  addGame = () => {
    const newGame = {
      first: [
      ],
      second: [ 
      ]
    };
    
    const games = [...this.state.games];
    games.push(newGame);
    this.setState({
      games
    });
  }

  deleteGame = (index) => {
    const games = [...this.state.games];
    games.splice(index);
    this.setState({
      games
    })
  }

  updateGameState = (items,type,index) => {
    const games = [...this.state.games];
    games[index][type] = items;
    this.setState({
      games : games
    });

  }
 
  render() {
    

    return (
      <section className="page playerlist-fixed style-back-next ntp">

          <PlayerList players={this.state.players} />      

          <div className="container">
            {this.state.games.map((item, index) => (
              <AddGame 
                key={index} 
                first={item.first} 
                second={item.second}
                index={index}
                onGameChange={(items,type) => {
                  this.updateGameState(items,type,index)
                }}      
                deleteGame={(index) => {this.deleteGame(index)}}  
              />
            ))}
          </div>
          <div className="btn-wrap center">
            <Button waves='light' onClick={this.addGame}>Add Game <Icon>add</Icon></Button>
          </div>



          
          <BackNext 
            prev={{
              url: '/players'
            }}
            next={{
              url: '/games',
              disabled: this.state.next.disabled,
            }}
          />
        
      </section>
    );
  }
}


const mapDispatchToProps = {
  updatePlayers,
};

function mapStateToProps(state) {
  return { 
    playersList: state.rootReducer.playersList,
    players: state.rootReducer.players 
    
  
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
