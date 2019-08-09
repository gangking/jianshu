import React from 'react';
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

class Login extends React.PureComponent {

  render () {
    const { loginStatus, login } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={(input) => { this.account = input }} />
            <Input placeholder="密码" type="password" ref={(input) => { this.password = input }} />
            <Button onClick={() => { login(this.account, this.password) }}>登陆</Button>
          </LoginBox>
        </LoginWrapper>)
    } else {
      return <Redirect to='/' />;
    }
  }

}

// 将store中所有数据映射到props
const mapStateToProps = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login']),
  }
}

const mapDispathToProps = (dispatch) => ({
  login (accountElem, passwordElem) {
    var password = passwordElem.value;
    var account = accountElem.value;
    dispatch(actionCreators.login(account, password))
    console.log(password, account)
  }
})

export default connect(mapStateToProps, mapDispathToProps)(Login);