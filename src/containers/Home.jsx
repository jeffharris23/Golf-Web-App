import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-materialize';
import { Title } from '../components/title/Title';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'Home'
    };

  }
 

  render() {
    return (
      <section className="page center">
        <div className="container">
          <Title title="Choose a Game" />
          <div className="btn-wrap stacked">
            <div>
              <Button waves='light' node='div'><NavLink exact to='/players' className="nav-item nav-link">New Game</NavLink></Button>
            </div>
            <div>
              <Button waves='light'>Resume Game</Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
