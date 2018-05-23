import * as React from 'react';
import Avatar from '../../../../components/avatar/Avatar';
import { Throttle } from 'react-throttle';

let scrubX = 0;

export default class Scrubber extends React.Component {
    constructor(props) {
      super(props);   
     
    }

    reset = () => {
        scrubX = 0;
    }

    scrubStart = e => {
        scrubX = e.touches[0].screenX;
    }

    scrubEnd = e => {
        scrubX = 0;
        
    }    

    scrubMove = e => {
        let direction = "";

        if(e.touches[0].screenX > scrubX) {
            
            direction = "add";
            
        } else {

            direction = "minus";       

        }

        this.props.scrubChange(direction);

    }


    render() {

      return (
        <Throttle time="100" handler="onTouchMove">
            <div 
                className="scrubber-wrap"
                onTouchMove={this.scrubMove}
                onTouchStart={this.scrubStart}
                onTouchEnd={this.scrubEnd}
                onClick={() => this.props.scrubChange('add')}
            >
                <Avatar label={this.props.label} />
            </div>
        </Throttle>
      )
    }

}