import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import GamesStatus from './GamesStatus';




describe("GamesStatus component", () => {

    let props = {   
        hole: 6,     
        games: {
            front: {
                1: [                    {
                    id : 0,
                    score: 0,
                }],
                2: [0],
                3: [0],
                4: [0],
                5: [0],
                6: [0],
                7: [0],
                8: [0],
                9: [0],
            },
            back: {
                10: [                    {
                    id : 0,
                    score: 0,
                }],
                11: [0],
                12: [0],
                13: [0],
                14: [0],
                15: [0],
                16: [0],
                17: [0],
                18: [0],
            },
            overall: {
                1: [                    {
                    id : 0,
                    score: 0,
                }],
                2: [0],
                3: [0],
                4: [0],
                5: [0],
                6: [0],
                7: [0],
                8: [0],
                9: [0],
                10: [0],
                11: [0],
                12: [0],
                13: [0],
                14: [0],
                15: [0],
                16: [0],
                17: [0],
                18: [0],                
            }
        }
    }
 

    it("renders", () => {
        const wrapper = mount(<GamesStatus {...props} />);
        const div = wrapper.find(".games-status");
        expect(div.length).toBeGreaterThan(0);
    });       

    it("only displays f9 scores when hole is on front nine", () => {
        props.hole = 9;
        const wrapper = mount(<GamesStatus {...props} />);
        const div = wrapper.find(".f9");
        const div2 = wrapper.find(".b9");
        expect(div.length).toBeGreaterThan(0);
        expect(div2.length).toBe(0);
    });     

    it("only displays b9 scores when hole is on back nine", () => {
        props.hole = 11;
        const wrapper = mount(<GamesStatus {...props} />);
        const div = wrapper.find(".f9");
        const div2 = wrapper.find(".b9");
        expect(div.length).toBe(0);
        expect(div2.length).toBeGreaterThan(0);
    });      

    
    // it("should render 3 games on the total", () => {
    //     props.hole = 1;
    //     const wrapper = mount(<GamesStatus {...props} />);
    //     const div = wrapper.find(".total .score");
    //     expect(div.length).toBe(3);
        
    // });    
    
    // it("should render 3 games on the b9", () => {
    //     props.hole = 10;
    //     const wrapper = mount(<GamesStatus {...props} />);
    //     const div = wrapper.find(".b9 .score");
    //     expect(div.length).toBe(3);

    // });      
    
    // it("should render 3 games on the b9", () => {
    //     props.hole = 10;
    //     const wrapper = mount(<GamesStatus {...props} />);
    //     const div = wrapper.find(".b9 .score");
    //     expect(div.length).toBe(3);

    // });    
    
    // it("should re-order games from highest to lowest", () => {
    //     props.hole = 10;
    //     const wrapper = mount(<GamesStatus {...props} />);
    //     //0,1,-1
    //     const div = wrapper.find(".b9 .score");
    //     // = 1,0,-1
    //     expect(div.at(0).text()).toBe("1");
    //     expect(div.at(1).text()).toBe("E");
    //     expect(div.at(2).text()).toBe("-1");

    // });      
    // it("display shows what dollar value is owing", () => {
    //     const wrapper = shallow(<Payout hole={6} amount={15} />);
    //     const div = wrapper.find(".amount");
    //     expect(div.text()).toBe("$15");
    // });      
    
    // it("add a positive class wrapper when amount is higher then 0", () => {
    //     const wrapper = shallow(<Payout hole={6} amount={15} />);
    //     const div = wrapper.find(".positive");
    //     expect(div.length).toBeGreaterThan(0);
    // });    
    
    // it("add a negative class wrapper when amount is less then 0", () => {
    //     const wrapper = shallow(<Payout hole={6} amount={-15} />);
    //     const div = wrapper.find(".negative");
    //     expect(div.length).toBeGreaterThan(0);
    // });      


   
});
