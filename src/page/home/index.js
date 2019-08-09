import React from 'react';
import {
  HomWrapper,
  HomWrapperLeft,
  HomWrapperRight,
  BackTop
} from './style';

import Recommend from './components/Recommend';
import List from './components/List';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store/';

class Home extends React.PureComponent {
  handleScrollTop () {
    window.scrollTo(0, 0)
  }
  render () {
    const { showScroll } = this.props;
    return (
      <HomWrapper>
        <HomWrapperLeft>
          <img alt='' className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4686/b205842c3dd6736c233b052411fe1211f164fcaf.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
          <Topic></Topic>
          <List></List>
        </HomWrapperLeft>
        <HomWrapperRight>
          <Recommend>Recommend</Recommend>
          <Writer>Writer</Writer>
        </HomWrapperRight>
        {showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : ''}
      </HomWrapper>
    )
  }

  componentDidMount () {
    this.props.changeHomeData();

    this.bindEvents();
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }

  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
}

// 将store中所有数据映射到props
const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll']),
  }
}

const mapDispathToProps = (dispatch) => ({
  changeHomeData () {
    var action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow (e) {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
    console.log(document.documentElement.scrollTop)
  }
})

export default connect(mapStateToProps, mapDispathToProps)(Home);