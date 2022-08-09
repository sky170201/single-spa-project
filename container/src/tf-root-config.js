import { registerApplication, start } from "single-spa";

// registerApplication({
//   // 微应用名称
//   name: "@single-spa/welcome",
//   // 通过systemjs引用打包好的微应用模块代码
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   // 使用数组，指定首页路由下激活
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@tf/foo",
  app: () => System.import("@tf/foo"),
  activeWhen: ["/"],
});

// 启动当前应用
start({
  // 是否可以通过 history.pushState() 和 history.replaceState() 更改触发 single-spa 路由
  // true: 不允许; false: 允许
  // 默认是 false
  // 在某些情况下，将此设置为true可以提高性能
  urlRerouteOnly: true,
});
