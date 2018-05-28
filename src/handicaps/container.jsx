import * as React from 'react';
import { Title } from '../components/title/Title';
import { Input } from 'react-materialize';
import { connect } from 'react-redux'; 
import { updateHdcps } from '../store/actions/players';
import { BackNext } from '../components/back-next/BackNext';
import { getPlayersByArray } from '../store/selectors/players';

class Course extends React.Component {
  constructor(props) {
    super(props);

    let disabled = false;

    this.state =  {
      next: {
        disabled: disabled
      }
    }
  }

  inputChange = (e) => {

    this.props.updateHdcps({
        id: e.target.name,
        hdcp: e.target.value
    });
    
  }

  render() {
    return (
      <section className="page">
        <div className="container center">
          <Title title="Handicaps" />
          
            {
                this.props.players.map(player => (
                    <Input 
                        defaultValue={player.hdcp} 
                        label={player.name} 
                        type="number" 
                        key={player.id}
                        onChange={this.inputChange}
                        name={player.id}
                    />
                ))
            }
        </div>
        <BackNext 
          prev={{
            url: '/players'
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
    updateHdcps,
};

function mapStateToProps(state) {
  return { 
    players: getPlayersByArray(state)
  
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);
