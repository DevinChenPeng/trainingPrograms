<template>
    <div class="personal_info">
        <div class="panel panel-default">
            <div class="panel-body ">
                <div class="top clearfix">
                    <div class="pull-left img">
                        <img src="../../../images/head_icon.jpg">
                    </div>
                    <div class="pull-left">
                        <p>昵 称：{{user.nickname}}</p>
                        <p>用户名：{{user.username}}</p>
                        <p>最后登录时间：{{user.lastlogintime}}</p>
                    </div>
                    <div class="pull-right">
                        <button class="btn-primary btn" data-toggle="modal" data-target="#myModal">修改信息</button>
                        <!-- Modal -->

                    </div>
                </div>
                <div class="main">
                    <echarts :totalmoney="user.totalmoney" :usablemoney="user.usablemoney" :blockedmoney="user.blockedmoney"></echarts>
                    <div class="row h4 text-center">
                        <div class="col-sm-12 col-md-4">总金额：<i>{{user.totalmoney}}</i></div>
                        <div class="col-sm-12 col-md-4">可用金额：<i>{{user.usablemoney}}</i></div>
                        <div class="col-sm-12 col-md-4">冻结金额：<i>{{user.blockedmoney}}</i></div>
                    </div>
                    <div class="text-center">
                        <router-link tag="button" class="btn btn-primary btn-lg" :to="{name:'recharge'}">账户充值</router-link>
                        <button class="btn btn-danger btn-lg">账户提现</button>
                    </div>
                    <div class="info">
                        <div class="row">
                            <div class="col-sm-12 col-md-4">
                                <div class="pull-left">
                                    <img src="../../../images/shiming.png">
                                </div>
                                <div class="pull-left">
                                    <p><b>实名认证</b></p>
                                    <p>未认证<a href="#">马上认证</a></p>
                                </div>
                                <div class="clearfix"></div>
                                <p>实名认证之后才能在平台投资</p>
                            </div>
                            <div class="col-sm-12 col-md-4">
                                <div class="pull-left">
                                    <img src="../../../images/shouji.jpg">
                                </div>
                                <div class="pull-left">
                                    <p><b>手机认证</b></p>
                                    <p>已认证<a href="#">查看</a></p>
                                </div>
                                <div class="clearfix"></div>
                                <p>可以收到系统操作信息,并增加使用安全性</p>
                            </div>
                            <div class="col-sm-12 col-md-4">
                                <div class="pull-left">
                                    <img src="../../../images/youxiang.jpg">
                                </div>
                                <div class="pull-left">
                                    <p><b>邮箱认证</b></p>
                                    <p>已认证<a href="#">查看</a></p>
                                </div>
                                <div class="clearfix"></div>
                                <p>您可以设置邮箱来接收重要信息</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-4">
                                <div class="pull-left">
                                    <img src="../../../images/baozhan.jpg">
                                </div>
                                <div class="pull-left">
                                    <p><b>VIP会员</b></p>
                                    <p>普通用户<a href="#">查看</a></p>
                                </div>
                                <div class="clearfix"></div>
                                <p>VIP会员，让你更快捷的投资</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">个人资料</h4>
                    </div>
                    <div class="modal-body">
                        <div class="panel panel-default">
                            <form id="userInfoForm" class="form-horizontal"
                                  style="width: 700px;">
                                <div class="form-group">
                                    <label class="col-sm-4 control-label">
                                        用户名
                                    </label>
                                    <div class="col-sm-8">
                                        <p class="form-control-static">{{user.username}}</p>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-4 control-label">
                                        昵称
                                    </label>
                                    <div class="col-sm-8">
                                        <input type="text" name="phone" style="width: 250px;" class="form-control"
                                               v-model="user.nickname"/>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-4 control-label">
                                        邮箱
                                    </label>
                                    <div class="col-sm-8">
                                        <input type="email" name="email" style="width: 250px;" class="form-control"
                                               value="" v-model="user.email"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-4 control-label">
                                        手机
                                    </label>
                                    <div class="col-sm-8">
                                        <input type="tel" name="tel" style="width: 250px;" class="form-control"
                                               value="" v-model="user.phone"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="button" class="btn btn-primary col-sm-offset-5" @click="updateuser(user.id)">
                                        保存数据
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import echarts from '../../../components/echarts.vue'
    export default {
        name: "",
        data() {
            return {
                user: {
                    id: null,
                    nickname: '',	//昵称
                    totalmoney: '',	//总金额
                    username: '',	//账号
                    usablemoney: '',	//可用金额
                    lastlogintime: '', //上次登录时间
                    blockedmoney: '',	//冻结金额
                    eamil: '',
                    phone:''
                },
            }
        },
        created() {
            this.$http.get('http://localhost:6868/getuserinfo.php',
                {params: {id: parseInt(sessionStorage.getItem('id'))}}).then((result) => {
                this.user = result.body;
                sessionStorage.setItem('user',JSON.stringify(this.user));
            });
        },
        methods: {
            updateuser(id) {
                this.$http.get('http://localhost:6868/updateuser.php',
                    {params: {id: id, nickname: this.user.nickname, email: this.user.email,phone:this.user.phone}}).then((result) => {
                    $('#myModal').modal('hide');
                })
            }
        },
        components:{
            echarts
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less" type="text/less" module>
    .personal_info {
        .panel {
            .img {
                border: 1px solid #cccccc;
                padding: 15px;
                img {
                    width: 72px;
                    height: 72px;
                }
            }
            .panel-body {
                padding: 15px;
                .top {
                    padding-bottom: 15px;
                    border-bottom: 1px solid #cccccc;
                    div {
                        &:nth-child(2) {
                            margin-top: 10px;
                            margin-left: 15px;
                        }
                    }
                }
                .main {
                    margin-top: 15px;
                    .h4 {
                        margin: 0 auto;
                        i {
                            color: #2aabd2;
                        }
                    }
                    .text-center {
                        margin-top: 30px;
                    }
                    .info {
                        margin-top: 35px;
                        .row {
                            margin-top: 15px;
                            & > div {
                                div {
                                    &:nth-child(2) {
                                        margin-left: 15px;
                                        a {
                                            margin-left: 5px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>