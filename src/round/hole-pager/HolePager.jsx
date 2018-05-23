import * as React from 'react';
import './hole-pager.css';
import { Button } from 'react-materialize';

export default class HolePager extends React.Component {

    render() {
        return (
            <div className="hole-pager">
                <Button 
                    floating 
                    className='prev' 
                    waves='light' 
                    icon='chevron_left' 
                    onClick={() => this.props.prevClick()}
                    disabled={this.props.hole < 2 ? true : false}
                />
                <span className="hole-label">{this.props.hole}</span>
                <Button 
                    floating 
                    className='next' 
                    waves='light' 
                    icon='chevron_right' 
                    onClick={() => this.props.nextClick()}
                    disabled={this.props.hole > 17 || !this.props.valid ? true : false}
                />
            </div>
        )
    }

}
