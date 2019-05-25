import React from 'react';
import { mount, shallow } from 'enzyme';
import Keypad from './Keypad';

describe('Keypad', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Keypad
        callOperator={jest.fn()}
        numbers={[]}
        operators={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
  });

  // it('should render a <div />', () => {
  //   expect(wrapper.find('div').length).toEqual(1);
  // });

  it('should render 2 <div />\'s', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('renders the values of numbers', () => {
    wrapper.setProps({numbers: ['0', '1', '2']});
    expect(wrapper.find('.numbers-container').text()).toEqual('012');
  });

  it('renders the values of operators', () => {
    wrapper.setProps({operators: ['+', '-', '*', '/']});
    expect(wrapper.find('.operators-container').text()).toEqual('+-*/');
  });

});
