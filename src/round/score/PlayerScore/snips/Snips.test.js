import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Snips from './Snips';




describe("Snips component", () => {


    it("renders", () => {
        const wrapper =  shallow(
            <Snips snips="3"/>
        );
        const div = wrapper.find(".snips-wrap");
        expect(div.length).toEqual(1);
    });    
    
    it("creates individual snips", () => {
        const wrapper =  shallow(
            <Snips snips="3"/>
        );
        const div = wrapper.find(".snip");
        expect(div.length).toEqual(3);
    });      

    
    
   
});
