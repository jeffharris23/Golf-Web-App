import * as React from 'react';
import './match.css';
import Avatar from '../../components/avatar/Avatar';
import Payout from './payout/Payout';
import GamesStatus from './games-status/GamesStatus';
import ClickHold from '../../components/click-hold/ClickHold'; 


export default class Match extends React.Component {

 
  constructor(props) {
    super(props);

    this.time = 0.2;
  }

  render() {
    const team1 = Object.keys(this.props.match.first)[0];
    const team2 = Object.keys(this.props.match.second)[0];
    return (
      <div className="match">
        <div className="content-wrap">
          <div className="players-wrap">
            <ClickHold 
              time={this.time}
              onClickNHold={start => this.props.addPress(start, team1, this.props.match.id)}
            >
              <div className="first">
                {Object.keys(this.props.match.first).map((key, index) => (
                  <Avatar label={key} key={key} classWrap="small" />
                ))}
              </div>
            </ClickHold>
            <div className="label">VS</div>
            <ClickHold 
              time={this.time}
              onClickNHold={start => this.props.addPress(start, team2, this.props.match.id)}
            >            
              <div className="second">
                {Object.keys(this.props.match.second).map((key, index) => (
                  <Avatar label={key} key={key} classWrap="small" />
                ))}
              </div>
            </ClickHold>
            <div className="amount-progress">
              <Payout 
                hole={this.props.progress} amount={this.props.match.payout} />
            </div>
          </div>
          <div className="games-wrap">
            {this.props.progress > 0 && (
              <GamesStatus
                hole={this.props.hole}
                progress={this.props.progress}
                games={this.props.match.games}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
