import ReactParcel from "single-spa-react/parcel";

import Home from "@/pages/home";
import About from "@/pages/about";

const asyncLoader = (moduleName) => () => {
  return new Promise((resolve, reject) => {
    let now = Date.now();
    System.import(moduleName)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        new Error("error");
      });
  });
};

const microApp = (moduleName) => {
  return ({ whitelist }) => {
    return (
      <ReactParcel config={asyncLoader(moduleName)} whitelist={whitelist} />
    );
  };
};

const routes = [
  // 首页
  {
    path: "/",
    name: "Home",
    exact: true,
    component: Home,
  },
  // 关于
  {
    path: "/about",
    name: "About",
    exact: true,
    component: About,
  },
  // bar
  {
    path: "/bar",
    name: "Bar",
    exact: true,
    component: microApp("@tf/bar"),
  },
];

export default routes;
