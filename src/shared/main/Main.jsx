import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../containers/Home';
import Players from '../../new-game/players/container';






class Main extends React.Component {
  render() {
    return (
        <div className="main-content"> 
            <Switch>
                <Route exact path='/' component={Home} wrapper="home"/>
                <Route exact path='/players' component={Players} wrapper="players"/>
            </Switch>      
        </div>                     
    );
  }
}

export default Main;