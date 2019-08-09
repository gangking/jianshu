import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList,
  topicList: result.topicList
})

const api = ' https://www.easy-mock.com/mock/5cac669516fea85e587f8deb/luodiye'
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get(api + '/home/data').then((res) => {
      var result = res.data.data;
      var action = changeHomeData(result);
      dispatch(action)
      console.log(res);
    }).catch(() => {

    })
  }
}

const addHomeList = (list, page) => ({
  type: constants.ADD_LIST,
  list: fromJS(list),
  nextPage: fromJS(page)
})

export const getMoreList = (articlePage) => {
  return (dispatch) => {
    axios.get(api + '/homelist?page' + articlePage).then((res) => {
      var result = res.data.data;
      var action = addHomeList(result, articlePage + 1);
      dispatch(action)
      console.log(res);
    }).catch(() => {

    })
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})