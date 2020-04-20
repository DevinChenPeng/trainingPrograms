<template>
    <div class="echarts">
        <div id="main" style="width:100%;height: 300px" ref="main"></div>
    </div>
</template>

<script>// 引入基本模板

export default {
    props: ['totalmoney', 'usablemoney', 'blockedmoney'],
    data(){
        return{
            chart:null,
            option:{
                title: {
                    text: '财产分部',//主标题
                    x: 'center',//x轴方向对齐方式
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    bottom: 'bottom',
                    data: ['总金额', '可用金额', '冻结金额']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            {value: this.totalmoney, name: '总金额'},
                            {value:this.usablemoney, name: '可用金额'},
                            {value: this.blockedmoney, name: '冻结金额'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
        }
    },

    methods: {
        initData(){//去请求初始化数据
            this.$nextTick(()=>{
                let dom = this.$refs.main;
                this.chart=this.$echarts.init(dom);
                this.chart.setOption(this.option);
                window.addEventListener('resize', function() {
                    dom.resize();
                });
            });
        }
    },
    mounted(){
        this.initData();
    },
    watch:{
        totalmoney:{
            immediate:true,
            handle(){
                this.$nextTick(() => {
                    if (this.totalmoney) {
                        this.initData();
                        console.log(222)
                    }
                });
            }
        }
    }
}
</script>

<style scoped lang="less" rel="stylesheet/less" type="text/less" module>
    .echarts {
        margin-bottom: 20px;
    }
</style>