import * as React from 'react';
import './horizontal-scroller.css';

export default class HorizontalScroller extends React.Component {
    constructor(props) {
        super(props);
        let list = true;
        if(props.list === undefined) {
            list = false;
        }

        this.state = {
            list: list
        };
    }

    render() {
        const children = React.Children.map(this.props.children, child => {
            return (
              <li>{child}</li> 
            );
          });
        return (
            <section className="horizontal-scroller">
                <div className="item-wrap">
                    {
                        this.state.list  && (
                            <ul>
                                {
                                    children
                                }
                            </ul>
                        )
                    }      

                    {
                        !this.state.list  && (
                            <div>{ this.props.children }</div>
                        )
                    }                               
                    
                </div>
            </section>            

        );
    }

}
