import * as React from 'react';
import './add-game.css';

export default class AddGame extends React.Component {

    render() {

        return (
            <div className="add-game">
                <div className="first">
                    <span className="label">
                        Drag Players
                    </span>
                    <div className="draggable">
                        <ul>
                        </ul>
                    </div>
                </div>
                <div className="vs">
                    VS
                </div>
                <div className="second">
                    <span className="label">
                        Drag Players
                    </span>
                    <div className="draggable">
                        <ul>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}
