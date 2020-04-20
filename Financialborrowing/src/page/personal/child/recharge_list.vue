<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <span class="pull-left" style="line-height: 35px;">充值明细</span>
            <router-link class="pull-right btn btn-danger btn-sm" :to="{name:'recharge'}">
                账户充值
            </router-link>
            <div class="clearfix"></div>
        </div>
        <table class="table">
            <thead>
            <tr>
                <th>充值时间</th>
                <th>充值金额</th>
                <th>充值状态</th>
                <th>备注</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,i) in recharge" :key="i">
                <td>{{item.time| dateFormat}}</td>
                <td>{{item.chargemoney}}</td>
                <td>
                    <p class="text-success" v-if="item.success ==true">充值成功</p>
                    <p class="text-success" v-if="item.success ==false">充值成功</p>
                </td>
                <td>
                    线下充值{{item.chargemoney}}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                recharge: []
            }
        },
        created() {
            JSON.parse(localStorage.getItem('recharge')).forEach((item, i)=>{
                if (parseInt(item.id) === parseInt(sessionStorage.getItem('id'))) {
                    this.recharge.push(item);
                }
            });
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less" type="text/less" module>

</style>