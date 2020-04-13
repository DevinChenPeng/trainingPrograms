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
                    <a class="navbar-brand" href="#"><span class="glyphicon glyphicon-phone-alt"></span>028-86261949</a>
                </div>


                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="active"><a href="#">首页 <span class="sr-only">(current)</span></a></li>
                        <li><a href="#">登录</a></li>
                        <li><a href="#">注册</a></li>
                        <li><a href="#">帮助</a></li>
                        <li><a href="#">联系客服</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss" module>
    .navbar{
        margin: 0;
    }

</style>