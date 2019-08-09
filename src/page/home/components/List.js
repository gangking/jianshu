import React from 'react';
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends React.PureComponent {
  render () {
    const { articleList, getMoreList, articlePage } = this.props;

    return (
      <div>
        {articleList.map((item, index) => {
          return (
            <Link key={index} to={'/detail/' + item.get('id')}>
              <ListItem>
                <img className='pic' src={item.get('imgUrl')} alt='' />
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>

          )
        })}
        <LoadMore onClick={() => { getMoreList(articlePage) }}>更多文字</LoadMore>
      </div>

    )
  }
}

// 将store中所有数据映射到props
const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage'])
  }
}

// store.dispatch 挂载到 props上
const mapDispathToProps = (dispatch) => {
  return {
    getMoreList (articlePage) {
      dispatch(actionCreators.getMoreList(articlePage))
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(List);