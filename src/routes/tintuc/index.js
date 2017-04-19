import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import needFetch from '../../core/needFetch';
import Layout from '../../components/Layout';
import {setData} from '../../actions/data'

export default {
  path: '/tin-tuc',
  async action({ store, query }) {
    let page = 1;
    if(query.p) page = query.p

    if(!process.env.BROWSER || !store.getState().setting.ssr || (process.env.BROWSER && needFetch())){
      const resp = await fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: '{getNews(page:'+ page +' ){page,totalPage,data{title, slug, coverUrl, description}}}',
        }),
        credentials: 'include',
      });
      const { data } = await resp.json();
      store.dispatch(setData(data))
    }

    return {
      title: 'Trang tin tức',
      component: <Layout><Home news={store.getState().data.news.value} /></Layout>,
    };
  },

};
