import IRoutes from "./types";
import Home from "../Home/Home.component";
import Task from "../Task/Task.component";

const routesConfig: Array<IRoutes> = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/tasks',
        component: Task
    }
];

export default routesConfig;