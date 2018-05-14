import * as React from 'react';
import './avatar.css';

export const Avatar = (props) => (
    <div className={'avatar-wrap ' + props.classWrap} style={{backgroundColor: props.bg}}>
        <span className="label test">{props.label}</span>
    </div>
);
