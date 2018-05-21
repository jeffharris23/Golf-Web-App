import * as React from 'react';
import './avatar.css';

export default class Avatar extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className={this.props.classWrap ? "avatar-wrap " + this.props.classWrap : "avatar-wrap" } style={{backgroundColor: this.props.bg}} key="this.props.label" data-id={this.props.label}>
                <span>
                    { this.props.label ? this.props.label.toUpperCase() : '' }
                </span>
            </div>


        )
    }
}
