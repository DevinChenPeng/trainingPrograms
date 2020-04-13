<template>
    <div>
        <!--头部-->
        <vue_header></vue_header>
        <!--导航nav-->
        <div class="navbar navbar-default" id="nav">
            <div class="container">
                <div class="navbar-header">
                    <a href="index.html">
                        <img alt="Brand" src="./images/logo.png">
                    </a>
                </div>
                <ul class="nav navbar-nav">
                    <li class="active"><a>首页</a></li>
                    <li><a>我要投资</a></li>
                    <li><a>我要借款</a></li>
                    <li><a>个人中心</a></li>
                    <li><a >新手指引</a></li>
                    <li><a >关于我们</a></li>
                </ul>
            </div>

        </div>
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

    export default {
        name: "",
        components:{
            vue_header,
            vue_footer
        },
        methods:{

        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less" type="text/less" module>
    #nav{
        .navbar-header{
            padding-top: 25px;
        }
        ul{
            li{
                &:hover{
                    background-color: white;
                }
                text-align: center;
                a{
                    padding: 30px 20px;
                }
            }
        }
    }



</style>