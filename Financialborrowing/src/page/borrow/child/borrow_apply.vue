<template>
    <div class="borrow_apply">
        <div class="el-tip-info">
            <h3>信用借款</h3>
            <p>
                <span class="text-info">授信额度：</span><span class="text-danger">2000 </span> &emsp;&emsp;&emsp;
                <span class="text-info">可借金额：</span><span class="text-danger">2000</span>
            </p>
        </div>

        <div class="page-header lead">
            借款信息
            <label class="label label-primary" v-if="$route.params.val == 1">信用标</label>
            <label class="label label-primary" v-if="$route.params.val == 2">车易标</label>
            <label class="label label-primary" v-if="$route.params.val == 3">房易标</label>
        </div>
        <form class="form-horizontal el-borrow-form" novalidate="novalidate">
            <div class="form-group">
                <label class="col-sm-3 control-label">
                    借款金额
                </label>
                <div class="col-sm-3  input-group">
                    <input class="form-control" name="bidRequestAmount" v-model="borrowmoney"/>
                    <span class="input-group-addon">元</span>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label">
                    借款利息
                </label>
                <div class="col-sm-3  input-group">
                    <input class="form-control" name="currentRate" v-model="interest"/>
                    <span class="input-group-addon">%</span>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label">
                    借款期限
                </label>
                <div class="col-sm-3 input-group">
                    <select class="form-control" name="monthes2Return" v-model="borrowtime">
                        <option value="1">1</option>
                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="12">12</option>
                        <option value="24">24</option>
                    </select>
                    <span class="input-group-addon">月</span>
                </div>
            </div>

            <div class="form-group">
                <label class="col-sm-3 control-label">
                    还款方式
                </label>
                <label class="radio-inline">
                    <input type="radio" value="0" checked="checked" name="inlineRadioOptions" v-model="repaytype"/>
                    按月分期
                </label>
                <label class="radio-inline">
                    <input type="radio" value="1" name="inlineRadioOptions" v-model="repaytype"/>
                    按月到期
                </label>
            </div>

            <div class="form-group">
                <label class="col-sm-3 control-label">
                    最小投标
                </label>
                <div class="col-sm-3  input-group">
                    <input class="form-control" name="minBidAmount" v-model="minbid"/>
                    <span class="input-group-addon">元</span>
                </div>
            </div>

            <div class="form-group">
                <label class="col-sm-3 control-label">
                    投标奖金
                </label>
                <div class="col-sm-3  input-group">
                    <input class="form-control" name="totalRewardAmount" value="0" v-model="bouns"/>
                    <span class="input-group-addon">%</span>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label">
                    招标天数
                </label>
                <div class="col-sm-3 input-group">
                    <select class="form-control" name="disableDays" v-model="days">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <span class="input-group-addon">天</span>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label">
                    借款标题
                </label>
                <div class="col-sm-6 input-group">
                    <input name="title" class="form-control" v-model="title"/>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label">
                    借款描述
                </label>
                <div class="col-sm-6  input-group">
                    <textarea name="description" rows="4" class="form-control" style="resize: none;" v-model="info"></textarea>
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary col-lg-offset-3" type="button" data-loading-text="提交" @click="apply">
                    提交申请
                </button>
            </div>

            <div class="el-borrow-form-tip">
                <h4>相关费用</h4>
                <p>
                    <span class="text-info">利息</span>
                    <span class="el-borrow-cost" id="cost01">--</span>
                </p>
                <p>
                    <span class="text-info">奖金</span>
                    <span class="el-borrow-cost" id="cost02">--</span>
                </p>
                <p>
                    <span class="text-info">管理费</span>
                    <span class="el-borrow-cost" id="cost03">--</span>
                </p>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return{
                acc:JSON.parse(sessionStorage.getItem("user")).username,
                borrowmoney:'',
                interest:'',
                borrowtime:'',
                repaytype:'',
                minbid:'',
                bouns:'',
                days:'',
                title:'',
                info:''
            }
        },
        methods:{
            apply(){
                this.$http.get('http://localhost:6868/borrow.php',
                    {params:{
                        acc:this.acc,
                        borrowmoney:this.borrowmoney,
                        interest:this.interest,
                        borrowtime:this.borrowtime,
                        repaytype:this.repaytype,
                        minbid:this.minbid,
                        bouns:this.bouns,
                        days:this.days,
                        title:this.title,
                        info:this.info}})
                    .then((reuslt)=>{
                    this.$router.push({name:'index'});
                });
            }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less" type="text/less" module>
    .el-borrow-form{
        position: relative;
    }
    .el-borrow-form-tip{
        width: 300px;
        border-radius: 3px;
        border:1px solid #ddd;
        box-shadow: 1px 1px 20px #ddd;
        padding:20px 30px;
        position: absolute;
        top:10px;
        right: 100px;
    }
</style>