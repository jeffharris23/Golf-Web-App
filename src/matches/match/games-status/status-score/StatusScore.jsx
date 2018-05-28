import * as React from 'react';


export default class StatusScore extends React.Component {

  render() {
    return (
        <div className="score">{this.props.score === 0 ? "E" : this.props.score}</div>
    );
  }
}

