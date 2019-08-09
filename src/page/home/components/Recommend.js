import React from 'react';
import { RecommendWrapper, RecommendItem } from '../style.js';
import { connect } from 'react-redux';

class Recommend extends React.PureComponent {
  render () {
    const { recommendList } = this.props;
    return (
      <RecommendWrapper>
        {
          recommendList.map((item) => {
            return (
              <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
            )
          })
        }
      </RecommendWrapper>
    )
  }
}

// 将store中所有数据映射到props
const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList']),
  }
}

export default connect(mapStateToProps, null)(Recommend);