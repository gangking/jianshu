import * as constans from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
  type: constans.CHANGE_LIST,
  data: fromJS(data),
  totalPage: fromJS(Math.ceil(data.length / 10))
})

export const searchFocus = (data) => ({
  type: constans.SEARCH_FOCUS,
  data
})

export const searchBlur = () => ({
  type: constans.SEARCH_BLUR
})

const api = 'https://www.easy-mock.com/mock/5cac669516fea85e587f8deb/luodiye';
export const getList = () => {
  return (dispatch) => {
    axios.get(api + '/trending_search').then((res) => {
      const data = res.data.data;
      dispatch(changeList(data));
    }).catch(() => {
      alert('调接口失败！')
    })
  }
}

export const mouseEnter = () => ({
  type: constans.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: constans.MOUSE_LEAVE
})

export const changePage = (page) => ({
  type: constans.CHANGE_PAGE,
  page
})