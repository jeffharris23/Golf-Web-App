import * as React from 'react';
import './games-status.css';






export default class GamesStatus extends React.Component {
  constructor(props) {
    super(props);


  }



  render() {
    return (
        <div className="games-status">    
            <div className="score-section">
              <div className="label">F9</div>
              <div className="scores">
                <div className="score">+2</div>
                <div className="score">+1</div>
                <div className="score">E</div>
                <div className="score">E</div>
                <div className="score">E</div>
                <div className="score">E</div>
                <div className="score">E</div>
                <div className="score">E</div>
                <div className="score">E</div>
                <div className="score">E</div>
                <div className="score">E</div>
                <div className="score">E</div>
                <div className="score">E</div>
              </div>   
            </div>
            <div className="score-section">
              <div className="label">B9</div>
              <div className="scores">
                <div className="score">+1</div>
                <div className="score">E</div>
                <div className="score">-1</div>
              </div>   
            </div>    
            <div className="score-section">
              <div className="label">18</div>
              <div className="scores">
                <div className="score">+1</div>
                <div className="score">E</div>
                <div className="score">-1</div>
              </div>   
            </div>  
        </div>         

    );
  }
}

