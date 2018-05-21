import * as React from 'react';
import { Title } from '../../components/title/Title';
import { BackNext } from '../../components/back-next/BackNext';
import { PlayersSelect } from './component.js';
import { connect } from 'react-redux'; 
import { updatePlayers } from '../../store/actions/players';
import './players.css';


class Players extends React.Component {
  constructor(props) {
    super(props);

    this.state =  {
      next: {
        disabled: true
      }
    }

    
  }

  


  onSelectChange = (data) => {

    let disabled = true;
  
    if(data.valid) {
      
      let temp = [...data.playerDetails];
      let usedIds = [];
      temp = temp.map(p => {
        
        if(!p.customInput) { 
          usedIds.push(p.id);
          return p;
        }

        let id = this.generateId(p.id);
        let temp = {...p};

        if(usedIds.indexOf(id) > -1) {
          id = id + "2";
        }

        temp.id = id;

        return temp;

      });

      this.props.updatePlayers(temp);
      disabled = false;

    }

    this.setState({
      next: {
        disabled : disabled
      }
    });
  }

  generateId = (val) => {
    let temp = val.split(" ");
    let it = "";


    if(temp.length > 1) {
      it = temp[0].charAt(0) + temp[1].charAt(0);
    } else {
      if(temp[0].length < 2) {
        it = temp[0].charAt(0);
      } else {
        it = temp[0].charAt(0) + temp[0].charAt(1);
      }
    }
    
    
    return it;
  }

 
  render() {
    return (
      <section className="page style-back-next">
        <div className="container center">
          <Title title="Number of Players" />
          <PlayersSelect 
            onSelectChange={this.onSelectChange}
            playerSelection={this.props.playersList}
            players={this.props.players}
          />
        </div>
        <BackNext 
          prev={{
            url: '/'
          }}
          next={{
            url: '/games',
            disabled: this.state.next.disabled,
          }}
        />
      </section>
    );
  }
}


const mapDispatchToProps = {
  updatePlayers,
};

function mapStateToProps(state) {
  return { 
    playersList: state.players.playersList,
    players: state.players.players 
    
  
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Players);
