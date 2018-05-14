import * as React from 'react';
import { BackNext } from '../components/back-next/BackNext';
import { Avatar } from '../components/avatar/Avatar';
import HorizontalScroller from '../components/horizontal-scroller/HorizontalScroller';
import { connect } from 'react-redux'; 
import { updatePlayers } from '../store/actions/players';
import './games.css';
import AddGame from './add-game/AddGame';
import { Button, Icon } from 'react-materialize';


class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        next: {
            disabled: true
        }
    }

  }


 
  render() {
    return (
      <section className="page style-back-next ntp">
        <HorizontalScroller>
          <Avatar label="JH" classWrap="bg-grey-2"/>
          <Avatar label="JG" classWrap="bg-grey-2"/>
          <Avatar label="SJ" classWrap="bg-grey-2"/>
          <Avatar label="RK" classWrap="bg-grey-2"/>
          <Avatar label="RK" classWrap="bg-grey-2"/>
          <Avatar label="RK" classWrap="bg-grey-2"/>
        </HorizontalScroller>      
        <div className="container center">
          <AddGame/>
          <AddGame/>

          
          <div className="btn-wrap center">
            <Button waves='light'><Icon className="before">add</Icon>Add Game</Button>

          </div>
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
