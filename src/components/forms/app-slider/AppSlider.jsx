import * as React from 'react';
import './app-slider.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
export class AppSlider extends React.Component {
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

