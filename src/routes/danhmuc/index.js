import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import needFetch from '../../core/needFetch';
import Layout from '../../components/Layout';
import { setData } from '../../actions/data';

export default {
  path: '/danh-muc/:slug',
  async action({ store, params, query }) {
    let page = query.p || 1

    if(!process.env.BROWSER || !store.getState().setting.ssr || (process.env.BROWSER && needFetch())){
      const resp = await fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: '{getNewsInCategory(page:'+ page +', slug: "' + params.slug + '" ){page,totalPage,data{title, slug, coverUrl, description}}}',
        }),
        credentials: 'include',
      });
      const { data } = await resp.json();
      store.dispatch(setData(data))
    }
    return {
      title: 'Trang tin tuc',
      component: <Layout><Home posts={store.getState().data.newsInCategory.value} /></Layout>,
    };
  },

};
