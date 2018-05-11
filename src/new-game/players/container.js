import * as React from 'react';
import { Title } from '../../components/title/Title';
import { PlayersSelect } from './component.js';
import './players.css';


class Players extends React.Component {
  constructor(props) {
    super(props);

    //state for players can be handled here
    //todo connect to firebase to make dropdown dynamic
    this.state = {
      playerSelection: [
        {
          id: 'jg',
          name: 'James Grassie'
        },
        {
          id: 'jh',
          name: 'Jeff Harris'
        },
        {
          id: 'sj',
          name: 'Scotty Jackson'
        },
        {
          id: 'rk',
          name: 'Ryan Kornelson'
        },
        {
          id: 'bc',
          name: 'Brent Carlin'
        },                    
        {
          id: 'ar',
          name: 'Alex Reid'
        },          
      ]
    }
  }

  onSelectChange = (data) => {
    console.log(data);
  }

 
  render() {
    return (
      <section className="page">
        <div className="container center">
          <Title title="Number of Players" />
          <PlayersSelect 
            onSelectChange={this.onSelectChange}
            playerSelection={this.state.playerSelection}
          />
        </div>
      </section>
    );
  }
}

export default Players;
