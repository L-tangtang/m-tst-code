import Login from '../views/login';
import Home from '../views/home';
import Add from '../views/add';

export default [
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/add',
        name: 'add',
        component: Add,
    },
];
