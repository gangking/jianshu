import React from 'react';
import {
  DetailWrapper,
  Header,
  Content
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';

class Detail extends React.PureComponent {

  render () {
    console.log(this.props.match.params.id)
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header dangerouslySetInnerHTML={{ __html: title }} />
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    )
  }

  componentDidMount () {
    this.props.getDetail();
  }
}

// 将store中所有数据映射到props
const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispathToProps = (dispatch) => ({
  getDetail () {
    var action = actionCreators.getDetail();
    dispatch(action);
  }

})

export default connect(mapStateToProps, mapDispathToProps)(withRouter(Detail));