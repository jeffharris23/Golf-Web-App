import * as React from 'react';
import './add-game.css';
import Sortable from 'react-sortablejs';
import Avatar from '../../components/avatar/Avatar';
import uniq from 'lodash/uniq';
import {  Button, Icon } from 'react-materialize';

export default class AddGame extends React.Component {

    onChange = (items,type) => {
        const uItems = uniq(items);
        return this.props.onGameChange(uItems,type);
    }

    deleteGame = (index) => {
        this.props.deleteGame(index);
    }

    render() {

        const first = this.props.first.map(val => (<Avatar  label={val} key={val} data-id={val} classWrap="med-theme"/>));
        const second = this.props.second.map(val => (<Avatar  label={val} key={val} data-id={val} classWrap="med-theme"/>));

        return (
            <div className="add-game">
                <div className={this.props.first.length > 0 ? 'first has-items' : 'first'}>
                    <Sortable
                        options={{
                            animation: 150,
                            group: {
                                name: 'clone1',
                                put: true,
                                pull: true,
                            }
                        }}
                        onChange={(items) => false} 
                        className="delete"
                    >
                        <Icon className="delete">delete</Icon>
                    </Sortable>
                    <span className="label">
                        Drag Players
                    </span>
                    <div className="draggable">
                        <Sortable
                            options={{
                                animation: 150,
                                group: {
                                    name: 'clone1',
                                    put: true,
                                    pull: true,
                                }
                            }}
                                onChange={(items) => this.onChange(items,'first')}                            
                    
                            className="block-list"
                        > 
                            {first}
                        </Sortable>
                    </div>
                    
                </div>
                <div className="vs">
                    VS
                </div>
                <div className={this.props.second.length > 0 ? 'second has-items' : 'second'}>
                    <Sortable
                        options={{
                            animation: 150,
                            group: {
                                name: 'clone1',
                                put: true,
                                pull: true,
                            }
                        }}
                        className="delete"
                        onChange={(items) => false} 
                    >
                        <Icon className="delete">delete</Icon>
                    </Sortable>                
                    <span className="label">
                        Drag Players
                    </span>
                    <div className="draggable">
                    <Sortable
                            options={{
                                animation: 150,
                                group: {
                                    name: 'clone1',
                                    put: true,
                                    pull: true,
                                }
                            }}
                                onChange={(items) => this.onChange(items,'second')}                            
                    
                            className="block-list"
                        > 
                            {second}
                        </Sortable>
                    </div>
                </div>
                {
                    this.props.index > 0  && (
                        <Button floating className='delete-game' waves='light' icon='delete' onClick={() => this.deleteGame(this.props.index)}/>
                    )
                }    
                
            </div>
        );
    }

}
