import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { SelectOther } from './SelectOther';
import { Input } from 'react-materialize';



describe("SelectOther component", () => {

  let props;
  let mountedSelectOther;
  const selectOther = () => {
    if (!mountedSelectOther) {
      mountedSelectOther = mount(
        <SelectOther {...props} />
      );
    }
    return mountedSelectOther;
  }

  beforeEach(() => {
    props = {
        key: 1,
        options: [
            {
              id: 'jg',
              name: 'James Grassie'
            },
            {
              id: 'jh',
              name: 'Jeff Harris'
            },         
        ],
        onSelectOtherChange: undefined,
        player: undefined,
        value: undefined,
    };
    mountedSelectOther = undefined;
  });


    it("always renders a div", () => {
        const divs = selectOther().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });    

    
   
});
