import { Home } from '@/layout/layoutElements/Home';
import { Blog } from '@/layout/layoutElements/Blog';
import { ProductDetails } from '@/layout/layoutElements/ProductDetails';
import { ImageCollection } from '@/layout/layoutElements/ImageCollection';
import { Login } from '@/layout/layoutElements/Login';
import { Category } from '@/layout/layoutElements/Category';
import config from '@/config';

const publiclRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.blog,
        component: Blog,
    },
    {
        path: config.routes.productDetails,
        component: ProductDetails,
    },
    {
        path: config.routes.imageCollection,
        component: ImageCollection,
    },
    {
        path: config.routes.login,
        component: Login,
    },
    {
        path: config.routes.category,
        component: Category,
    },
];

const privateRoutes = {};

export { publiclRoutes, privateRoutes };
