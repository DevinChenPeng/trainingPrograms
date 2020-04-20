<template>
    <div class="container" style="margin-top: 10px;">

        <div class="row">
            <div class="col-sm-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        借款人
                    </div>
                    <div class="panel-body">
                        <img class="el-userhead" src="../../../images/head_icon.jpg"/>
                        <p class="text-center">
                            <a class="text-info" href="#">{{borrowinfo.userid}}</a>
                        </p><br/>
                        <div>
                            籍贯： 四川 - 成都
                        </div>
                        <div>
                            专职客服：<a href="#">码妹妹</a>
                        </div>
                        <div>
                            认证信息：
                            <label class="label label-success">
                                <span class="glyphicon glyphicon-user"></span>
                            </label>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-3">
                <h3 class="text-info" style="margin-top: 0px;">
                    {{borrowinfo.userid}}借款
                    <small><label class="label label-primary">信</label></small>
                </h3>
                <div>
                    <table width="200px" height="250px">
                        <tr>
                            <td class="muted" width="80px">借款金额</td>
                            <td class="text-info" style="padding-left: 10px;">
                               {{borrowinfo.borrowmoney}}
                            </td>
                        </tr>
                        <tr>
                            <td class="muted ">年化利率</td>
                            <td class="text-info" style="padding-left: 10px;">
                                {{borrowinfo.interest}}%
                            </td>
                        </tr>
                        <tr>
                            <td class="muted ">借款期限</td>
                            <td class="text-info" style="padding-left: 10px;">
                                {{borrowinfo.borrowtime}}月
                            </td>
                        </tr>
                        <tr>
                            <td class="muted">投标奖励</td>
                            <td class="text-info" style="padding-left: 10px;">
                                {{borrowinfo.bouns}}
                            </td>
                        </tr>
                        <tr>
                            <td class="muted">还款方式</td>
                            <td class="text-info" style="padding-left: 10px;">
                                <p class="form-control-static" v-if="borrowinfo.repaytype==0">
                                    按月分期还款
                                </p>
                                <p class="form-control-static" v-if="borrowinfo.repaytype==1">
                                    按月到期还款
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td class="muted">最小投标</td>
                            <td class="text-info" style="padding-left: 10px;">
                                {{borrowinfo.minbid}}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="col-sm-3">
                <table style="height:110px;width:230px;">
                    <tr>
                        <td class="muted">投标总数</td>
                        <td class="text-info" style="padding-left: 10px;">
                            2
                        </td>
                    </tr>
                    <tr>
                        <td class="muted">还需金额</td>
                        <td class="text-info" style="padding-left: 10px;">
                            {{borrowinfo.borrowmoney-borrowinfo.ownmoney}}元
                        </td>
                    </tr>
                    <tr>
                        <td class="muted" colspan="2">投标进度:</td>
                    </tr>
                    <tr>
                        {{long.toFixed(2)}}%
                        <td colspan="2">

                            <div style="margin-bottom: 10px;" class="progress">
                                <div :style="'width: '+long+'%'" class="progress-bar progress-bar-info progress-bar-striped">
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
                <h4 class="text-primary">还款中</h4>
                <input type="text" style="margin-bottom: 10px" class="form-control" v-model="chargemoney">
                <button type="button" class="btn btn-primary" @click="toInvest(id)">投资</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return{
                borrowinfo:{},
                long:0,
                id:sessionStorage.getItem('id'),
                chargemoney:0
            }
        },
        created(){
            this.$http.get('http://localhost:6868/getborrowinfo.php',{params:{borrowid:sessionStorage.getItem('borrowid')}})
                .then((result)=>{
                    this.borrowinfo=result.body;
                    this.long=((this.borrowinfo.ownmoney)*100)/(this.borrowinfo.borrowmoney);
                    this.chargemoney =this.borrowinfo.minbid;
                })
        },
        methods:{
            toInvest(id){
                this.$http.get('http://localhost:6868/invest.php',{params:{id:id,borrowid:sessionStorage.getItem('borrowid'),chargemoney:this.chargemoney}})
                    .then((result)=>{
                        if (result.body === 'ok'){
                            this.$router.push({name:'index'});
                        }
                    })
            }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less" type="text/less" module>
    .el-userhead{
        width: 100px;
        height: 100px;
        display: block;
        margin: 0px auto;

    }
    .muted{
        color: #999;
    }
    .text-info{
        color: #09d;
    }
</style>