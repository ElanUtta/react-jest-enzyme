import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup 
 * @param {object} state - Initial state for setup
 * @return {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state);
  return wrapper
}

/**
 * Return a ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {String} val -Value of data-test attribute for search 
 * @return {ShallowWrapper}
 */

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'counter-display')
  expect(appComponent.length).toBe(1);

});

test('renders counter display', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'increment-button')
  expect(appComponent.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup()
  const initialCounterState = wrapper.state('counter')
  expect(initialCounterState).toBe(0)

});

test('clicking button increment the counter display ', () => {
  const counter = 7;
  const wrapper = setup(null, { counter })

  const button = findByTestAttr(wrapper, 'increment-button')
  button.simulate('click')

  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.text()).toContain(counter + 1)
})

test('clicking button decrement the counter display', () => {
  const counter = 8;
  const wrapper = setup(null, { counter })

  const decremente = findByTestAttr(wrapper, 'decrement-counter')
  decremente.simulate('click')

  const counterDisplay = findByTestAttr(wrapper, 'counter-display')

  expect(counterDisplay.text()).toContain(counter - 1)
})

test('Counter can\'t be less than 0', () => {
  const counter = 0;
  const error = null;

  const wrapper = setup(null, { counter, error });
  console.log(wrapper)

  const decremente = findByTestAttr(wrapper, 'decrement-counter');
  decremente.simulate('click');

  expect(wrapper.state("error")).toBe("Can't decrement than zero")

})