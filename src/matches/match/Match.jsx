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
              {Object.keys(this.props.match.first).map((key, index) => (
                <Avatar label={key} key={key} classWrap="small" />
              ))}
            </div>
            <div className="label">VS</div>
            <div className="second">
              {Object.keys(this.props.match.second).map((key, index) => (
                <Avatar label={key} key={key} classWrap="small" />
              ))}
            </div>
            <div className="amount-progress">
              <Payout 
                hole={this.props.progress} amount={this.props.match.payout} />
            </div>
          </div>
          <div className="games-wrap">
            {this.props.hole > 1 && (
              <GamesStatus
                hole={this.props.hole}
                games={this.props.match.games}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
