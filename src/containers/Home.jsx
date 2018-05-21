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
              <Button waves='light' node='div' className="btn-link-in"><NavLink exact to='/course' className="nav-item nav-link">New Game</NavLink></Button>
            </div>
            <div>
              <Button waves='light' className="btn-link-in"><NavLink exact to='/players' className="nav-item nav-link">Resume Game</NavLink></Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
