import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-materialize';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'Home'
    };

  }
 

  render() {
    return (
      <section className="page container center">
        <h1 className="title">Choose a Game</h1>
        <div className="btn-wrap">
          
          <div>
            <Button waves='light' node='div'><NavLink exact to='/players' className="nav-item nav-link">New Game</NavLink></Button>
          </div>
          <div>
            <Button waves='light'>Resume Game</Button>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
