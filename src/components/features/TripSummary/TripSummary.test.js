import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct link', () => {
    const Link = 'abc';
    const component = shallow(<TripSummary id={Link} image='image.jpg' name='Trip name' cost='100' days={14} />);
    expect(component.find('.link').prop('to')).toEqual('/trip/' + Link);
  });
  it('should generate correct image', () => {
    const expectedImageSrc = 'image.jpg';
    const expectedImageAlt = 'Image alt text';
    const component = shallow(<TripSummary id='testId' image={expectedImageSrc} name={expectedImageAlt} cost='100' days={14}/>);
    const testImage = component.find('img');
    expect(testImage.prop('src')).toEqual(expectedImageSrc);
    expect(testImage.prop('alt')).toEqual(expectedImageAlt);
  });
  it('should generate correct name, cost and days', () => {
    const expectedName = 'Test trip name';
    const expectedCost = '100';
    const expectedDays = 14;
    const component = shallow(<TripSummary id='testId' image='image.jpg' name={expectedName} cost={expectedCost} days={expectedDays} />);
    const details = component.find('.details span');
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(details.at(0).text()).toEqual(expectedDays + ' days');
    expect(details.at(1).text()).toEqual('from ' + expectedCost);
  });
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it('sholud render correct tags', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary id='testId' image='image.jpg' name='Trip name' cost='100' days={14} tags={expectedTags} />);
    const renderedTags = component.find('.tag');
    renderedTags.forEach((tag, index) => expect(tag.text()).toEqual(expectedTags[index]));
  });
  it('should not render div with tags if tags not exist or empty', () => {
    const componentWithEmptyTags = shallow(<TripSummary id='testId' image='image.jpg' name='Trip name' cost='100' days={14} tags={[]} />);
    const componentWithoutTags = shallow(<TripSummary id='testId' image='image.jpg' name='Trip name' cost='100' days={14} />);
    expect(componentWithEmptyTags.find('.tags')).toEqual({});
    expect(componentWithoutTags.find('.tags')).toEqual({});
  });
});