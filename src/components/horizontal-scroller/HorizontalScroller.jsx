import * as React from 'react';
import './horizontal-scroller.css';

export default class HorizontalScroller extends React.Component {

    render() {
        const children = React.Children.map(this.props.children, child => {
            return (
              <li>{child}</li> 
            );
          });
        return (
            <section className="horizontal-scroller">
                <div className="item-wrap">
                    <ul>
                        {
                            children
                        }
                    </ul>
                </div>
            </section>            

        );
    }

}
