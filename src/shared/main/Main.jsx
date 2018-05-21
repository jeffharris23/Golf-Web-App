import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../containers/Home';
import Players from '../../new-game/players/container';
import Games from '../../games/container';
import Round from '../../round/container';
import Course from '../../course/container';
import ConnectedSwitch from './connected-switch';






class Main extends React.Component {
  render() {
    return (
        <div className="main-content"> 
            <ConnectedSwitch>
                <Route exact path='/' component={Home} wrapper="home"/>
                <Route exact path='/players' component={Players} wrapper="players"/>
                <Route exact path='/games' component={Games} wrapper="games"/>
                <Route exact path='/round' component={Round} wrapper="round"/>
                <Route exact path='/course' component={Course} wrapper="course"/>
            </ConnectedSwitch>      
        </div>                     
    );
  }
}

export default Main;