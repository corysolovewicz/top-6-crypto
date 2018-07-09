import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import RepoCard from './RepoCard';

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser()
  })
)(RepoCard);
