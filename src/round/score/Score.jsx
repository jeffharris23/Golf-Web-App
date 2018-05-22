import * as React from 'react';
import { PlayerScore } from './PlayerScore/PlayerScore';


export default class Score extends React.Component {
  constructor(props) {
    super(props);
  
  }

  onScoreChange = e => {
    console.log(e.target.value, e.target.id);
  }

  render() {
    return (
      <section className="score-wrap">
        {this.props.players.map((item, index) => (
            <PlayerScore key={item.id} player={item} onScoreChange={e => this.onScoreChange(e)}/>
        ))}
        

      </section>
    );
  }
}