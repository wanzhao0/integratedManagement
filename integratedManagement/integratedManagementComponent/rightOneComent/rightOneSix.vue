
<script>
    import echarts from "echarts";
    export default {
        data() {
            return {
                rightOneSixEcharts: null,
            }
        },
        render() {
            return (
                <div class="right-one-six">
                    <div class="right-one-six-title">近6个月隐患排查情况</div>
                    <div class="right-one-six-box">
                        <div id="right-one-six-echarts"></div>
                    </div>
                </div>
            )
        },
        mounted() {
            this.init()
            window.onresize = () => {
                return (() => {
                    this.rightOneSixEcharts.resize();
                })()
            }
        },
        methods: {
            init() {
                var lineColor = 'red';
                var labelColor = '#fff';
                var fontSize = '46';
                let option = {
                    backgroundColor: 'transparent',
                    grid: {
                        left: '-6%',
                        right: '-10',
                        top: '60',
                        bottom: '10px',
                        containLabel: true
                    },
                    tooltip: {
                        show: true,
                        trigger: 'item',
                        textStyle: {
                            fontSize: fontSize
                        }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisLabel: {
                                formatter: '{value}',
                                color: labelColor,
                                fontSize: fontSize
                            },
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: lineColor,
                                    width: 2
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show: false,
                                lineStyle: {
                                    color: '#195384'
                                }
                            },
                            // data: this.siteSupervision.receiptTrendList.map(i => i.date)
                                 data: [ '8月', '9月', '10月', '11月', '12月','1月']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '(%)',
                            nameTextStyle: {
                                fontSize: fontSize,
                                color: 'transparent'
                            },
                            axisLabel: {
                                show: false,
                                formatter: '{value}',
                                textStyle: {
                                    color: labelColor,
                                    fontSize: fontSize
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: lineColor,
                                    width: 2
                                },

                            },
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show: false,
                                lineStyle: {
                                    color: '#142B57'
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name: '巡查数',
                            type: 'line',
                            stack: '总量',
                            symbol: 'circle',
                            symbolSize: 30,
                            smooth: true,
                            itemStyle: {
                                normal: {
                                    color: 'rgba(3,240,254,1)',
                                    lineStyle: {
                                        color: "rgba(3,240,254,1)",
                                        width: 2
                                    },
                                    areaStyle: {
                                        //color: '#94C9EC'
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgba(3,240,254,.7)'
                                        }, {
                                            offset: 1,
                                            color: 'rgba(3,240,254,0)'
                                        }])
                                    },
                                    shadowColor: 'rgba(3,240,254,1)',
                                    shadowBlur: 20,
                                }
                            },
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#fff',
                                    fontSize: fontSize
                                }
                            },
                            markPoint: {
                                itemStyle: {
                                    normal: {
                                        color: 'red'
                                    }
                                }
                            },
                            // data: this.siteSupervision.receiptTrendList.map(i => i.count)
                            data: [103, 91, 194, 112, 266,137]
                        }

                    ]
                };
                this.rightOneSixEcharts = echarts.init(document.getElementById("right-one-six-echarts"));
                this.rightOneSixEcharts.setOption(option);
            }
        }


    }
</script>

<style scoped>
    div {
        box-sizing: border-box;
    }

    .right-one-six {
        width: 100%;
        height: 100%;
    }

    .right-one-six-box {
        width: 100%;
        height: 100%;
        display: flex;
        color: #D7E2FD;
        padding: 0 50px 0 80px;
        justify-content: space-between;
    }

    .right-one-six-title {
        position: relative;
        width: 100%;
        font-size: 54px;
        color: #FFFFFF;
        font-weight: 700;
        background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#fff), to(#00C0FF));
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 50px;
        text-indent: 60px;
        position: relative;
        text-align: left;
    }

    .right-one-six-title::before {
        content: "";
        width: 26px;
        height: 26px;
        background: #00FFFF;
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
    }

    #right-one-six-echarts {
        width: 1290px;
        height: 450px;
    }
</style>