import * as React from 'react';
import './payout.css';






export default class Payout extends React.Component {
  constructor(props) {
    super(props);
  }

  getClasses = () => {
    let classes = "payout"

    if(this.props.amount > 0) {
      classes += " positive";
    }

    if(this.props.amount < 0) {
      classes += " negative";
    }    

    return classes;
  }

  render() {
    return (
        <div className={this.getClasses()}>    
            <div className="wrap"> 
                <span className="hole">Thru {this.props.hole}: </span><span className="amount">${this.props.amount}</span>
            </div>
        </div>         

    );
  }
}

