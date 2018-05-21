import * as React from 'react';
import { Input } from 'react-materialize';

export class SelectOther extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showInput : false,
            finalValue: '',
            valid: false,
            index: this.props.player
        };
    }       

    selectChange = (e) => {
        
        const val = e.target.value;
        const index = e.target.selectedIndex;
        let show = false;
        let value = '';
        let valid = false;
        let label = "";

        if(val === 'newplayer') {
            show = true;
        } else {
            value = val;
            label = e.target.options[index].text;
            
            if(value !== '') {
                valid = true;
            }
        }

        this.setState({
            showInput : show,
            finalValue : value,
            label: label,
            valid: valid
        }); 

        this.fireChanges();
    }

    inputChange = (e) => {

        const val = e.target.value;
        let valid = false;
        if(val !== '') {
            valid = true;
        }
        this.setState({
            finalValue : e.target.value,
            valid : valid,
            label: e.target.value
        }); 

        this.fireChanges();
    }

    fireChanges = () => {
        this.props.onSelectOtherChange(this.state);
    }

    render() {
        return (
            <div className="select-other" >
                <div className="input-wrap" id="foo">
                    <Input s={12} type='select' onChange={this.selectChange} defaultValue={this.props.value} id="select">
                        <option value="">Choose a Player</option>
                        {this.props.options.map((val, key) => (
                            <option 
                                value={val.id} 
                                key={val.id} 
                            >{val.name}</option>
                        ))}  
                        <option value="newplayer">New Player</option>
                    </Input>
                    { this.state.showInput ? <Input s={12} label="Enter player's full name" onChange={this.inputChange}></Input> : null }
                    
                </div>
            </div>
        );
    }



}


