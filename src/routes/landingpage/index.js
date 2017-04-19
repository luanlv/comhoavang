import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import needFetch from '../../core/needFetch';
import Layout from '../../components/Layout';
import { setData } from '../../actions/data';

export default {
  path: '/landing-page',
  async action({ store }) {
    // process.env.BROWSER
    if(!process.env.BROWSER || !store.getState().setting.ssr || (process.env.BROWSER && needFetch())) {
    }

    return {
      title: 'Landing page',
      component: <Layout><Home /></Layout>,
    };
  },

};
