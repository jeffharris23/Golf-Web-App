import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-materialize';
import { Title } from '../components/title/Title';


class NotFound extends React.Component {
  // constructor(props) {
  //   super(props);


  // }
 

  render() {
    return (
      <section className="page center">
        <div className="container">
          <Title title="Page Not Found" />
          <div className="btn-wrap">

            <Button waves='light' node='div' className="btn-link-in"><NavLink exact to='/' className="nav-item nav-link">Return Home</NavLink></Button>

          </div>
        </div>
      </section>
    );
  }
}

export default NotFound;
