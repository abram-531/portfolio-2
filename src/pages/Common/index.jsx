import { lazy } from "react";

const Dashboard = lazy(() => import('./Dashboard'));
const Error404 = lazy(() => import('./Error404'));

export default {
  dashboard: Dashboard,
  error404: Error404
}