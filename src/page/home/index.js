import React from 'react';
import {
  HomWrapper,
  HomWrapperLeft,
  HomWrapperRight
} from './style';

import Recommend from './components/Recommend';
import List from './components/List';
import Topic from './components/Topic';
import Writer from './components/Writer';

class Home extends React.Component {
  render () {
    return (
      <HomWrapper>
        <HomWrapperLeft>
          <img className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4686/b205842c3dd6736c233b052411fe1211f164fcaf.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
          <Topic></Topic>
          <List></List>
        </HomWrapperLeft>
        <HomWrapperRight>
          <Recommend>Recommend</Recommend>
          <Writer>Writer</Writer>
        </HomWrapperRight>
      </HomWrapper>
    )
  }
}

export default Home;