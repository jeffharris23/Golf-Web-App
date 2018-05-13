import * as React from 'react';
import { Title } from '../../components/title/Title';
import { BackNext } from '../../components/back-next/BackNext';
import { PlayersSelect } from './component.js';
import { connect } from 'react-redux'; 
import { updatePlayers } from '../../store/actions/players';
import './players.css';


class Players extends React.Component {
  constructor(props) {
    super(props);

    this.state =  {
      next: {
        disabled: true
      }
    }
  }

  onSelectChange = (data) => {

    let disabled = true;

    if(data.valid) {
      this.props.updatePlayers(data.playerDetails);
      disabled = false;

    }

    this.setState({
      next: {
        disabled : disabled
      }
    });
  }

 
  render() {
    return (
      <section className="page style-back-next">
        <div className="container center">
          <Title title="Number of Players" />
          <PlayersSelect 
            onSelectChange={this.onSelectChange}
            playerSelection={this.props.playersList}
            players={this.props.players}
          />
        </div>
        <BackNext 
          prev={{
            url: '/'
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

export default connect(mapStateToProps, mapDispatchToProps)(Players);
