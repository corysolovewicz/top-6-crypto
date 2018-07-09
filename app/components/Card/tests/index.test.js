import React from 'react';
import { mount } from 'enzyme';

import Card from '../index';

describe('<Card />', () => {
  it('should have a className', () => {
    const renderedComponent = mount(<Card className="test" />);
    expect(renderedComponent.find('li').prop('className')).toBeDefined();
  });

  it('should render the content passed to it', () => {
    const content = <div>Hello world!</div>;
    const renderedComponent = mount(<Card item={content} />);
    expect(renderedComponent.contains(content)).toBe(true);
  });
});
