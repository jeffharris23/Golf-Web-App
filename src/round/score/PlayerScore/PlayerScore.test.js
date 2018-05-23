import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import PlayerScore from './PlayerScore';


describe("PlayerScore component", () => {
    let props = {
        key: "jh", 
        player :  {
            id: 'jh',
            name: 'Jeff Harris',
            snips: 4,
            holes: {
                  1: 5,
                  2: 4,
                  3: 4,
                  4: null,
                  5: null,
                  6: null,
                  7: null,
                  8: null,
                  9: null,
                  10: null,
                  11: null,
                  12: null,
                  13: null,
                  14: null,
                  15: null,
                  16: null,
                  17: null,
                  18: null,
              },
              meta: {
                  front: null,
                  back: null,
                  total: null,
              }
        },
        par: 4, 
        score: 6,
    };

    it("renders", () => {
        const wrapper =  shallow(
            <PlayerScore {...props}/>
        );
        const div = wrapper.find(".player-score");
        expect(div.length).toEqual(1);
    });    

    it("passes a score onto the input", () => {
        const wrapper =  shallow(
            <PlayerScore {...props}/>
        );
        const input = wrapper.find("input");
        expect(input.props().value).toEqual(6);
    });       
    
    it("use par for input if score is not available", () => {
        props = {...props, score: null};
        const wrapper =  shallow(
            <PlayerScore {...props}/>
        );
        const input = wrapper.find("input");
        expect(input.props().value).toEqual(4);
    });    
    
    it("player id should be used for the input name", () => {
        
        const wrapper =  shallow(
            <PlayerScore {...props}/>
        );
        const input = wrapper.find("input");
        expect(input.props().name).toEqual("jh");
    });     

    it("input focus should trigger change event", () => {
        const mockFn = jest.fn();
        const wrapper =  shallow(
            <PlayerScore {...props} onScoreChange={mockFn}/>
        );
        const input = wrapper.find("input");
        input.simulate('focus');
        expect(mockFn.mock.calls.length).toEqual(1);
    });    
    
    it("input value change should trigger change event", () => {
        const mockFn = jest.fn();
        const wrapper =  shallow(
            <PlayerScore {...props} onScoreChange={mockFn}/>
        );
        const input = wrapper.find("input");
        input.simulate('change', { target: { value: 'Changed' } });
        expect(mockFn.mock.calls.length).toEqual(1);
    });         

    // it("displays golfers avatar", () => {
    //     const wrapper =  mount(
    //         <Scrubber label="JH"/>
    //     );
    //     const div = wrapper.find(".avatar-wrap");
    //     expect(div.length).toEqual(1);
    // });    
    
    // it("fires a click event", () => {
    //     const wrapper =  mount(
    //         <Scrubber label="JH"/>
    //     );
    //     const div = wrapper.find(".avatar-wrap");
    //     expect(div.length).toEqual(1);
    // });   
   
    // it("fires a click event when clicked", () => {
    //     const mockFn = jest.fn();
    //     const comp =  mount(
    //         <Scrubber label="JH" scrubChange={mockFn} />
    //     );
    //     const div = comp.find(".scrubber-wrap");

    //     div.simulate("click");
    //     expect(mockFn.mock.calls.length).toEqual(1);
    // }); 

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

