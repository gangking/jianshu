import React from 'react';
import {
  ListItem,
  ListInfo
} from '../style';
import { connect } from 'react-redux';

class List extends React.Component {
  render () {
    const {articleList} = this.props;
    
    return (
      <div>
        {articleList.map((item,index)=>{
          return (
            <ListItem key={item}>
              <img className='pic' src={item.get('imgUrl')}/>
              <ListInfo>
              <h3 className='title'>{item.get('title')}</h3>
              <p className='desc'>{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          )
        })}
        
      </div>

    )
  }
}

// 将store中所有数据映射到props
const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList'])
  }
}
// store.dispatch 挂载到 props上
const mapDispathToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps,null)(List);