import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import needFetch from '../../core/needFetch';
import Layout from '../../components/Layout';


export default {
  path: '/home3',
  async action({ store }) {
    // process.env.BROWSER
    var news;
    if(!process.env.BROWSER || !store.getState().setting.ssr || (process.env.BROWSER && needFetch())){
      const resp = await fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: '{news{title,link,content}}',
        }),
        credentials: 'include',
      });

      const { data } = await resp.json();
      if (!data || !data.news) throw new Error('Failed to load the news feed.');
      news = data.news
    } else {
      news = []
    }
    return {
      title: 'Trang chủ',
      component: <Layout><Home /></Layout>,
    };
  },

};
