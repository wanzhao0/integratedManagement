
<script>
    import echarts from "echarts";
    export default {
        data() {
            return {
                rightTwoFirstEcharts: null,
            }
        },
        render() {
            return (
                <div class="right-tow-first">
                    <div class="right-tow-first-title">近6个月事件数</div>
                    <div class="right-tow-first-box">
                        <div id="right-tow-first-echarts"></div>
                    </div>
                </div>
            )
        },
        mounted() {
            this.init()
            window.onresize = () => {
                return (() => {
                    this.rightTwoFirstEcharts.resize();
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
                            data: ['8月', '9月', '10月', '11月', '12月','1月']
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
                            name: '事件数',
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
                            data: [32, 29, 31, 47, 66, 43]
                        }

                    ]
                };
                this.rightTwoFirstEcharts = echarts.init(document.getElementById("right-tow-first-echarts"));
                this.rightTwoFirstEcharts.setOption(option);
            }
        }


    }
</script>

<style scoped>
    div {
        box-sizing: border-box;
    }

    .right-tow-first {
        width: 100%;
        height: 100%;
    }

    .right-tow-first-box {
        width: 100%;
        height: 100%;
        display: flex;
        color: #D7E2FD;
        padding: 0 50px 0 80px;
        justify-content: space-between;
    }

    .right-tow-first-title {
        position: relative;
        width: 100%;
        font-size: 54px;
        color: #FFFFFF;
        font-weight: 700;
        background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#fff), to(#00C0FF));
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 30px;
        text-indent: 60px;
        position: relative;
        text-align: left;
    }

    .right-tow-first-title::before {
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

    #right-tow-first-echarts {
        width: 1290px;
        height: 380px;
    }
</style>