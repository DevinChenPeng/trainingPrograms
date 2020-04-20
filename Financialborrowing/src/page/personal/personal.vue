<template>
    <div class="personal container">
        <div class="row">
            <div class="col-md-3 col-sm-12">
                <div class="list-group">
                    <li class="list-group-item">投资项目</li>
                </div>
                <div class="list-group">
                    <li class="list-group-item ">
                        借款项目
                    </li>
                    <router-link class="list-group-item" :to="{name:'bid_request_list'}">借款项目</router-link>
                    <router-link class="list-group-item" to="/borrowBidReturn_list">还款明细</router-link>
                    <router-link class="list-group-item" to="/personal/borrow_apply">
                        申请借款
                    </router-link>
                </div>
                <div class="list-group">
                    <li href="#" class="list-group-item">
                        我的账户
                    </li>
                    <router-link class="list-group-item" to="/personal/personal_info">账户信息</router-link>
                    <router-link class="list-group-item" to="/personal/real_auth">实名认证</router-link>
                    <router-link class="list-group-item" to="#">银行卡管理</router-link>
                    <router-link class="list-group-item" to="3">登录记录</router-link>
                </div>
                <div class="list-group">
                    <li href="#" class="list-group-item">
                        资产详情
                    </li>
                    <router-link class="list-group-item" to="#">账户流水</router-link>
                    <router-link class="list-group-item" to="/personal/recharge_list">充值明细</router-link>
                    <router-link class="list-group-item" to="#">提现记录</router-link>
                    <router-link class="list-group-item" to="#">收款明细</router-link>
                </div>
                <div class="list-group">
                    <router-link class="list-group-item info" to="/personal/user_info">
                        个人资料
                    </router-link>
                </div>

            </div>

            <div class="col-md-9 col-sm-12">
                <transition>
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped lang="less" rel="stylesheet/less" type="text/less" moddive>
    .personal {
        .row {
            .list-group {
                li,
                .info {
                    background-color: #ccc;
                }
            }
        }
    }
</style>