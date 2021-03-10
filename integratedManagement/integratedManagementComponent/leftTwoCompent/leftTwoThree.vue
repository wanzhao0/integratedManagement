
<script>
    import echarts from "echarts";
    export default {
        props: {
            areaDistributionList: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                leftTwoThreeCharts: null
            }
        },
        watch: {
            areaDistributionList(val) {
                val.forEach(i => {
                    i.name = i.areaName
                    i.value = i.count
                })
                this.init()
            }
        },
        mounted() {
            this.init()
            window.onresize = () => {
                return (() => {
                    this.leftTwoThreeCharts.resize();
                })()
            }
        },
        render() {
            return (
                <div class="left-two-three">
                    <div class="left-two-three-title">工地区域分布</div>
                    <div class="left-two-three-content">
                        <div id="left-two-three-charts"></div>
                    </div>
                </div>
            )
        },
        methods: {
            init() {
                var rich = {
                    /*定义颜色*/
                    yellow: {
                        color: "#ECFD21",
                        fontSize: 46,
                        padding: [4, 4],
                        align: 'center',
                    }
                };
                let option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)",
                        fontSize: 25,
                        textStyle: {
                            fontSize: 46
                        }
                    },
                    legend: {
                        orient: 'vertical',
                        left: "50%", //控制lengend距离玫瑰图距离
                        y: 'center',
                        icon: 'circle',
                        textStyle: {
                            color: ['#fff'],
                            fontSize: 46,
                            rich: rich,
                            width: 400,
                            height: 40,
                        },
                        padding: [0, 0, 0, 100],
                        itemWidth: 42,
                        itemHeight: 42,
                        itemGap: 35,
                        // data: this.areaDistributionList.map(i => i.name),
                        data: ['南汇新城', '泥城', '书院', '万祥', '四团'],
                        formatter: function (name) {
                            let oa = option.series[0].data;
                            let total = 0;
                            oa.forEach((item, index) => {
                                total += item.value;
                            });
                            for (let i = 0; i < oa.length; i++) {
                                if (name == oa[i].name) {
                                    // return name + '  ' + '{style'+i+'|' + (oa[i].value / total * 100).toFixed(2) + '%}';
                                    if (name.length == 2) {
                                        return '    ' + name + '        ' + ' {yellow|' + oa[i].value + '个 ' + '  ' + '}';
                                    } else {
                                        return '    ' + name + '  ' + ' {yellow|' + oa[i].value + '个 ' + '  ' + '}';
                                    }
                                }
                            }
                        },
                    },
                    color: ['#B2FD5D', '#AC4ED2', '#E6AF08', '#01AF6D', '#00D7FE'],
                    calculable: false,
                    series: [{
                        name: '区域分布',
                        type: 'pie',
                        radius: ['100%', '0%'], //第一个参数控制玫瑰图圆心大小,第二个参数控制玫瑰图大小
                        center: ['25%', '50%'],
                        width: '100%', // for funnel
                        max: 100, // for funnel
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            emphasis: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        },
                        // data: this.areaDistributionList
                        data: [{
                            value: 171,
                            name: '南汇新城'
                        },
                        {
                            value: 26,
                            name: '泥城'
                        },
                        {
                            value: 11,
                            name: '书院'
                        },
                        {
                            value: 8,
                            name: '万祥'
                        },
                        {
                            value: 25,
                            name: '四团'
                        }
                        ]
                    }]
                };
                this.$nextTick(() => {
                    this.leftTwoThreeCharts = echarts.init(document.getElementById("left-two-three-charts"));
                    this.leftTwoThreeCharts.setOption(option);
                })
            }
        },
    }
</script>

<style scoped>
    div {
        box-sizing: border-box;
    }

    .left-two-three {
        width: 100%;
        height: 100%;
        /* border: 1px solid red; */
        overflow: hidden;
    }

    .left-two-three-title {
        font-size: 54px;
        color: #FFFFFF;
        font-weight: 700;
        background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#fff), to(#00C0FF));
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 60px;
        text-indent: 120px;
        position: relative;
    }

    .left-two-three-title::before {
        content: "";
        width: 26px;
        height: 26px;
        background: #00FFFF;
        position: absolute;
        left: 50px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
    }

    #left-two-three-charts {
        width: 1250px;
        height: 490px;
    }
</style>