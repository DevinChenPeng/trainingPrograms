import VueRouter from 'vue-router';


import Index from '../page/index.vue';
import Invest from '../page/invest/invest.vue';
import All_invest from '../page/invest/child/all_invest.vue';
import All_invest2 from '../page/invest/child/all_invest2.vue';
import All_invest3 from '../page/invest/child/all_invest3.vue';
import Borrow from '../page/borrow/borrow.vue';
import Borrow_apply from '../page/borrow/child/borrow_apply.vue';
import Borrow_info from '../page/borrow/child/borrow_info.vue';
import Personal from '../page/personal/personal.vue';
import Personal_info from '../page/personal/child/personal_info.vue';
import Recharge_list from '../page/personal/child/recharge_list.vue';
import Bid_request_list from '../page/personal/child/bid_request_list.vue';
import Real_auth from '../page/personal/child/real_auth.vue';
import User_info from '../page/personal/child/user_info.vue';
import Login from '../page/login.vue';
import Recharge from '../page/recharge.vue';
import Register from '../page/register.vue';
import Help from '../page/help.vue';
import Tel from '../page/tel.vue';

let router = new VueRouter({
    routes: [
        {path: '/', redirect: '/index'},
        {path: '/index', component: Index, name: 'index'},
        {
            path: '/invest',
            component: Invest,
            name: 'invest',
            children:[
                {path: '/', redirect: '/invest/all_invest'},
                {path:'all_invest',component:All_invest,name:'all_invest'},
                {path:'all_invest2',component:All_invest2,name:'all_invest2'},
                {path:'all_invest3',component:All_invest3,name:'all_invest3'},
            ],
            linkActiveClass: 'active'
        },
        {path: '/borrow', component: Borrow, name: 'borrow'},
        {
            path: '/personal',
            component: Personal,
            name: 'personal',
            children:[
                {path: '/', redirect: '/personal/personal_info'},
                {path:'personal_info',component:Personal_info,name:'personal_info'},
                {path:'bid_request_list',component:Bid_request_list,name:'bid_request_list'},
                {path:'real_auth',component:Real_auth,name:'real_uth'},
                {path:'user_info',component:User_info,name:'user_info'},
                {path:'borrow_apply',component:Borrow_apply,name:'borrow_apply'},
                {path:'recharge_list',component:Recharge_list,name:'recharge_list'},

            ],
            linkActiveClass: 'active'
        },
        {path: '/login', component: Login, name: 'login'},
        {path: '/register', component: Register, name: 'register'},
        {path: '/recharge', component: Recharge, name: 'recharge'},
        {path: '/help', component: Help, name: 'help'},
        {path: '/tel', component: Tel, name: 'tel'},
        {path:'/borrow_info', component: Borrow_info, name: 'borrow_info'},
    ],
    linkActiveClass: 'active'
});

export default router