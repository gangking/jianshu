import React from 'react';
import Loadable from 'react-loadable';


const LoadableComponent = Loadable({
  // 指异步加载一个新组件
  loader: () => import('./'),
  // 指通过函数显示一个临时加载样式组件
  loading () {
    return <div>正在加载...</div>
  },
});

export default () => <LoadableComponent />;