import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import HolePager from './HolePager';




describe("HolePager component", () => {

    let props;
    let mountedComponent;
    const holepager = () => {
        if (!mountedComponent) {
        mountedComponent = mount(
            <HolePager {...props} />
        );
        }
        return mountedComponent;
    }

    beforeEach(() => {
        props = {
            hole: 1,
            valid: true
        };
        mountedComponent = undefined;
    });

    it("renders", () => {
        const label = holepager().find(".hole-label");
        expect(label.text()).toEqual("1");
    });      


    it("always renders a prev btn", () => {
        const btn = holepager().find("button.prev");
        expect(btn.length).toBeGreaterThan(0);
    });       
    
    it("always renders a next btn", () => {
        const btn = holepager().find("button.next");
        expect(btn.length).toBeGreaterThan(0);
    });       

    it("when hole is less then 2 prev btn is disabled", () => {
        const comp =  mount(
            <HolePager hole='1' valid={true}/>
        );
        const btn = comp.find("button.prev");
        expect(btn.prop('disabled')).toBeTruthy();
    });       

    it("when hole is equal to 18 next btn is disabled", () => {
        const comp =  mount(
            <HolePager hole='18' valid={true}/>
        );
        const btn = comp.find("button.next");
        expect(btn.prop('disabled')).toBeTruthy();
    });    
    
    it("when scores are invalid next btn is disabled", () => {
        const comp =  mount(
            <HolePager hole='17' valid={false}/>
        );
        const btn = comp.find("button.next");
        expect(btn.prop('disabled')).toBeTruthy();
    });      
    
    it("fires a click event on prev btn when clicked", () => {
        const mockFn = jest.fn();
        const comp =  mount(
            <HolePager hole='18' prevClick={mockFn} valid={true}/>
        );
        const btn = comp.find("button.prev");

        btn.simulate("click");
        expect(mockFn.mock.calls.length).toEqual(1);
    });        

    it("fires a click event on next btn when clicked", () => {
        const mockFn = jest.fn();
        const comp =  mount(
            <HolePager hole='1' nextClick={mockFn} valid={true}/>
        );
        const btn = comp.find("button.next");

        btn.simulate("click");
        expect(mockFn.mock.calls.length).toEqual(1);
    });      
    
   
});
