import AddEditPage from 'pages/AddEditPage';
import HomePage from 'pages/HomePage';

const routes = [
    {
        path: '/home',
        label: 'Home',
        component: HomePage
    },
    {
        path: '/add',
        label: 'Add User',
        component: AddEditPage
    },
    {
        path: '/edit/:id',
        component: AddEditPage
    }
]

export default routes;