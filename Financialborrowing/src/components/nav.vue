<template>
    <div class="navbar navbar-default" id="nav">
        <div class="container">
            <div class="navbar-header">
                <a href="index.html">
                    <img alt="Brand" src="../images/logo.png">
                </a>
            </div>
            <ul class="nav navbar-nav" v-if="isShow">
                <router-link tag="li" to="/index">
                    <a>首页</a>
                </router-link>
                <router-link tag="li" to="/invest">
                    <a>我要投资</a>
                </router-link>
                <router-link tag="li" to="/borrow">
                    <a>我要借款</a>
                </router-link>
                <router-link tag="li" to="/personal">
                    <a>个人中心</a>
                </router-link>
                <router-link tag="li" to="/aaa">
                    <a>新手指引</a>
                </router-link>
                <router-link tag="li" to="/bbb">
                    <a>关于我们</a>
                </router-link>
            </ul>
            <span>{{msg}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
            }
        },
        props: ['isShow','msg']
    }
</script>

<style scoped lang="less" rel="stylesheet/less" type="text/less" module>
    #nav {
        .navbar-header {
            padding-top: 25px;
        }
        ul {
            li {
                &:hover {
                    background-color: white;
                }
                text-align: center;
                a {
                    padding: 30px 20px;
                }
            }
        }
        span{
            color: #2ca2ee;
            font-size: 30px;
            padding: 20px 20px;
            display: inline-block;
            font-weight: bold;
        }
    }
</style>