import * as React from 'react';
import './games-status.css';
import StatusScore from './status-score/StatusScore';




// function compareNumbers(a, b) {
//   return b - a;
// }

export default class GamesStatus extends React.Component {
  // constructor(props) {
  //   super(props);
  // }



  render() {
    return (
        <div className="games-status"> 
            {
              this.props.hole < 10 && (
                <div className="score-section f9">
                  <div className="label">F9</div>
                  <div className="scores">
                    {this.props.games.front[this.props.hole-1].map((game,index) => (

                      <StatusScore 
                        key={index} 
                        score={game.score} 
                        id={game.id} 
                        teams={{
                          first: this.props.games.first,
                          second: this.props.games.second,
                        }}
                      />
                    ))}
                  </div>   
                </div>
              )
            }   

            {
              this.props.hole > 10 && (
                <div className="score-section b9">
                  <div className="label">B9</div>
                  <div className="scores">
                    
                    {this.props.games.back[this.props.hole-1].map((game,index) => (
                     <StatusScore 
                      key={index} 
                      score={game.score} 
                      id={game.id} 
                      teams={{
                        first: this.props.games.first,
                        second: this.props.games.second,
                      }}
                    />
                    ))}
                  </div>   
                </div>    
              )
            }  

 
            <div className="score-section total">
              <div className="label">18</div>
              <div className="scores">
                  {this.props.games.overall[this.props.hole-1].map((game,index) => (
                      <StatusScore 
                        key={index} 
                        score={game.score} 
                        id={game.id} 
                        teams={{
                          first: this.props.games.first,
                          second: this.props.games.second,
                        }}
                      />
                  ))}
              </div>   
            </div>  
        </div>         

    );
  }
}

