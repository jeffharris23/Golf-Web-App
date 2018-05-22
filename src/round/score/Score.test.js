import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Score  from './Score';




describe("Score component", () => {

    let props;
    let mountedComponent;
    const score = () => {
        if (!mountedComponent) {
        mountedComponent = mount(
            <Score {...props} />
        );
        }
        return mountedComponent;
    }

    beforeEach(() => {
        props = {
            players: [
                {
                  id: 'jg',
                  name: 'James Grassie',
                  customInput: false,
                },
                {
                  id: 'jh',
                  name: 'Jeff Harris',
                  customInput: false,
                },
                {
                  id: 'sj',
                  name: 'Scotty Jackson',
                  customInput: false,
                },
                {
                  id: 'rk',
                  name: 'Ryan Kornelson',
                  customInput: false,
                },        
              ],
        };
        mountedComponent = undefined;
    });

    it("always renders a wrapper div", () => {
        const div = score().find(".score-wrap");
        expect(div.length).toBeGreaterThan(0);
    });      
  
    
   
});
