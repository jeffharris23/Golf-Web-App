import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { Avatar } from './Avatar';




describe("Avatar component", () => {

    let props;
    let mountedComponent;
    const avatar = () => {
        if (!mountedComponent) {
        mountedComponent = mount(
            <Avatar {...props} />
        );
        }
        return mountedComponent;
    }

    beforeEach(() => {
        props = {
            label: "JH",
            classWrap: "wrapper",
            bg: "#fff",
        };
        mountedComponent = undefined;
    });


    it("always renders a div", () => {
        const divs = avatar().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });    

    it("it renders span with initials", () => {
        const span = avatar().find("span");
        expect(span.text()).toBe('JH');
    });       

    it("it has a wrapper class", () => {
        const wrapper = avatar();
        expect(wrapper.find('.avatar-wrap').hasClass('wrapper')).toBe(true);
    });       

    it("it has a background color", () => {
        const wrapper = avatar();
        let containerStyle = wrapper.find('.avatar-wrap').prop('style');
        expect(containerStyle).toHaveProperty('backgroundColor', '#fff');
    });       
    
   
});
