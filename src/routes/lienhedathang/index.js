import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import needFetch from '../../core/needFetch';
import Layout from '../../components/Layout';
import {setData} from '../../actions/data'

export default {
  path: '/lien-he-dat-hang',
  async action({ store }) {
    if(!process.env.BROWSER || !store.getState().setting.ssr || (process.env.BROWSER && needFetch())){

    }
    return {
      title: 'Liên hệ đặt hàng',
      component: <Layout><Home /></Layout>,
    };
  },

};
