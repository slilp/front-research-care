import { lazy } from "react";

const Home = lazy(() => import("./view/Home"));
const Login = lazy(() => import("./view/Login"));
const Register = lazy(() => import("./view/Register"));
const Redeem = lazy(() => import("./view/Redeem"));
const History = lazy(() => import("./view/History"));
const Dashboard = lazy(() => import("./view/Dashboard"));
const Info = lazy(() => import("./view/Info"));
const Research = lazy(() => import("./view/Research"));
const Job = lazy(() => import("./view/Job"));

const routes = {
  login: {
    path: "/login",
    name: "Login",
    component: Login,
  },
  register: {
    path: "/register",
    name: "Register",
    component: Register,
  },
  home: {
    path: "/",
    name: "Home",
    component: Home,
  },
  job: {
    path: "/job",
    name: "Job",
    component: Job,
  },
  research: {
    path: "/research/:id",
    name: "Research",
    component: Research,
  },
  redeem: {
    path: "/redeem",
    name: "Redeem",
    component: Redeem,
  },
  info: {
    path: "/info",
    name: "Info",
    component: Info,
  },
  dashboard: {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  history: {
    path: "/history",
    name: "History",
    component: History,
  },
};

const guest = {
  routes: [
    routes.login,
    routes.register,
    routes.redeem,
    routes.job,
    routes.home,
  ],
  redirect: {
    ...routes.login,
  },
};

const member = {
  routes: [
    routes.dashboard,
    routes.redeem,
    routes.history,
    routes.info,
    routes.job,
    routes.research,
    routes.home,
  ],
  redirect: {
    ...routes.dashboard,
  },
};

const permissionRoutes = {
  guest,
  member,
};

export default permissionRoutes;
