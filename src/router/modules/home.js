

export default [

    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../../views/About.vue'),
        meta: {
            title: '首页'
        }
    },
]