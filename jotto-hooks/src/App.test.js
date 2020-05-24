import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import { findByTestAttr } from './test/testUtils'

const setup = () => {
  return shallow(<App />)
}

test('renders learn react link', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'app-component');
  console.log(appComponent.debug())
  expect(appComponent.length).toBe(1);
});
