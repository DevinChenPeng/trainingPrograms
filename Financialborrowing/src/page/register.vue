<template>
    <div class="register container">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">用户注册</h3>
            </div>
            <div class="panel-body">
                <h3></h3>
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="inputuser3" class="col-sm-2 control-label">用户名</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" :class="name_isShow.isShow?'success':''"
                                   id="inputuser3" placeholder="用户名"
                                   required @change="userName" v-model="user.username">
                            <p :class="name_isTrue?'green':'red'">{{name_isShow.info}}</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">密码</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" placeholder="Password"
                                   required @change="passWord" v-model="user.password"
                                   :class="pwd_isShow.isShow?'success':''">
                            <p :class="pwd_isTrue?'green':'red'">{{pwd_isShow.info}}</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword4" class="col-sm-2 control-label">确认密码</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password"
                                   required @change="RePassword" v-model="repwd"
                                   :class="repwd_isShow.isShow?'success':''">
                            <p :class="repwd_isTrue?'green':'red'">{{repwd_isShow.info}}</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">邮箱</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" placeholder="邮箱" required @change="email"
                                   v-model="user.email" :class="email_isShow.isShow?'success':''">
                            <p :class="email_isTrue?'green':'red'">{{email_isShow.info}}</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">用户昵称</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" placeholder="用户昵称" required
                                   v-model="user.nickname" :class="nname_isShow.isShow?'success':''" @change="nickname">
                            <p class="green">{{nname_isShow.info}}</p>
                        </div>
                    </div>
                    <div class="form-group ">
                        <div class="col-sm-offset-2 col-sm-10 last">
                            <button type="submit" class="btn btn-success" v-if="flag" @click="register">注册</button>
                            <button type="submit" class="btn btn-success" v-if="!flag" disabled="false">注册</button>
                            <span @click="toLogin">已有用户，马上登录</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import vue_header from '../components/header.vue';
    import vue_nav from '../components/nav.vue';

    export default {
        name: "",
        data() {
            return {
                user: {
                    username: '',
                    password: '',
                    email: '',
                    nickname: ''
                },
                repwd: '',
                name_isShow: {info: '用户名为3~16位字母，数字，符号或中文', isShow: false},
                pwd_isShow: {info: '密码为6~16位字符组成,采用数字、字母、符号安全性更高', isShow: false},
                repwd_isShow: {info: '请再次输入密码', isShow: false},
                email_isShow: {info: '请输入正确的邮箱', isShow: false},
                nname_isShow: {info: '输入用户昵称', isShow: false},
                repwd_isTrue: true,
                name_isTrue: true,
                pwd_isTrue: true,
                email_isTrue: true,
                flag:false
            }
        },
        components: {
            vue_header,
            vue_nav
        },
        methods: {
            userName() {
                let reg = /^.{3,16}$/;
                if (reg.test(this.user.username) === true) {
                    this.$http.get('http://localhost:6868/accrepeat.php',{params:{username:this.user.username}})
                        .then((result)=>{
                            if (result.body === 'ok') {
                                this.name_isTrue = true;
                                this.name_isShow.isShow = true;
                                this.name_isShow.info = '✔';
                                this.flag = true;
                            }else {
                                this.name_isTrue = false;
                                this.name_isShow.isShow = false;
                                this.name_isShow.info = '用户名已存在';
                                this.flag = false;
                            }

                        });

                } else {

                }
            },
            passWord() {
                let reg = /^[A-Za-z0-9]{6,16}$/;
                if (!reg.test(this.user.password)) {
                    this.pwd_isTrue = false;
                    this.pwd_isShow.isShow = false;
                    this.flag = false;
                } else {
                    this.pwd_isTrue = true;
                    this.pwd_isShow.isShow = true;
                    this.pwd_isShow.info = '✔ ';
                    this.flag = true;
                }
            },
            email() {
                let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
                if (!reg.test(this.user.email)) {
                    this.email_isTrue = false;
                    this.email_isShow.isShow = false;this.flag = false;
                } else {
                    this.email_isTrue = this.email_isShow.isShow = true;
                    this.email_isShow.info = '✔ ';
                    this.flag = true;
                }
            },
            RePassword() {
                if (this.repwd !== this.user.password) {
                    this.repwd_isShow.info = '两次输入的密码不一致';
                    this.repwd_isShow.isShow = false;this.flag = false;
                    this.repwd_isTrue = false;

                } else {
                    this.repwd_isShow.info = '✔';
                    this.repwd_isTrue = true;
                    this.repwd_isShow.isShow = true;
                    this.flag = true;
                }
            },
            nickname() {
                if (this.user.nickname.length > 0) {
                    this.nname_isShow.isShow = true;
                    this.nname_isShow.info = '✔ ';
                    this.flag = true;
                } else {
                    this.nname_isShow.isShow = false;this.flag = false;
                }
            },
            register(){
                this.$http.post('http://localhost:6868/reg.php', {
                    username: this.user.username,
                    pwd: this.user.password,
                    email:this.user.email,
                    nickname:this.user.nickname
                }, {emulateJSON: true}).then((result) => {
                    this.$router.push({name:'login',params:{username:this.user.username}});
                });
            },
            toLogin() {
                this.$router.push({name: 'login'})
            }
        }
        }
</script>

<style scoped lang="less" rel="stylesheet/less" type="text/less" module>


    .register {
        .panel {
            .panel-body {
                display: flex;
                justify-content: center;
                .form-horizontal {
                    width: 500px;
                    .success {
                        box-shadow: 1px 1px 5px greenyellow;
                        border: 1px solid greenyellow;
                    }
                    .form-group {
                        p {
                            margin-top: 5px;
                            text-indent: 10px;
                        }
                        .red {
                            color: red;
                        }
                        .green {
                            color: #999999;
                        }
                    }
                    .last {
                        display: flex;
                        justify-content: center;
                        .btn {
                            width: 100px;
                        }
                        span {
                            align-self: flex-end;
                            cursor: pointer;
                            color: #2aabd2;
                            margin-left: 30px;
                        }

                    }

                }
            }
        }
    }
</style>