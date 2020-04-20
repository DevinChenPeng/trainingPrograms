//入口文件
import Vue from 'vue';

//1.1 导入路由,AJAX
import Vue_router from 'vue-router';
import Vue_resource from 'vue-resource';
import moment from 'moment';
import echarts from 'echarts'

Vue.prototype.$echarts = echarts;
Vue.use(Vue_resource);
Vue.use(Vue_router);
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern);
});

//导入样式
import './css/reset.css';
import './lib/bootstrap/css/bootstrap.css';
import './lib/bootstrap/css/bootstrap-theme.css';
import './lib/bootstrap/js/bootstrap.min.js';

//1.3 导入自己的路由模块
import router from './routers/router.js';


//导入app组件
import app from './app.vue';

let vm = new Vue({
    el:'#app',
    render: c => c(app),
    router,
});