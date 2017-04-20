import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import needFetch from '../../core/needFetch';
import Layout from '../../components/Layout';
import {setData} from '../../actions/data'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export default {
  path: '/san-pham',
  async action({ store }) {
    if(!process.env.BROWSER || !store.getState().setting.ssr || (process.env.BROWSER && needFetch())){
      store.dispatch(showLoading())
      const resp = await fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: '{ getProducts{name, price, slug, coverUrl, description, saleOff, body, created_at} }',
        }),
        credentials: 'include',
      });
      const { data } = await resp.json();
      store.dispatch(setData(data))
      store.dispatch(hideLoading())
    }

    return {
      title: 'Trang danh sách sản phẩm',
      component: <Layout><Home products={store.getState().data.products.value} /></Layout>,
    };
  },

};
