/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  try {
    // Call our request helper (see 'utils/request')
    let repos = []; 
    repos.push (yield call (request, `https://api.github.com/repos/bitcoin/bitcoin`));
    repos.push (yield call (request, `https://api.github.com/repos/ethereum/go-ethereum`));
    repos.push (yield call (request, `https://api.github.com/repos/ripple/rippled`));
    repos.push (yield call (request, `https://api.github.com/repos/Bitcoin-ABC/bitcoin-abc`));
    repos.push (yield call (request, `https://api.github.com/repos/EOSIO/eos`));
    repos.push (yield call (request, `https://api.github.com/repos/litecoin-project/litecoin`));

    yield put(reposLoaded(repos));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
}
