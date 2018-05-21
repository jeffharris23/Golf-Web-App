import * as React from 'react';
import { BackNext } from '../components/back-next/BackNext';
import { connect } from 'react-redux';
import { updateGames } from './actions';
import './games.css';
import AddGame from './add-game/AddGame';
import PlayerList from './player-list/PlayerList';
import { Button, Icon } from 'react-materialize';
import { withRouter } from 'react-router-dom';

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

  componentDidMount() {
    this.checkValidity();
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
  }

  nextClick = () => {
    this.removeIncompleteGames(() => {
      this.props.updateGames(this.state.games);
      this.props.history.push('/round');
    });

  }

  removeIncompleteGames = (fn) => {

    let temp = [];
    this.state.games.forEach(val => { 

      if(val.first.length > 0 && val.second.length > 0) {
        temp.push(val);
      }

    });

    this.setState({
      games: temp
    }, fn);

  }

  checkValidity = () => {

    let disabled = true;
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
            disabled: this.state.next.disabled,
            label : 'Start'
          }}
          nextHandleClick={this.nextClick}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Games));
