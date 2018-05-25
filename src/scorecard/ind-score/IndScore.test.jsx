import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import IndScore from './IndScore';




describe("IndScore component", () => {


    it("renders", () => {
        const wrapper =  shallow(
            <IndScore par={3} score={3}/>
        );
        const div = wrapper.find(".ind-score");
        expect(div.length).toEqual(1);
    });    
    
    it("adds a par class if score is par", () => {
        const wrapper =  shallow(
            <IndScore par={3} score={3}/>
        );
        const div = wrapper.find(".par");
        expect(div.length).toEqual(1);
    });      

    it("adds a birdie class if score is birdie", () => {
        const wrapper =  shallow(
            <IndScore par={3} score={2}/>
        );
        const div = wrapper.find(".birdie");
        expect(div.length).toEqual(1);
    });     
    
    it("adds a eagle class if score is eagle", () => {
        const wrapper =  shallow(
            <IndScore par={3} score={1}/>
        );
        const div = wrapper.find(".eagle");
        expect(div.length).toEqual(1);
    });       

    it("adds a bogey class if score is bogey", () => {
        const wrapper =  shallow(
            <IndScore par={3} score={4}/>
        );
        const div = wrapper.find(".bogey");
        expect(div.length).toEqual(1);
    });        


    it("adds a double bogey class if score is double bogey", () => {
        const wrapper =  shallow(
            <IndScore par={3} score={5}/>
        );
        const div = wrapper.find(".double-bogey");
        expect(div.length).toEqual(1);
    });       

    it("adds a poop class if score is greater then double bogey", () => {
        const wrapper =  shallow(
            <IndScore par={3} score={6}/>
        );
        const div = wrapper.find(".poop");
        expect(div.length).toEqual(1);
    });         

    
    
   
});
