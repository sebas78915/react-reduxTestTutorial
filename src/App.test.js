import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './../Utils';
import React from 'react';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;
};

describe('App Component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example Title 1',
                body: 'Some Text'
            },{
                title: 'Example Title 2',
                body: 'Some Text'
            },{
                title: 'Example Title 3',
                body: 'Some Text'
            }]
        }
        wrapper = setUp(initialState);
    });

    it('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });

    it('exampleMethod_updatesState Method should update state as expected', () => {
        const classInstance = wrapper.instance();
        classInstance.exampleMethod_updatesState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true);
    });

    it('exampleMethod_returnsAValue Method shoulkd return value as expected', () => {
        const classInstance = wrapper.instance();
        const newValue = classInstance.exampleMethod_returnsAValue(9);
        expect(newValue).toBe(10);
    })

});
