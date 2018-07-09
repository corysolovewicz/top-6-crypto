/**
 * Cryptopage selectors
 */

import { createSelector } from 'reselect';

const selectCrypto = (state) => state.get('crypto');

export {
  selectCrypto,
};
