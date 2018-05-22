import * as React from 'react';
import { Title } from '../components/title/Title';
import { Input } from 'react-materialize';
import { connect } from 'react-redux'; 
import { updateCourse } from './actions';
import { BackNext } from '../components/back-next/BackNext';


class Course extends React.Component {
  constructor(props) {
    super(props);

    let disabled = true;

    if(this.props.selectedCourse.id) {
      disabled = false;
    }

    this.state =  {
      next: {
        disabled: disabled
      }
    }
  }

  selectChange = (e) => {
    let disabled = true;
    let course = {
      id: null,
      name: '',
    };

    if(e.target.value !== '') {
      disabled = false;
      const index = e.target.selectedIndex;
      course = {
        id: parseInt(e.target.value),
        name: e.target.options[index].text
      };
    }

    this.props.updateCourse(course);

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
            defaultValue={this.props.selectedCourse.id}
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
    selectedCourse: state.course.selectedCourse
  
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);
