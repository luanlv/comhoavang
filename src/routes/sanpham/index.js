import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import needFetch from '../../core/needFetch';
import Layout from '../../components/Layout';
import {setData} from '../../actions/data'

export default {
  path: '/san-pham/:slug',
  async action({ store, params }) {
    if(!process.env.BROWSER || !store.getState().setting.ssr || (process.env.BROWSER && needFetch())){
      const resp = await fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: '{ getProducts{name, slug, price, coverUrl, description, saleOff, body, created_at},getOneProduct(slug: "'+ params.slug +'"){name, price, coverUrl, description, saleOff, body, created_at} }',
        }),
        credentials: 'include',
      });
      const { data } = await resp.json();
      store.dispatch(setData(data))
    }

    return {
      title: store.getState().data.product.value.name,
      description: store.getState().data.product.value.description,
      component: <Layout><Home product={store.getState().data.product.value} products={store.getState().data.products.value} /></Layout>,
    };
  },

};
