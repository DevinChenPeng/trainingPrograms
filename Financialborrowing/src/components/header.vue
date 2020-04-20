<template>
    <div class="vue_header">
        <!--头部header-->
        <nav class="navbar navbar-inverse" id="header">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand"><span class="glyphicon glyphicon-phone-alt"></span>028-86261949</a>
                </div>


                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <router-link tag="li" :to="{name:'index'}"><a>首页 <span class="sr-only">(current)</span></a>
                        </router-link><!--@click="toPersonal"-->
                        <router-link tag="li" :to="{name:'login'}" v-show="!isShow"><a>登录</a></router-link>
                        <li v-if="isShow" @click="toPersonal" :class="active?'active':''"><a>{{username}}</a></li>
                        <router-link tag="li" :to="{name:'register'}" v-if="!isShow"><a>注册</a></router-link>
                        <li><a href="" v-if="isShow" @click="clear">注销</a></li>
                        <router-link tag="li" :to="{name:'help'}"><a>帮助</a></router-link>
                        <router-link tag="li" :to="{name:'tel'}"><a>联系客服</a></router-link>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                username: '',
                isShow: false,
                active:false
            }
        },
        created() {
            if (sessionStorage.getItem('user')) {
                this.username = JSON.parse(sessionStorage.getItem('user')).username;
                this.isShow = true;
            } else {
                this.isShow = false;
            }
        },
        methods: {
            toLogin() {
                this.$router.replace({name: 'login'});
            },
            clear(){
                sessionStorage.removeItem('user');
            },
            getPath(){
                let path='';
                path = (this.$route.path).split('/');
                if (path[1]==='personal') {
                    this.active =true;
                }else {
                    this.active =false;
                }

                if (sessionStorage.getItem('user')) {
                    this.username = JSON.parse(sessionStorage.getItem('user')).username;
                    this.isShow = true;
                } else {
                    this.isShow = false;
                }
            },
            toPersonal(){
                this.$router.push({path:'/personal/'});
            }
        },
        watch:{
            '$route':'getPath'
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss" module>
    .navbar {
        margin: 0;
        a{
            cursor: pointer;
        }
    }

</style>