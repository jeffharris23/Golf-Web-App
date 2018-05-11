import * as React from 'react';
import './app-slider.css';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
export class AppSlider extends React.Component {

    constructor(props) {
        super(props);
    }       

    onAfterChange(data) {
        this.props.onAfterChange(data);
    }

    render() {
        return (
            <div className="rc-slider-wrap">
                <Slider 
                    {...this.props}        
                />
            </div>
        );
    }



}

