import * as type from '../constants';

export default function data(state = {}, action) {
  switch (action.type) {
    case type.SET_DATA:
      const data = action.payload.value
      return {
        ...state,
        post: {
          ...state.post,
          value: data.getOnePost || {}
        },
        news: {
          ...state.news,
          value: data.getNews || state.news.getNews || {}
        }
      };
    default:
      return state;
  }
}
