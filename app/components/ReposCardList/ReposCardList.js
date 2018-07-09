import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import Card from 'components/Card';
import LoadingIndicator from 'components/LoadingIndicator';
import RepoCard from 'containers/RepoCard';

const ReposCardList = ({ loading, error, repos }) => {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (repos !== false) {
    return <List items={repos} component={RepoCard} />;
  }

  return null;
};

ReposCardList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any
};

export default ReposCardList;
