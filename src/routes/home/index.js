import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import needFetch from '../../core/needFetch';
import Layout from '../../components/Layout';
import { setData } from '../../actions/data';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export default {
  path: '/',
  async action({ store }) {
    // process.env.BROWSER
    if(!process.env.BROWSER || !store.getState().setting.ssr || (process.env.BROWSER && needFetch())) {
      store.dispatch(showLoading())
      const resp = await fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: '{getProducts{name, slug, price, coverUrl, description, saleOff, body, created_at}, getNews(page: 1 ){page,totalPage,data{title, slug, coverUrl, description}}, getFoodNews(page: 1 ){page,totalPage,data{title, slug, coverUrl, description}} }',
        }),
        credentials: 'include',
      });

      const {data} = await resp.json();
      if (!data) throw new Error('Failed to load the news feed.');
      store.dispatch(setData(data))
      store.dispatch(hideLoading())
    }

    return {
      title: 'Trang chủ',
      component: <Layout><Home data={store.getState().data} /></Layout>,
    };
  },

};
