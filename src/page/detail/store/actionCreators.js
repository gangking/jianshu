import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title: title,
  content: content
})

const api = ' https://www.easy-mock.com/mock/5cac669516fea85e587f8deb/luodiye'
export const getDetail = () => {
  return (dispatch) => {
    axios.get(api + '/detail').then((res) => {
      var data = res.data.data;
      dispatch(changeDetail(data.tatile, data.content))
      console.log(res)
    })
  }
}