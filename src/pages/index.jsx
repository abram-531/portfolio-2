import { lazy } from "react";
import Common from './Common';

const Login = lazy(() => import('./Auth/Login'));
const Register = lazy(() => import('./Auth/Register'));

const pages = {
    login: Login,
    register: Register,
    dashboard: Common.dashboard,
    error404: Common.error404,
}

export default pages