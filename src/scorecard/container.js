import * as React from 'react';
import { connect } from 'react-redux'; 
import { updateScore, updateSnips } from '../store/actions/scores';
import { Row, Col, Table } from 'react-materialize';
import Avatar from '../components/avatar/Avatar';
import './scorecard.css';



class Scorecard extends React.Component {
  constructor(props) {
    super(props);

    // console.log(props.selectedCourse.holes);

  }

//   componentDidMount() {

//   }

renderHdcp = (key,index) => {
  // just standard if statement
  if (index === 8) {
      return [
        <td key={index}>{this.props.selectedCourse.holes[key].hdcp}</td>,
        <td key="out"></td>,
        <td key="init"></td>
      ];
  }
  return (
    <td key={index}>{this.props.selectedCourse.holes[key].hdcp}</td>
  );
}

renderScore = (player,key,index) => {
  // just standard if statement
  if (index === 8) {
      return [
        <td key={index}>{player.holes[key]}</td>,
        <td key="out"></td>,
        <td key="init"></td>
      ];
  }
  return (
    <td key={index}>{player.holes[key]}</td>
  );
}
  render() {
    return (
      <section className="scorecard-wrap">
        <div className="overflow-wrap">
          {
            this.props.header  && (
              <div className="header">
                <Row>
                  <Col s={4} m={3}>
                    <div className="logo-wrap">
                      <img src={this.props.selectedCourse.logo} alt={this.props.selectedCourse.name} />
                    </div>  
                  </Col>
                  <Col s={8} m={9}>
                    <div className="desc-wrap">
                      <p className="title">Scorecard</p>
                    </div>
                  </Col>
                </Row>
              </div>
            )
          } 
          
          <div className="table-wrap">
          <Table>
            <thead>
              <tr>
                <th data-field="hole" className="size-1">Hole</th>
                <th data-field="1">1</th>
                <th data-field="2">2</th>
                <th data-field="3">3</th>
                <th data-field="4">4</th>
                <th data-field="5">5</th>
                <th data-field="6">6</th>
                <th data-field="7">7</th>
                <th data-field="8">8</th>
                <th data-field="9">9</th>
                <th data-field="out" className="size-2">Out</th>
                <th data-field="init" className="size-2">Init</th>
                <th data-field="10">10</th>
                <th data-field="11">11</th>
                <th data-field="12">12</th>
                <th data-field="13">13</th>
                <th data-field="14">14</th>
                <th data-field="15">15</th>
                <th data-field="16">16</th>
                <th data-field="17">17</th>
                <th data-field="18">18</th>                
                <th data-field="in" className="size-2">In</th>                
                <th data-field="tot" className="size-2">Tot</th>                
              </tr>
            </thead>

            <tbody>
              <tr className="hdcp">
                <td>HDCP</td>
        
                {Object.keys(this.props.selectedCourse.holes).map((key, index) => this.renderHdcp(key,index))}
                <td></td>
                <td></td>
              </tr>
              {this.props.scores.map((player, index) => {
                const currentPlayer = player; 
                return (
                <tr className="player" key={player.id}>
                  <td key="name"><Avatar label={player.id} classWrap="small"/></td>
                  {Object.keys(player.holes).map((key, index) => this.renderScore(currentPlayer,key,index))}
                  <td></td>
                  <td></td>
                </tr>)

              })}
          
            </tbody>
          </Table>
          </div>
        </div>

      </section>
    );
  }
}


const mapDispatchToProps = {
  updateScore,
  updateSnips
};

function mapStateToProps(state) {
  return { 
    scores: state.scores.scores,
    selectedCourse: state.course.selectedCourse,
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Scorecard);
