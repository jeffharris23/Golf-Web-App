import * as React from 'react';
import { connect } from 'react-redux'; 
import { updateScore, updateSnips } from '../store/actions/scores';
import './matches.css';
import Match from './match/Match';




class Matches extends React.Component {
  constructor(props) {
    super(props);


  }



  render() {
    return (
      <section className="matches-wrap">

        <Match />
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
    scores: state.scores.scores,
    selectedCourse: state.course.selectedCourse,
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
