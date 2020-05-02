import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDays = (date, result) => {
  it(`should render ${result} at ${date}`, () => {
    global.Date = mockDate(`${date}T00:00:00.135Z`);
    const component = shallow(<DaysToSummer/>);
    expect(component.find('.heading').text()).toEqual(result);
    global.Date = trueDate;
  });
};

describe('Component DaysToSummer', () => {
  it('should be render', () => {
    const component = shallow(<DaysToSummer/>);
    expect(component).toBeTruthy();
  });
});

describe('Component DaysToSummer with mocked Date', () => {
  checkDays('2020-06-20', '1 day to Summer');
  checkDays('2020-06-11', '10 days to Summer');
  checkDays('2020-11-25', '208 days to Summer');
});