## npm i create-single-spa -g
全局安装脚手架

## create-single-spa
脚手架创建微应用

## 类型
在 single-spa 框架中有三种类型的微前端应用：
- single-spa root config：容器项目，创建微前端容器应用，通过容器应用加载和管理普通的微应用。
- single-spa application / parcel：微前端架构中的微应用，可以使用 vue、react、angular 等框架。
  - single-spa Application 和路由相关联的，根据路由决定访问哪个微应用。
  - single-spa Parcel 的使用方式和前者一样，区别是这种类型的微应用不和路由进行关联，它主要是用于跨应用共享 UI 组件的
- utility modules：公共模块应用，非渲染组件，用于跨应用共享 javascript 逻辑的微应用

## 企业级项目盈余：对single-spa相关包的配置做了修改
对以下包引入的system.js/extra/amd.js路径进行了改写
- ts-config-single-spa
- webpack-config-single-spa
- webpack-config-single-spa-react
- webpack-config-single-spa-react-ts
- webpack-config-single-spa-ts

原有的包的配置是引入的cdn路径，由于内网环境无法访问，所以改为了相对路径，但对于想独立启动某个项目 会有问题

在standalone-single-spa-webpack-plugin.js插件文件中的modifyScripts方法中
当设置了环境变量standalone时，会走到以下方法中
```js
scripts.push({
  tagName: 'script',
  voidTag: false,
  attribute: {
    defer: false,
    src: '/lib/system.min.js'
  }
})
scripts.push({
  tagName: 'script',
  voidTag: false,
  attribute: {
    defer: false,
    src: '/lib/amd.min.js'
  }
})
```

## 参考链接：https://blog.csdn.net/u012961419/article/details/122678442