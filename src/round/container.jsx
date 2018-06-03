import * as React from 'react';
import { connect } from 'react-redux'; 
import { updateScore, updateSnips } from '../store/actions/scores';
import { updateProgress } from './actions';
import { updateMatches } from '../matches/actions';
import HolePager from './hole-pager/HolePager';
import Score from './score/Score';
import Scorecard from '../scorecard/container';
import Matches from '../matches/container';
import { getScoresByArray } from '../store/selectors/scores';
import './round.css';



class Round extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextValid: false
    };

  }

  componentDidMount() {
    const { match: { params } } = this.props;


    this.checkValidation();

    if(params.hole > 18 || params.hole < 1 || params.hole == undefined){
      this.props.history.push(`/round/1`);
    }


    this.props.updateProgress(params.hole);

    this.props.history.listen(() => {
      // view new URL
      this.props.updateProgress(this.props.match.params.hole);
    });
    
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   const { match: { params } } = nextProps;
  //   if(params.hole > 0 && params.hole < 19) {
  //     // this.props.updateProgress(params.hole);
  //   } else {
  //     return false;
  //   }
    
  //   return true;
  // }  

  prevHole = () => {
    const temp = --this.props.match.params.hole;
    this.props.history.push(`/round/${temp}`);

  }

  nextHole = () => {
    //for any scores that weren't touched my need update them with par for the hole
    const par = this.props.selectedCourse.holes[this.props.match.params.hole].par;
    const hole = this.props.match.params.hole;
    this.props.scores.map((player,i) => {
      if(player.holes[hole] === null) {
        this.props.updateScore({
          id: player.id,
          score: par,
          hole: hole
        });
      }
    });


    const temp = ++this.props.match.params.hole;

    this.props.updateMatches({
      progress: this.props.match.params.hole - 1,
      scores: this.props.keyScores,
      course: this.props.selectedCourse
    })

    this.props.history.push(`/round/${temp}`);
  }

  onScoreChange = e => {
    let val = e.target.value === "" ? "" : parseInt(e.target.value);
    this.props.updateScore({
      id: e.target.name,
      score: val,
      hole: this.props.match.params.hole
    });

    //check that input is valid
    this.checkValidation();
  }

  checkValidation = () => {
    let valid = true;
    this.props.scores.map(score => {
      if(score.holes[this.props.match.params.hole] === "") valid = false;
    })

    this.setState({
      nextValid: valid
    });
  } 

  snipsChange = (e) => {
    this.props.updateSnips(e);
  }
 
  render() {
    return (
      <section className="page less-pad">
        <div className="container center">
        
          <HolePager
            hole={parseFloat(this.props.match.params.hole)}
            valid={this.state.nextValid}
            prevClick={this.prevHole}
            nextClick={this.nextHole}
          />

          <Score
            hole={parseFloat(this.props.match.params.hole)}          
            par={this.props.selectedCourse.holes[this.props.match.params.hole].par}
            players={this.props.scores} 
            onScoreChange={this.onScoreChange}  
            snipsChange={this.snipsChange}
          />

        </div>

        <Matches 
          hole={parseFloat(this.props.match.params.hole)}
        />
        <Scorecard 
          header 
          history={this.props.history}
        />

      </section>
    );
  }
}


const mapDispatchToProps = {
  updateScore,
  updateSnips,
  updateProgress,
  updateMatches
};

function mapStateToProps(state) {
  return { 
    scores: getScoresByArray(state),
    keyScores: state.scores.scores,
    selectedCourse: state.course.selectedCourse,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Round);
