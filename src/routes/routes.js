import { lazy } from "react"

const Home = lazy(() => import("../pages/Home.page"));

const routes = [
    {
        id: 1,
        name: "Home",
        path: "/",
        exact: true,
        component: Home,
        authentication: false
    }
];

export default routes;