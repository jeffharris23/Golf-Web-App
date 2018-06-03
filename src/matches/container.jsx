import * as React from 'react';
import { connect } from 'react-redux'; 
import { updateScore, updateSnips } from '../store/actions/scores';
import './matches.css';
import Match from './match/Match';
import { getMatchesByArray } from './selectors';




class Matches extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <section className="matches-wrap">
        <div className="scroll-wrap">
          {this.props.matches.map((match, index) => (
            <Match 
              key={match.id} 
              match={match} 
              hole={this.props.hole}
              progress={this.props.round.progress}
            />
          ))}
        </div>
      </section>
    );
  }
}


const mapDispatchToProps = {
  updateScore,
  updateSnips
};

function mapStateToProps(state) {
  return { 
    matches: getMatchesByArray(state),    
    round: state.round,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
