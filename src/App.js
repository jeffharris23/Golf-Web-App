import React, { Component } from 'react';
import ClassWrap from './components/ClassWrap'



class App extends Component {

  render() {
    return (
      <ClassWrap store={this.props.store}/>
    );
  }
}

export default App;
