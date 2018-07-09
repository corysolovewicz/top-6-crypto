/*
 * CryptoPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposCardList from 'components/ReposCardList';
import './style.scss';

export default class CryptoPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   *  fetch repos
   */
  componentDidMount() {
      this.props.fetchRepos(); 
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <Helmet>
          <title>Top 6 Crypto</title>
          <meta name="description" content="Top 6 cryptocurrencies by marketcap" />
        </Helmet>
        <div className="crypto-page">
          <section className="centered">
            <h2>Top 6 Cryptocurrencies by marketcap</h2>
            <p>in descending order</p>
          </section>
          <section>
            <ReposCardList {...reposListProps} />
          </section>
        </div>
      </article>
    );
  }
}

CryptoPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  fetchRepos: PropTypes.func
};
