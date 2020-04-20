<template>
    <div class="login container">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">用户登录</h3>
            </div>
            <div class="panel-body">
                <h3></h3>
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="inputuser3" class="col-sm-2 control-label">用户名</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputuser3" placeholder="用户名"
                                   v-model="user.username">
                        </div>

                    </div>
                    <div class="form-group">
                        <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword3" placeholder="Password"
                                   v-model="user.password">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" ref="checkbox"> 记住密码
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group ">
                        <div class="col-sm-offset-2 col-sm-10 last">
                            <button type="button" class="btn btn-success" @click="Login">登录</button>
                            <span @click="toRegister">新用户，马上注册</span>
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
                    password: ''
                }
            }

        },
        mounted() {
            if (sessionStorage.getItem('user')) {
                this.$refs.checkbox.checked = true
            }

        },
        created() {
            if (sessionStorage.getItem('user')) {
                this.user = JSON.parse(sessionStorage.getItem('user'));
            }
            if (this.$route.params.username) {
                this.user.username = this.$route.params.username;
            }
        },
        components: {
            vue_header,
            vue_nav
        }, methods: {
            toRegister() {
                this.$router.push({name: 'register'});
            },
            Login() {
                this.$http.post('http://localhost:6868/login.php', {
                    username: this.user.username,
                    pwd: this.user.password
                }, {emulateJSON: true}).then((result) => {
                    if (result.body !== 'fail') {
                        sessionStorage.setItem('id', result.body);
                        this.$router.push({path: '/index', params: {id: parseInt(result.body)}});
                        if (this.$refs.checkbox.checked) {
                            sessionStorage.setItem('user', JSON.stringify(this.user));
                        } else {
                            sessionStorage.setItem('user', JSON.stringify(this.user));
                        }
                    } else {
                        alert('登录失败');
                        this.user = {
                            username: '',
                            password: ''
                        }
                    }

                });

            }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less" type="text/less" module>
    .login {
        .panel {
            .panel-body {
                display: flex;
                justify-content: center;
                .form-horizontal {
                    width: 500px;
                    .last {
                        display: flex;
                        justify-content: space-between;
                        .btn {
                            width: 100px;
                        }
                        span {
                            align-self: flex-end;
                            cursor: pointer;
                            color: #2aabd2;
                        }
                    }

                }
            }
        }
    }
</style>