import { fromJS } from 'immutable';
import * as constants from './constants';
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  })
}

const addList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextPage
  })
}

const toggleScrollTop = (state, action) => {
  return state.merge({
    showScroll: action.show
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case constants.ADD_LIST:
      return addList(state, action);
    case constants.TOGGLE_SCROLL_TOP:
      return toggleScrollTop(state, action)
    default:
  }
  return state;
}