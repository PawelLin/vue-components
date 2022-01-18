export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('_views/home.vue')
    },
    {
        path: '/vue-pawel-ui',
        name: 'VuePawelUi',
        component: () => import('_views/vue-pawel-ui/index.vue')
    },
    {
        path: '/scss',
        name: 'Scss',
        component: () => import('_views/scss/index.vue')
    }
]
