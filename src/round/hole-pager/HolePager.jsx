import * as React from 'react';
import './hole-pager.css';
import { Button } from 'react-materialize';

export const HolePager = (props) => (
    <div className="hole-pager">
        <Button 
            floating 
            className='prev' 
            waves='light' 
            icon='chevron_left' 
            onClick={() => props.prevClick()}
            disabled={props.hole < 2 ? true : false}
        />
        <span className="hole-label">{props.hole}</span>
        <Button 
            floating 
            className='next' 
            waves='light' 
            icon='chevron_right' 
            onClick={() => props.nextClick()}
            disabled={props.hole > 17 ? true : false}
        />
    </div>

);
