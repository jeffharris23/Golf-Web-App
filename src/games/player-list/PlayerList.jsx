import * as React from 'react';
import './player-list.css';
import HorizontalScroller from '../../components/horizontal-scroller/HorizontalScroller';
import Sortable from 'react-sortablejs';
import Avatar from '../../components/avatar/Avatar';

export default class PlayerList extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const players = this.props.players.map(val => (<Avatar  label={val} key={val} data-id={val} classWrap="med-theme"/>));
        return (
            <div className="player-list">
                <HorizontalScroller  >
                    <Sortable
                        options={{
                            animation: 150,
                            sort: false,
                            group: {
                                name: 'clone1',
                                pull: 'clone',
                                put: false
                            }
                        }}
                        className="block-list"
                    >
                        {players}
                    </Sortable>
                </HorizontalScroller>  
            </div>


        )
    }
}
