import * as React from 'react';
import Avatar from '../../../components/avatar/Avatar';
import './player-score.css';
import {  Button, Icon } from 'react-materialize';


export const PlayerScore = (props) => (
    <div className={props.score ? 'player-score score-recorded' : 'player-score' } 
        // onTouchMove={ e => {
        //     console.log(e.touches[0].screenX)
        // }}
    >
        <div className="user col">
            <Avatar label={props.player.id} />
        </div>
        <div className="input-wrap col">
            <input 
                type="number" 
                min="1" 
                max="12" 
                id={props.player.id} 
                value={props.score ? props.score : props.par } 
                onChange={props.onScoreChange}
            />

        </div>
        <div className="actions col">
            <Icon>local_atm</Icon>
        </div>

    </div>

);