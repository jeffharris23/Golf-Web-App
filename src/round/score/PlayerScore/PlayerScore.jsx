import * as React from 'react';

import './player-score.css';
import Snips from './snips/Snips';
import Scrubber from './scrubber/Scrubber';

export default class PlayerScore extends React.Component {
    constructor(props) {
      super(props);   

      this.state = {
          snips : props.player.snips
      };
    }

    onScoreChange = e => {
        this.props.onScoreChange(e);
    }

    scrubChange = type => {
        let snips = this.state.snips;
        if(type === "add") {
            snips++;
        } else {
            snips--;
            if(snips < 0) {
                snips = 0;
            }
        }

        this.setState({
            snips: snips
        });

        this.props.snipsChange({
            id: this.props.player.id,
            snips: snips
        });
  
    }
  
    render() {
      return (

            <div className={this.props.score ? 'player-score score-recorded' : 'player-score' } >
                <div className="user col">
                    <Scrubber 
                        label={this.props.player.id} 
                        scrubChange={this.scrubChange}
                    />
                </div>
                <div className="input-wrap col">
                    <input 
                        className="score-input"
                        type="number" 
                        min="1" 
                        max="12" 
                        name={this.props.player.id} 
                        value={this.props.score !== null ? this.props.score : this.props.par } 
                        onChange={this.props.onScoreChange}
                        onFocus={this.props.onScoreChange}
                    />

                </div>
                <div className="actions col">
                    <Snips snips={this.state.snips}/>
                </div>

            </div>
      )
    }

}