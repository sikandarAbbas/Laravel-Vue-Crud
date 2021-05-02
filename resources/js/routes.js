export default [
    { path: '/users', component: require('./components/Users.vue').default },
    { path: '/', component: require('./components/Users.vue').default },
    { path: '*', component: require('./components/NotFound.vue').default }
];
