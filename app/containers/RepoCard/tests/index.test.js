/**
 * Test the repo list item
 */

import React from 'react';
import { shallow, render } from 'enzyme';

import ListItem from 'components/ListItem';
import RepoCard from '../RepoCard';

const renderComponent = (props = {}) => render(<RepoCard {...props} />);

describe.only('<RepoCard />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      owner: {
        login: 'corysolovewicz'
      },
      html_url: 'https://github.com/corysolovewicz/top-6-crypto',
      name: 'top-6-crypto',
      open_issues_count: 20,
      full_name: 'corysolovewicz/top-6-crypto'
    };
  });

  it('should render a ListItem', () => {
    const renderedComponent = shallow(<RepoCard item={item} />);
    expect(renderedComponent.find(ListItem).length).toBe(1);
  });

  it('should not render the current username', () => {
    const renderedComponent = renderComponent({
      item,
      currentUser: item.owner.login
    });
    expect(renderedComponent.text()).not.toContain(item.owner.login);
  });

  it('should render usernames that are not the current one', () => {
    const renderedComponent = renderComponent({
      item,
      currentUser: 'nikgraf'
    });
    expect(renderedComponent.text()).toContain(item.owner.login);
  });

  it('should render the repo name', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.text()).toContain(item.name);
  });

  it('should render the issue count', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.text()).toContain(item.open_issues_count);
  });

  it('should render the IssueIcon', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.find('svg').length).toBe(1);
  });
});
