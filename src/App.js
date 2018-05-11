import React, { Component } from 'react';
import ClassWrap from './components/ClassWrap'



class App extends Component {

  render() {
    return (
      <ClassWrap auth={this.props.auth}/>
    );
  }
}

export default App;
