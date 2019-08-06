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
  width: 240px;
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