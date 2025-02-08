import { lazy } from "react";

const Bin = lazy(() => import('./BinLayout'));
const Common = lazy(() => import('./Common'));
const User = lazy(() => import('./UserLayout'));

const layouts = {
    bin: Bin,
    common: Common,
    user: User,
}

export default layouts