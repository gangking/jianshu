import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
})

export const logout = () => ({
  type: constants.LOGOUT,
  value: false
})

const api = 'https://www.easy-mock.com/mock/5cac669516fea85e587f8deb/luodiye'
export const login = (accout, password) => {
  return (dispatch) => {
    axios.get(api + '/login?account=' + accout + '&password=' + password).then((res) => {
      const result = res.data.data;
      if (result) {
        dispatch(changeLogin())
      } else {
        alert('登陆失败')
      }
    })
  }
}