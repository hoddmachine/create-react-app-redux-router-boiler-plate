import HomeView from './views/Home';
import BensinView from './views/Bensin';

export const routes = [].concat([
    {
        exact: true,
        strict: true,
        path: '/',
        component: HomeView,
    },
    {
        exact: true,
        strict: true,
        path: '/bensin',
        component: BensinView
    },
    {
        exact: true,
        path: '*',
        component: HomeView
    }
]);
