import * as React from 'react';
import Avatar from '../../../components/avatar/Avatar';
import './player-score.css';
import { Input } from 'react-materialize';


export const PlayerScore = (props) => (
    <div className="player-score" 
        // onTouchMove={ e => {
        //     console.log(e.touches[0].screenX)
        // }}
    >
        <div className="user col">
            <Avatar label={props.player.id} />
        </div>
        <div className="input-wrap col">
            <Input id={props.player.id} type="number" s={12} defaultValue="4" min="1" max="15" onChange={(e) => props.onScoreChange(e)}/>
        </div>
        <div className="actions col">
            <button>Bets</button>
        </div>

    </div>

);