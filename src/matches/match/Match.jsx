import * as React from 'react';
import './match.css';
import Avatar from '../../components/avatar/Avatar';
import Payout from './payout/Payout';
import GamesStatus from './games-status/GamesStatus';




export default class Match extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="match">
        <div className="content-wrap">
          <div className="players-wrap">
            <div className="first">
              {this.props.match.first.map((id, index) => (
                <Avatar label={id} key={index} classWrap="small"/>
              ))}
            </div>
            <div className="label">
              VS 
            </div>  
            <div className="second">
              {this.props.match.second.map((id, index) => (
                  <Avatar label={id} key={index} classWrap="small"/>
                ))}
            </div>    
            <div className="amount-progress">    
                <Payout hole={this.props.hole} amount={this.props.match.payout} />
            </div>         
          </div>
          <div className="games-wrap">
            <GamesStatus hole={this.props.hole} games={this.props.match.games}/>                 
          </div>

        </div>
      </div>
    );
  }
}

