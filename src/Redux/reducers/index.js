import { ADD_ARTICLE } from '../actions/index';
import { CREATE_NEW_ARTICLE } from '../actions/index';

const initialState = {
  articles: [],
  newArticle: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [
          ...state.articles,
          action.payload
        ]
      };
    case CREATE_NEW_ARTICLE:
      return {
        ...state,
        newArticle: [
          ...state.newArticle,
          action.create
        ]
      }
    default:
      return state
  }
}

export default rootReducer;
