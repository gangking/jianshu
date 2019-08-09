import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends React.PureComponent {

  render () {
    const { loginStatus } = this.props;
    if (loginStatus) {
      return (
        <div>写文章</div>
      )
    } else {
      return <Redirect to='/login' />;
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
})

export default connect(mapStateToProps, mapDispathToProps)(Write);