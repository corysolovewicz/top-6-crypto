import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import reducer from './reducer';
import saga from './saga';
import CryptoPage from './CryptoPage';

const mapDispatchToProps = (dispatch) => ({
  fetchRepos: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadRepos());
  }
});

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'crypto', reducer });
const withSaga = injectSaga({ key: 'crypto', saga });

export default compose(withReducer, withSaga, withConnect)(CryptoPage);
export { mapDispatchToProps };
