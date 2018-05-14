import React from 'react';
import Header from '../shared/header/Header';
import Main from '../shared/main/Main';

import { connect } from 'react-redux';

function getRouteClass(route) {
    if(route === '/') return 'home';

    //remove the first forward slash of route
    let temp = route.replace("/", '');

    //replace any other forward slashes with hyphens
    temp = temp.replace(new RegExp("/", "g"), '-');
    return temp;
}

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    hash: state.router.location.hash,
    class: getRouteClass(state.router.location.pathname)
})
  

class ClassWrap extends React.Component {
    render() {
      return (
        <div className={`wrapper ${this.props.class}`}>
            <Header />
            <Main store={this.props.store} />
        </div>
      );
    }
  }

  export default connect(mapStateToProps)(ClassWrap)
