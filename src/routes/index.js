import Loadable from "react-loadable";
import loadingSpinner from "./loading.js";

export const NotFound = Loadable({
  loader: () => import("../views/NotFound"),
  loading: loadingSpinner,
});

export const Ref = Loadable({
  loader: () => import("../views/Ref/index"),
  loading: loadingSpinner,
});

export const UserDashBoard = Loadable({
  loader: () => import("../views/User/index"),
  loading: loadingSpinner,
});
