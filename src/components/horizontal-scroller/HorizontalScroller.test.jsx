import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import HorizontalScroller from './HorizontalScroller';
import  {Avatar} from '../avatar/Avatar';




describe("HorizontalScroller component", () => {

    let props;
    let mountedComponent;
    const component = () => {
        if (!mountedComponent) {
        mountedComponent = mount(
            <HorizontalScroller {...props} />
        );
        }
        return mountedComponent;
    }

    beforeEach(() => {
        props = {};
        mountedComponent = undefined;
    });


    it("always renders a section", () => {
        const divs = component().find("section");
        expect(divs.length).toBeGreaterThan(0);
    });    

    it("always renders children components", () => {
        const wrapper = mount(
            <HorizontalScroller>
                <Avatar label="JH" classWrap="bg-grey-2"/>
                <Avatar label="JG" classWrap="bg-grey-2"/>
            </HorizontalScroller>
        );
        const avatars = wrapper.find('.avatar-wrap');
        expect(avatars.length).toBe(2);
    });       

   
    
   
});
