import Display from '../Display/Display';
import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';

describe('Calculator', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Calculator />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Display Component', () => {

    expect(wrapper.containsMatchingElement(
      <Display displayValue={wrapper.instance().state.displayValue} />
    )).toEqual(true);

    // expect(wrapper.containsMatchingElement(<Display />)).toEqual(true);
  });

});
