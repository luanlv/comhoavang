import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import needFetch from '../../core/needFetch';
import Layout from '../../components/Layout';
import * as dataAction from '../../actions/data'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export default {
  path: '/bai-viet/:slug',
  async action({ store, params }) {
    // process.env.BROWSER
    var post;
    if(!process.env.BROWSER || !store.getState().setting.ssr || (process.env.BROWSER && needFetch())){
      store.dispatch(showLoading())
      const resp = await fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: '{getOnePost(slug: "' + params.slug + '"){title,slug,body,category, description}}',
        }),
        credentials: 'include',
      });
      let { data } = await resp.json();
      // if (!data || !data.getOnePost) throw new Error('Failed to load data.');
      if (!data || !data.getOnePost) {
        return { redirect: '/' }
      }
      store.dispatch(dataAction.setData(data))
      store.dispatch(hideLoading())
    }
    return {
      title: store.getState().data.post.value.title,
      description: store.getState().data.post.value.description,
      component: <Layout><Home post={store.getState().data.post.value} /></Layout>,
    };
  },

};
