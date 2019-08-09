import styled from 'styled-components';

export const HomWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow:hidden;
`;

export const HomWrapperLeft = styled.div`
  margin-left:15px;
  margin-top: 30px
  width: 625px;
  float:left
  .banner-img{
    width:625px;
    height:270px;
  }
`;

export const HomWrapperRight = styled.div`
  width: 280px;
  float:right;
`;

// 首页主题样式
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0
  overflow:hidden;
  margin-left:-36px;
  border-bottom:1px solid #dcdcdc;
  box-sizing:border-box;
`;

export const TopicItem = styled.div`
  float:left;
  height:32px;
  line-height:32px;
  padding-right:10px;
  margin-left:36px;
  font-size:14px;
  color:#000;
  border:1px solid #dcdcdc;
  border-redius:4px;
  background:#f7f7f7;
  margin-bottom:10px;
  .Topic-pic{
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
  }
`;

// 文章列表
export const ListItem = styled.div`
  padding:20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow:hidden;
  .pic{
    width:125px;
    height:100px;
    float:right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width:500px;
  float:left;
  .title{
    font-size:18px;
    line-height: 27px;
    font-weight:700;
  }
  .desc{
    font-size:13px;
    line-height:24px;
    color:#999;
  }
`;


// 首页推荐
export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;
`;

export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props) => props.imgUrl}) no-repeat;
    background-size:contain;
    margin-bottom:5px;
`;

// 推荐作者
export const WriterWrapper = styled.div`
    width:278px;
    border:1px solid #dcdcdc;
    border-radius:3px;
    height:300px;
    line-height:300px;
    text-align:center;
`;

// 更多文字
export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    margin:30px 0;
    cursor:pointer;
`;

// 回到顶部
export const BackTop = styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    font-size:12px;
    z-index:1000;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    cursor: pointer;
    border-radius:100%;
    :hover{
      background:#ccc;
      color:white;
    }
`;