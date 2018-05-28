import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import StatusScore from './StatusScore';




describe("StatusScore component", () => {

    let props = {   
        score: 4,     
    }
 

    it("renders", () => {
        const wrapper = shallow(<StatusScore {...props} />);
        const div = wrapper.find(".score");
        expect(div.length).toBeGreaterThan(0);
    });       

    it("should show 0 value as E value", () => {
        props.score = 0;
        const wrapper = shallow(<StatusScore {...props} />);
        const div = wrapper.find(".score");
        expect(div.text()).toBe("E");
    });     
   
});
