<template>
    <div class="panel panel-default">
        <table class="table table-hover text-left">
            <thead>
            <tr>
                <td>借款人</td>
                <td>借款标题</td>
                <td>年利率</td>
                <td>金额</td>
                <td>还款方式</td>
                <td>进度</td>
                <td class="text-center">操作</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,i) in user_borrow">
                <td>{{item.userid}}</td>
                <td>{{item.title}}</td>
                <td>{{item.interest}}</td>
                <td>{{item.borrowmoney}}</td>
                <td v-if="item.repaytype==0">按月分期</td>
                <td v-if="item.repaytype==1">按月到期</td>
                <td>{{((item.ownmoney/item.borrowmoney)*100).toFixed(2)}}%</td>
                <td class="text-center">
                    <button class="btn btn-danger" @click="toInfo(item.id)">查看</button>
                </td>
            </tr>
            </tbody>
        </table>
        <nav aria-label="Page navigation" class="container" style="display: flex;justify-content: center">
            <ul class="pagination">
                <li><a @click="subtract" style="cursor: pointer">&laquo;</a></li>
                <li v-for="count in index"><a @click="getborrow(count)" style="cursor: pointer">{{count}}</a></li>
                <li><a @click="add" style="cursor: pointer">&raquo;</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return{
                user_borrow:[],
                progress:0,
                index:1,
                row:3,
                count:1
            }
        },
        created(){
            this.$http.get('http://localhost:6868/getborrow.php',{params:{page:1,row:this.row}}).then((result)=>{
                this.user_borrow = result.body.list;
                this.index = Math.ceil(result.body.total/this.row);
            })
        },
        methods:{
            toInfo(id){
                console.log(id)
                sessionStorage.setItem('borrowid',id);
                this.$router.push({name:'borrow_info'});
            },
            getborrow(count){
                this.count = count;
                this.count = this.count<=1?1:this.count;
                console.log(this.count);
                this.$http.get('http://localhost:6868/getborrow.php',{params:{page:count,row:this.row}}).then((result)=>{
                    this.user_borrow = result.body.list;
                })
            },
            subtract(){
                this.count--;
                this.count = this.count<=1?1:this.count;
                this.$http.get('http://localhost:6868/getborrow.php',{params:{page:this.count,row:this.row}}).then((result)=>{
                    this.user_borrow = result.body.list;
                })
            },
            add(){
                this.count++;
                this.count = this.count>=this.index?this.index:this.count;
                this.$http.get('http://localhost:6868/getborrow.php',{params:{page:this.count,row:this.row}}).then((result)=>{
                    this.user_borrow = result.body.list;
                })
            }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less" type="text/less" module>

</style>