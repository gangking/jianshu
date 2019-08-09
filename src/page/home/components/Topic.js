import React from 'react';
import {
  TopicWrapper,
  TopicItem
} from '../style';
import { connect } from 'react-redux';

class Topic extends React.PureComponent {
  render () {
    const { topicList } = this.props;
    return (
      <TopicWrapper>
        {topicList.map((item, index) => {
          return (
            <TopicItem key={index}>
              <img alt='' className='Topic-pic' src={item.get('imgUrl')} />
              {item.get('title')}
            </TopicItem>
          )
        })}

      </TopicWrapper>
    )
  }
}

// 将store中所有数据映射到props
const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList']),
  }
}

// store.dispatch 挂载到 props上
const mapDispathToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Topic);