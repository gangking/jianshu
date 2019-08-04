import styled from 'styled-components';
import logPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom:1px solid #f0f0f0;
    position:relative;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
    position:absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 56px; 
    background: url(${logPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    padding-rgiht: 70px;
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
      float: left;
    }
    &.right {
      float: right;
      color: #969696;
    }
    &.active{
      color: #ea6f5a;
    }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 19px;
    background: #eee;
    margin-top: 9px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    font-size: 14px;
    margin-left: 20px;
    color: #666;
    &.slide-enter {
      transition: all .5s ease-out
    }

    &.slide-enter-active{
      width: 250px;
    }

    &.slide-exit {
      transition: all .5s ease-out
    }

    &.slide-exit-active{
      width: 160px;
    }
    
    &::placeholder {
      color: #999;
    }

    &.focused {
      width: 250px;
    }
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .iconfont{
      position:absolute;
      right:5px;
      bottom:5px;
      width: 30px;
      height: 30px;
      border-radius: 15px;
      line-height: 30px;
      text-align: center;
      transition: all .4s ease-out;
      &.focused {
        background: #777;
        color: white;
      }
    }
`;

export const Addition = styled.div`
      position: absolute;
      right:0;
      top:0;
      height:56px;
`;

export const Button = styled.div`
      float:right;
      line-height:38px;
      border-radius:19px;
      margin-top:9px;
      border:1px solid #ec6149;
      margin-right: 20px;
      padding: 0 20px;
      font-size: 14px;
      &.reg{
        color:#ec6149;
      }
      &.waitting{
        color: #fff;
        background: #ec6149;
      }
`;