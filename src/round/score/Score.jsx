import * as React from 'react';
import { PlayerScore } from './PlayerScore/PlayerScore';


export default class Score extends React.Component {
  // constructor(props) {
  //   super(props);
  
  // }


  render() {
    return (
      <section className="score-wrap">

        {this.props.players.map((item, index) => (

            <PlayerScore key={item.id} player={item} onScoreChange={this.props.onScoreChange} par={this.props.par} score={item.holes[this.props.hole]}/>
  
        ))}
        

      </section>
    );
  }
}