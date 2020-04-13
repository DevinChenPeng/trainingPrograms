//入口文件
import Vue from 'vue';

//1.1 导入路由,AJAX
import Vue_router from 'vue-router';
import Vue_resource from 'vue-resource';

Vue.use(Vue_resource);
Vue.use(Vue_router);

//导入样式
import './lib/bootstrap/css/bootstrap.css';
import './lib/bootstrap/css/bootstrap-theme.css';

//1.3 导入自己的路由模块
import router from './routers/router.js';

//导入app组件
import app from './app.vue';

let vm = new Vue({
    el:'#app',
    render: c => c(app),
    data:{
        msg:111
    },
    router,
});