import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Scrubber from './Scrubber';

function createClientXY(x, y) {
    return { clientX: x, clientY: y };
  }
function createMoveTouchEventObject({ x = 0, y = 0}) {
    return { changedTouches: [createClientXY(x, y)] };
  }


describe("Scrubber component", () => {


    it("renders", () => {
        const wrapper =  shallow(
            <Scrubber/>
        );
        const div = wrapper.find(".scrubber-wrap");
        expect(div.length).toEqual(1);
    });    

    it("displays golfers avatar", () => {
        const wrapper =  mount(
            <Scrubber label="JH"/>
        );
        const div = wrapper.find(".avatar-wrap");
        expect(div.length).toEqual(1);
    });    
    
    it("fires a click event", () => {
        const wrapper =  mount(
            <Scrubber label="JH"/>
        );
        const div = wrapper.find(".avatar-wrap");
        expect(div.length).toEqual(1);
    });   
   
    it("fires a click event when clicked", () => {
        const mockFn = jest.fn();
        const comp =  mount(
            <Scrubber label="JH" scrubChange={mockFn} />
        );
        const div = comp.find(".scrubber-wrap");

        div.simulate("click");
        expect(mockFn.mock.calls.length).toEqual(1);
    }); 

    // it("fires a touch start event when touched", () => {
    //     const mockFn = jest.fn();
    //     const comp =  mount(
    //         <Scrubber label="JH" scrubChange={mockFn} />
    //     );
    //     const div = comp.find(".scrubber-wrap");

    //     comp.simulate('touchMove', createMoveTouchEventObject({ x: 150, y: 0 }));
    //     expect(mockFn.mock.calls.length).toEqual(1);
    // });     
    
   

    
    
   
});
