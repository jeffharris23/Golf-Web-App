import * as React from 'react';
import { Title } from '../components/title/Title';
import { Input } from 'react-materialize';
import { connect } from 'react-redux'; 
import { updateCourse } from './actions';
import { BackNext } from '../components/back-next/BackNext';


class Course extends React.Component {
  constructor(props) {
    super(props);

    this.state =  {
      next: {
        disabled: true
      }
    }
  }

  selectChange = (e) => {
    let disabled = true;

    if(e.target.value !== '') {
      disabled = false;
    }

    this.setState({
      next: {
        disabled: disabled
      }
    })
 
  }
 
  render() {
    return (
      <section className="page">
        <div className="container center">
          <Title title="Select a Course" />
          <Input 
            s={12} 
            type='select' 
            onChange={this.selectChange} 
          >
            <option value="">Select a Course</option>
            {this.props.courseList.map((val, key) => (
              <option 
                  value={val.id} 
                  key={val.id} 
              >{val.name}</option>
            ))}              

                       
          </Input>
        </div>
        <BackNext 
          prev={{
            url: '/'
          }}
          next={{
            url: '/players',
            disabled: this.state.next.disabled,
          }}
        />
      </section>
    );
  }
}


const mapDispatchToProps = {
  updateCourse,
};

function mapStateToProps(state) {
  return { 
    courseList: state.course.courseList,    
  
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);
