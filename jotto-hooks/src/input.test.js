import React from 'react';
import { shallow } from 'enzyme';
import { Input } from './input';

import { findByTestAttr, checkProps } from './test/testUtils'

const setup = (props = { secretWord: "" }) => {
    return shallow(<Input {...props} />)
}

test('does not throw warning with expected props ', () => {
    checkProps(Input, { secretWord: 'party' });
})

describe('Tests to receive the word', () => {
    test('render withour error', () => {
        const wrapper = setup();
        const inputComponent = findByTestAttr(wrapper, 'component-imput');
        expect(inputComponent.length).toBe(1);
    });

    test('The word have some leter', () => {
        const wrapper = setup({ secretWord: 'party' });
        const inputComponent = findByTestAttr(wrapper, 'component-imput');
        expect(inputComponent.text()).toBe('');
    });



})

