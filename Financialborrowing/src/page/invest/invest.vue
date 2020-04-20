<template>
    <div class="invest container">
        <div class="panel panel-default">
            <!-- Default panel contents -->
            <div class="panel-heading">投资列表</div>
            <div class="panel-body">
                <form id="searchForm">
                    <div style="margin: 20px 0px;">
                        <span class="text-muted">标的状态</span><div style="margin-left: 30px" class="btn-group" data-toggle="buttons">
                        <router-link class="btn btn-default" :to="{name:'all_invest'}">
                            <input type="radio" name="bidRequestState" value="-1" autocomplete="off" checked />&emsp;全部&emsp;
                        </router-link>
                        <router-link class="btn btn-default" :to="{name:'all_invest2'}">
                            <input type="radio" name="bidRequestState" value="2" autocomplete="off" />&emsp;招标中&emsp;
                        </router-link>
                        <router-link class="btn btn-default" :to="{name:'all_invest3'}">
                            <input type="radio" name="bidRequestState" value="8" autocomplete="off" />&emsp;还款中&emsp;
                        </router-link>
                    </div>
                    </div>
                </form>
            </div>
            <!-- Table -->
            <transition>
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped lang="less" rel="stylesheet/less" type="text/less" module>
    .invest{
        margin-bottom: 50px;
        .panel{
            border: none;
            .panel-heading{
                font-size: 24px;
            }
            .table{
                border-top: none;
                thead{
                    color: #999999;
                    font-size: 17px;
                    border-bottom: 3px solid #cccccc;
                }
            }
        }
    }
</style>