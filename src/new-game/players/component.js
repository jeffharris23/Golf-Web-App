import * as React from 'react';
import { AppSlider } from '../../components/forms/app-slider/AppSlider';
export class PlayersSelect extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            players: 4,
            inputs: [
                '',
                '',
                '',
                '',
            ],
            valid: false
        };        
    }    
    
    onSliderChange = (data) => {
        let temp = [...this.state.inputs];

        if(data > temp.length) {
            temp.push('');
        } else {
            temp = temp.slice(0, data);
        }

        this.setState({
            players: data,
            inputs: temp
        });
    }

    inputChange = (index,e) => {

        let temp = [...this.state.inputs];
        temp[index] = e.target.value;

        this.setState({
            inputs: temp   
        });        

        this.setValidation();
    }

    setValidation = () => {
        let valid = true;

        this.state.inputs.map((val) => {
            if(val === '') valid = false;
        });

        this.setState({
            valid: valid
        });
    }



    componentWillUpdate = (nextProps,nextState) => {
        this.props.onSelectChange(nextState);
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
                <div className="input-wrap">
                    {this.state.inputs.map((val,index) => (
                        <div className="input" key={index}>
                            <input type="text" value={val} className="input" onChange={this.inputChange.bind(this, index)}/>
                        </div>
                    ))}                
                </div>
            </div>
        );
    }
}
