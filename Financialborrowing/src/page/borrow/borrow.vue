<template>
    <div class="borrow container">
        <div class="row">
            <div class="col-md-4 col-sm-12">
                <div class="title">
                    信用贷
                </div>
                <div class="content">
                    <p>
                        可借金额 <i>¥ 2,000.00</i>
                    </p>
                    <a href="#" class="text-primary">申请条件</a>
                    <p class="help-block">仅限成都地区</p>
                    <ul>
                        <li>填写基本资料</li>
                        <li>身份认证</li>
                        <li>视频认证</li>
                    </ul>
                    <button class="btn" @click="toBorrow_apply(1)">
                        立刻申请
                    </button>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="title" style="background-color: #f0ad4e">
                    车易贷
                </div>
                <div class="content">
                    <p>
                        可借金额 <i>¥ 2,000.00</i>
                    </p>
                    <a href="#" class="text-primary">申请条件</a>
                    <p class="help-block">仅限成都地区</p>
                    <ul>
                        <li>填写基本资料</li>
                        <li>身份认证</li>
                        <li>视频认证</li>
                    </ul>
                    <button class="btn" @click="toBorrow_apply(2)">
                        立刻申请
                    </button>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="title" style="background-color:#2ca2ee ">
                    房易贷
                </div>
                <div class="content">
                    <p>
                        可借金额 <i>¥ 2,000.00</i>
                    </p>
                    <a href="#" class="text-primary">申请条件</a>
                    <p class="help-block">仅限成都地区</p>
                    <ul>
                        <li>填写基本资料</li>
                        <li>身份认证</li>
                        <li>视频认证</li>
                    </ul>
                    <button class="btn" @click="toBorrow_apply(3)">
                        立刻申请
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        methods:{
            toBorrow_apply(val){
                this.$router.push({name:'borrow_apply',params:{val:val}})
            }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less" type="text/less" module>
    .borrow {
        .row{
            &>div{
                margin-bottom: 10px;
            }
        }
        .title {
            background-color: #40d47e;
            height: 48px;
            font-size: 24px;
            line-height: 48px;
            color: white;
            text-indent: 10px;
        }
        .content {
            background-color: #eeeeee;
            padding: 14px;
            display: flex;
            flex-direction: column;
            li{
                position: relative;
                padding-left: 20px;
            }
            li:before{
                content: '';
                display: block;
                position: absolute;
                width: 15px;
                height: 15px;
                background-color: #ff5757;
                border: 1px solid #ff5757;
                box-shadow: 1px 6px 5px white inset;
                top: 50%;
                left: 0px;
                transform: translateY(-50%);
            }
            p {
                &:nth-child(1) {
                    font-size: 20px;
                }
            }
            .btn {
                width: 100px;
                color: white;
                background-color: #2ca2ee;
                border-radius: 20px;
                align-self: center;
            }
        }

    }
</style>