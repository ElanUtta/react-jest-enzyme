import React from 'react';
import { shallow } from 'enzyme';
import { Input } from './input';

import { findByTestAttr, checkProps } from './test/testUtils'

const setup = (props = { secretWord: "party" }) => {
    return shallow(<Input {...props} />)
}

test('does not throw warning with expected props ', () => {
    checkProps(Input, { secretWord: 'party' });
});

test('render withour error', () => {
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, 'component-imput');
    expect(inputComponent.length).toBe(1);
});

describe('state controlled input field', () => {
    test('state updates with value of input box upon change', () => {
        const mockSetCurrentGuess = jest.fn();
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

        console.log(React.useState)

        const wrapper = setup();
        const inputBox = findByTestAttr(wrapper, 'input-box');

        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    })
})

