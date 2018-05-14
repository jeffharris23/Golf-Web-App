import * as React from 'react';
import { AppSlider } from '../../components/forms/app-slider/AppSlider';
import { SelectOther } from '../../components/forms/select-other/SelectOther';

export class PlayersSelect extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            players: props.players.length,
            playerDetails: props.players,
            valid: false
        };        

        this.fireChanges = this.fireChanges.bind(this);
        this.setValidation = this.setValidation.bind(this);
    }    
    
    onSliderChange = (data) => {

        let temp = [...this.state.playerDetails];

        if(data > temp.length) {
            temp.push({});
        } else {
            temp = temp.slice(0, data);
        }

        this.setState({
            players: data,
            playerDetails: temp
        }, this.setValidation);


    }

    onSelectChange = (data) => {
        let temp = [...this.state.playerDetails];
        temp[data.index] = {
            val : data.finalValue,
            customInput: data.showInput
        };

        this.setState({
            playerDetails: temp
        }, this.setValidation);    
        
    }

    setValidation = () => {
        let valid = true;

        this.state.playerDetails.map((val) => {

            if (typeof val.val === "undefined") {
                valid = false;
            }

            if(val.val === '') valid = false;

        });

        return this.setState({
            valid: valid
        }, this.fireChanges);

    }   
    
    fireChanges = () => {
        this.props.onSelectChange(this.state)
    }    

    render() {

        return (
            <div className="players-select">
                <AppSlider 
                    min={2} 
                    max={6} 
                    defaultValue={this.state.players} 
                    marks={{
                        2: 2,
                        3: 3,
                        4: 4,
                        5: 5,
                        6: 6,
                    }}
                    onAfterChange={this.onSliderChange}
                />
                <div className="inputs-wrap">
         
                        {this.state.playerDetails.map((e, index) => {

                            return <SelectOther key={index} options={this.props.playerSelection} onSelectOtherChange={this.onSelectChange} player={index} value={e.val}/>
                        })}
            
                </div>
            </div>
        );
    }
}
