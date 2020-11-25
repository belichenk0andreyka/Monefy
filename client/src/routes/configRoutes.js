import Layout from 'components/Layout';
import Registration from 'components/Registration';
import Authorization from 'components/Authorization';

const routes = [
    {
        component: Layout,
        routes: [
            {
                path: "/",
                exact: true,
                component: Authorization
            },
            {
                path: "/sandwiches",
                component: Registration
            },
            // {
            //     path: "/tacos",
            //     component: Tacos,
            //     routes: [
            //         {
            //             path: "/tacos",
            //             exact: true,
            //             component: TacosMain
            //         },
            //         {
            //             path: "/tacos/bus",
            //             exact: true,
            //             component: Bus
            //         },
            //         {
            //             path: "/tacos/cart",
            //             exact: true,
            //             component: Cart
            //         }
            //     ]
            // }
        ]
    }
]

export default routes;
