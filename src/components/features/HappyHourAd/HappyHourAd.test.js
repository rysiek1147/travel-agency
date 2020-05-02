import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  description: '.promoDescription',
};

const mockProps = {
  title: 'Test title',
  promoDescription: 'Test description',
};

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

describe('Component HappyHourAd', () => {
  it('sholud be render', () => {
    const component = shallow(<HappyHourAd/>);
    expect(component).toBeTruthy();
  });
  it('should render title and countdown element', () => {
    const component = shallow(<HappyHourAd/>);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.description)).toEqual(true);
  });
  it('should render title from props', () => {
    const component = shallow(<HappyHourAd {...mockProps}/>);
    const renderedTitle = component.find(select.title).text();
    expect(renderedTitle).toEqual(mockProps.title);
  });
});

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2020-04-29T${time}.135Z`);
    const component = shallow(<HappyHourAd {...mockProps}/>);
    const renderedTime = component.find(select.description).text();
    expect(renderedTime).toEqual(expectedDescription);
    global.Date = trueDate;
  });
};

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
    jest.useFakeTimers();
    global.Date = mockDate(`2020-04-29T${time}.135Z`);
    const component = shallow(<HappyHourAd {...mockProps}/>);
    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());
    jest.advanceTimersByTime(delaySeconds * 1000);
    const renderedTime = component.find(select.description).text();
    expect(renderedTime).toEqual(expectedDescription);
    global.Date = trueDate;
    jest.useRealTimers();
  });
};

beforeAll(() => {
  const utilsModule = jest.requireActual('../../../utils/formatTime.js');
  utilsModule.formatTime = jest.fn(seconds => seconds);
});

describe('Component HappyHourAd with mocked Date', () => {  
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');  
});

describe('Component HappyHourAd with mocked Date and delay', () => {  
  checkDescriptionAfterTime('11:57:58', 2, '120');
  checkDescriptionAfterTime('11:59:58', 1, '1');
  checkDescriptionAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 + '');  
});

describe('Component HappyHourAd with mocked Date', () => {  
  checkDescriptionAtTime('12:00:00', mockProps.promoDescription);
  checkDescriptionAtTime('12:59:59', mockProps.promoDescription);  
});

describe('Component HappyHourAd with mocked Date and delay', () => {  
  checkDescriptionAfterTime('11:59:59', 2, mockProps.promoDescription);
});