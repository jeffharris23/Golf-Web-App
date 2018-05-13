import * as React from 'react';
import './back-next.css';
import { NavLink } from 'react-router-dom';

import { Button } from 'react-materialize';



export class BackNext extends React.Component {
    // constructor(props) {
    //     super(props);

    // } 



    render() {
        return (
            <div className="back-next btn-wrap clearfix">
                <div>
                    <Button 
                        waves='light' 
                        className="btn btn-grey prev btn-link-in"
                        disabled={ this.props.prev.disabled ? true : false }
                    >
                        <NavLink 
                            exact 
                            to={this.props.prev.url}>{ this.props.prev.label ? this.props.prev.label  : 'Back' }
                        </NavLink>
                    </Button>
                </div>
                <div>
                    <Button 
                        waves='light' 
                        className="btn next btn-link-in"
                        disabled={ this.props.next.disabled ? true : false }
                    >
                            <NavLink 
                                exact 
                                to={this.props.next.url}>{ this.props.next.label ? this.props.next.label  : 'Next' }
                            </NavLink>
                    </Button>
                </div>
            </div>
        );
    }
}