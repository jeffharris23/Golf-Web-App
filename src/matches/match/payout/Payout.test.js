import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Payout from './Payout';




describe("Payout component", () => {
 

    it("renders", () => {
        const wrapper = shallow(<Payout hole={6} amount={15} />);
        const div = wrapper.find(".payout");
        expect(div.length).toBeGreaterThan(0);
    });       

    it("display shows what hole we've finished", () => {
        const wrapper = shallow(<Payout hole={6} amount={15} />);
        const div = wrapper.find(".hole");
        expect(div.text()).toBe("Thru 6: ");
    });     

    it("display shows what dollar value is owing", () => {
        const wrapper = shallow(<Payout hole={6} amount={15} />);
        const div = wrapper.find(".amount");
        expect(div.text()).toBe("$15");
    });      
    
    it("add a positive class wrapper when amount is higher then 0", () => {
        const wrapper = shallow(<Payout hole={6} amount={15} />);
        const div = wrapper.find(".positive");
        expect(div.length).toBeGreaterThan(0);
    });    
    
    it("add a negative class wrapper when amount is less then 0", () => {
        const wrapper = shallow(<Payout hole={6} amount={-15} />);
        const div = wrapper.find(".negative");
        expect(div.length).toBeGreaterThan(0);
    });      


   
});
