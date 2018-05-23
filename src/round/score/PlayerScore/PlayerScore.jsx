import * as React from 'react';
import Avatar from '../../../components/avatar/Avatar';
import './player-score.css';
// import {  Button, Icon } from 'react-materialize';


export default class PlayerScore extends React.Component {
    constructor(props) {
      super(props);   
    }

    onScoreChange = e => {
        this.props.onScoreChange(e);
    }
  
    render() {
      return (

            <div className={this.props.score ? 'player-score score-recorded' : 'player-score' } 
                // onTouchMove={ e => {
                //     console.log(e.touches[0].screenX)
                // }}
            >
                <div className="user col">
                    <Avatar label={this.props.player.id} />
                </div>
                <div className="input-wrap col">
                    <input 
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
                    <p>Snips Area</p>
                </div>

            </div>
      )
    }

}