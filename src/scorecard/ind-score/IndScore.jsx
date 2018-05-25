import * as React from 'react';
import './ind-score.css';

export default class IndScore extends React.Component {
    constructor(props) {

        super(props);
        // console.log(props);
        this.state = {
            class: "par"
        };
    }

    getClass = () => {
        const $default = " ind-score";
        //if no score
        if(this.props.score === null) return $default;


        if(this.props.score === this.props.par) return "par" + $default;

        if(this.props.score + 1 === this.props.par) return "birdie" + $default;

        if(this.props.score + 2 === this.props.par) return "eagle" + $default;

        if(this.props.score - 1 === this.props.par) return "bogey" + $default;

        if(this.props.score - 2 === this.props.par) return "double-bogey" + $default;

        if(this.props.score - 2 > this.props.par) return "poop" + $default;
    }

    render() {
        return (
            <span className={this.getClass()}>
                {this.props.score}
            </span>
        )
    }
}
