/**
 * RepoCard
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import { IssueIcon } from 'components/Icons';
import './style.scss';

export default class RepoCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item } = this.props;
    let nameprefix = '';

    // Put together the content of the repository
    const content = (
      <div className="repo-list-item" align="center">
        <br />
        {item.name}<br />
        {item.description}<br />
        <img className="repo-list-item__repo-image" src={item.organization.avatar_url} /><br />
        {item.language}<br />
        <a className="repo-list-item__issue-link" href={`${item.html_url}/issues`} target="_blank" rel="noopener noreferrer">
          <IssueIcon className="repo-list-item__issue-icon" />
          {item.open_issues_count} Issues
        </a><br />
        <a className="repo-list-item__issue-link" href={`${item.html_url}/network/members`} target="_blank" rel="noopener noreferrer">
          {item.forks} Forks
        </a><br />
        <a className="repo-list-item__issue-link" href={`${item.homepage}`} target="_blank" rel="noopener noreferrer">
          Project Homepage
        </a>
        <br />
        <br />
      </div>
    );

    // Render the content into a list item
    return (
      <Card key={`repo-list-item-${item.full_name}`} item={content} />
    );
  }
}

RepoCard.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
};
