import * as React from 'react';


export default class StatusScore extends React.Component {

  // constructor(props) {
  //   super(props);
  //   console.log(props);
  // }

  getScore(val) {
    
    if(val > 0) return "+" + val;

    if(val < 0) return val;
    
    return "E";
  }

  render() {
    return (
        <div className="score">{this.getScore(this.props.score)}</div>
    );
  }
}

