import { fromJS } from 'immutable';
const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '程序员',
      imgUrl: '//upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp'
    },
    {
      id: 2,
      title: '读书',
      imgUrl: '//upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp'
    }
  ],
  articleList: [
    {
      id: 1,
      title: '用Flutter构建漂亮的UI界面 - 基础组件篇',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/1990133-c68d8f46d6cdd7db.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
      desc: '1. 前言 Flutter作为时下最流行的技术之一，凭借其出色的性能以及抹平多端的差异优势，早已引起大批技术爱好者的关注，甚至一些闲鱼，美团，腾...'
    },
    {
      id: 2,
      title: '用Flutter构建漂亮的UI界面 - 基础组件篇',
      desc: '1. 前言 Flutter作为时下最流行的技术之一，凭借其出色的性能以及抹平多端的差异优势，早已引起大批技术爱好者的关注，甚至一些闲鱼，美团，腾...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/1990133-c68d8f46d6cdd7db.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
  }
  return state;
}