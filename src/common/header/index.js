import React from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';

const Header = (props) => {
  const { focused, handleInputFocus, handleInputBlur } = props
  return (
    <HeaderWrapper>
      <Logo></Logo>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载APP</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <span className="iconfont">&#xe636;</span>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            timeout={500}
            in={focused}
            classNames='slide'
          >
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </CSSTransition>
          <span
            className={focused ? 'focused iconfont' : 'iconfont'}
          >&#xe637;</span>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='waitting'>
          <span className="iconfont">&#xe62d;</span>
          写文章
          </Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

// 将store中所有数据映射到props
const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused')
  }
}

// store.dispatch 挂载到 props上
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus (e) {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur (e) {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);