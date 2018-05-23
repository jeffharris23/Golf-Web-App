import * as React from 'react';
import './snips.css';

// var msg = new SpeechSynthesisUtterance("Back to work Paco or I'll send you back to the taco fields!");
// setTimeout(function(){ window.speechSynthesis.speak(msg); }, 1000);

export default class Snips extends React.Component {
    constructor(props) {
      super(props);   
    }


    render() {
        let snips = [];
        for (let index = 0; index < this.props.snips; index++) {
            snips.push(<span className="snip" key={index}></span>);

        }

      return (

            <div className="snips-wrap clearfix">
                {snips}
            </div>
      )
    }

}