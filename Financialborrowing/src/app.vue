<template>
    <div>
        <!--头部-->
        <vue_header></vue_header>
        <!--导航nav-->
        <vue_nav :isShow="isShow" :msg="msg"></vue_nav>
        <!--中间路由-->
        <transition>
            <router-view></router-view>
        </transition>
        <!--底部-->
        <vue_footer></vue_footer>
    </div>
</template>

<script>
    import vue_header from './components/header.vue';
    import vue_footer from './components/footer.vue'
    import vue_nav from './components/nav.vue';

    export default {
        name: "",
        data(){
          return{
              msg:'',
              isShow:true
          }
        },
        components: {
            vue_header,
            vue_footer,
            vue_nav
        },
        watch: {
            '$route':'getPath'
        },
        methods:{
            getPath(){
                if (this.$route.path === '/login'){
                    this.isShow =false;
                    this.msg = '欢迎登录'
                }else if(this.$route.path === '/register'){
                    this.isShow =false;
                    this.msg = '欢迎注册'
                } else if(this.$route.path === '/recharge'){
                    this.isShow =false;
                    this.msg = '账户充值'
                }else {
                    this.isShow =true;
                    this.msg= '';
                }
            }
        },
        created(){

            if (this.$route.path === '/login'){
                this.isShow =false;
                this.msg = '欢迎登录'
            }else if(this.$route.path === '/register'){
                this.isShow =false;
                this.msg = '欢迎注册'
            }else if(this.$route.path === '/recharge'){
                this.isShow =false;
                this.msg = '账户充值'
            }else {
                this.isShow =true;
                this.msg= '';
            }
        }
    }

</script>

<style scoped lang="less" rel="stylesheet/less" type="text/less" module>
</style>