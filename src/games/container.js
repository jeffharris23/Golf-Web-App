import * as React from 'react';
import { BackNext } from '../components/back-next/BackNext';
import { connect } from 'react-redux';
import { updateGames } from '../store/actions/games';
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
      players: [...props.players],
      games: [...props.games]
    };
 
  }

  addGame = () => {
    const newGame = {
      first: [],
      second: []
    };

    const games = [...this.state.games];
    games.push(newGame);
    this.setState({
      games
    }, this.changeEvent);
  };

  deleteGame = index => {
    const games = [...this.state.games];
    games.splice(index);
    this.setState({
      games
    }, this.changeEvent);
  };

  updateGameState = (items, type, index) => {
    const games = [...this.state.games];
    games[index][type] = items;
    this.setState({
      games
    }, this.changeEvent);

 
    
  };

  changeEvent = () => {

    //this will enabled next if valid
    this.checkValidity();

    //update store
    this.props.updateGames(this.state.games);



    // this.props.updatePlayers(temp);
    // console.log(this.state.games);
  }

  checkValidity = () => {

    let disabled = true;
    let temp = [];
    this.state.games.forEach(val => { 

      if(val.first.length > 0 && val.second.length > 0) {
        disabled = false;
      }

    });

    this.setState({
      next: {
        disabled: disabled
      }
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
              onGameChange={(items, type) => {
                this.updateGameState(items, type, index);
              }}
              deleteGame={index => {
                this.deleteGame(index);
              }}
            />
          ))}
        </div>
        <div className="btn-wrap center">
          <Button waves="light" onClick={this.addGame}>
            Add Game <Icon>add</Icon>
          </Button>
        </div>

        <BackNext
          prev={{
            url: '/players'
          }}
          next={{
            url: '/games',
            disabled: this.state.next.disabled
          }}
        />
      </section>
    );
  }
}

const mapDispatchToProps = {
  updateGames
};


function mapStateToProps(state) {
  return {
    games: state.games.games,
    playersList: state.players.playersList,
    players: state.players.players.map(val => val.id)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
