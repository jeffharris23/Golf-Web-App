import * as React from 'react';
import { connect } from 'react-redux'; 
import { updatePlayers } from '../store/actions/players';
import { updateScore } from '../store/actions/scores';
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

  onScoreChange = e => {
    this.props.updateScore({
      id: e.target.id,
      score: parseInt(e.target.value),
      hole: this.props.match.params.hole
    });
    // console.log(e.target.value, e.target.id);
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
            hole={this.props.match.params.hole}          
            par={this.props.selectedCourse.holes[this.props.match.params.hole]}
            players={this.props.scores} 
            onScoreChange={this.onScoreChange}  
          />
        </div>

      </section>
    );
  }
}


const mapDispatchToProps = {
  updatePlayers,
  updateScore
};

function mapStateToProps(state) {
  return { 
    scores: state.scores.scores,
    selectedCourse: state.course.selectedCourse,
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Round);
