import * as React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { updatePlayers } from '../store/actions/players';
import { HolePager } from './hole-pager/HolePager';
import Score from './score/Score';



class Round extends React.Component {
  constructor(props) {
    super(props);


  }

  componentWillMount() {
    const { match: { params } } = this.props;



    if(params.hole > 18 || params.hole < 1){
      this.props.history.push(`/round/1`);
    }
    


  }

  prevHole = () => {
    const temp = --this.props.match.params.hole;
    this.props.history.push(`/round/${temp}`);

  }

  nextHole = () => {
    const temp = ++this.props.match.params.hole;
    this.props.history.push(`/round/${temp}`);
  }

  
 
  render() {
    return (
      <section className="page less-pad">
        <div className="container center">
          <HolePager
            hole={this.props.match.params.hole}
            prevClick={this.prevHole}
            nextClick={this.nextHole}
          />

          <Score
            players={this.props.players}   
          />
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
    players: state.players.players,
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Round);
