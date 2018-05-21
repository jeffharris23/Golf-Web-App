import * as React from 'react';
import { Title } from '../components/title/Title';

import { connect } from 'react-redux'; 
import { updatePlayers } from '../store/actions/players';



class Course extends React.Component {
  constructor(props) {
    super(props);


  }
 
  render() {
    return (
      <section className="page">
        <div className="container center">
          <Title title="Select a Course" />
        </div>

      </section>
    );
  }
}


const mapDispatchToProps = {
  updatePlayers,
};

function mapStateToProps(state) {
  return { 
    playersList: state.players.playersList,
    players: state.players.players 
    
  
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);
