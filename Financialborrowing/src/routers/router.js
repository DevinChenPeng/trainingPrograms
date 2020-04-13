import VueRouter from 'vue-router';


import Index from '../page/index.vue';
import Invest from '../page/invest.vue';
import Borrow from '../page/borrow.vue';
import Personal from '../page/personal.vue';

let router = new VueRouter({
    routes: [
        {path: '/', redirect: '/index'},
        {path: '/index', component: Index,name:'index'},
        {path: '/invest', component: Invest,name:'invest'},
        {path: '/borrow', component: Borrow,name:'borrow'},
        {path: '/personal', component: Personal,name:'personal'},
    ],
    linkActiveClass: 'mui-active'
});

export default router