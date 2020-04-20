<template>
    <div class="real_auth">
        <div class="panel panel-default">
            <div class="panel-heading">
                实名认证
            </div>
            <div class="panel-body">

                <form class="form-horizontal">
                    <p style="color: #ff5757">为保护您账户安全，实名认证成功之后不能修改信息，请认真填写！</p>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">用户名</label>
                        <div class="col-sm-8">
                            <label class="control-label">小强</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="name" class="col-sm-2 control-label">姓名</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="name" placeholder="name">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">姓名</label>
                        <div class="col-sm-8">
                            <select class="form-control">
                                <option>男</option>
                                <option>女</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">证件类型</label>
                        <div class="col-sm-8">
                            <select class="form-control">
                                <option>身份证</option>
                                <option>驾驶证</option>
                                <option>军官证</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">证件号码</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" placeholder="证件号码">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">出生日期</label>
                        <div class="col-sm-8">
                            <input type="date" class="form-control" placeholder="出生日期" style="line-height: 15px">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">证件地址</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" placeholder="证件地址">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2  control-label">身份证照片</label>
                        <div class="col-sm-8">
                            <p class="text-help text-primary">请点击“选择图片”,选择证件的正反两面照片。</p>

                            <div class="idCardItem">
                                <div>
                                    <a >上传正面</a>
                                </div>
                                <img alt="" src="" class="uploadImg" id="uploadImg1" />
                                <input type="file" id="exampleInputFile">
                            </div>
                            <div class="idCardItem">
                                <div>
                                    <a >上传反面</a>
                                </div>
                                <img alt="" src="" class="uploadImg" id="uploadImg2"/>
                                <input type="file" id="exampleInputFile1">
                            </div>
                            <a class="">查看样板</a>
                        </div>
                    </div>
                    <div class="form-group ">
                        <div class="col-sm-offset-2 col-sm-10 last">
                            <button type="submit" class="btn btn-primary">提交认证</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped lang="less" rel="stylesheet/less" type="text/less" module>
    .real_auth {
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
                    .control-label{
                        padding-right: 1px;
                    }
                    .idCardItem{
                        height: 100px;
                        width: 300px;
                    }

                }

            }
        }
    }
</style>