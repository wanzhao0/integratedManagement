
<script>
    import echarts from "echarts";
    export default {
        props: {
            approvalTransactionCondition: {
                type: Object,
                default: () => ({
                    receiptTrendList: []
                })
            }
        },
        watch: {
            approvalTransactionCondition(val) {
                this.init()
            }
        },
        data() {
            return {
                leftTwoFourCharts: null
            }
        },
        render() {
            return (
                <div class="left-two-four">
                    <div class="left-two-four-title" on-click={this.showModel}>近6个月工地劳务人员</div>
                    <div class="left-two-four-content">
                        <div id="left-two-four-charts"></div>
                    </div>
                </div>
            )
        },
        mounted() {
            this.init()
            window.onresize = () => {
                return (() => {
                    this.leftTwoFourCharts.resize();
                })()
            }
        },
        methods: {
            showModel() {
                this.$emit("showDialog", "fuGongFangYiModelDiaglog")
            },
            init() {
                var lineColor = 'red';
                var labelColor = '#fff';
                var fontSize = '46';
                let option = {
                    backgroundColor: 'transparent',
                    grid: {
                        left: '-6%',
                        right: '-6%',
                        top: '80',
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
                    // legend: {
                    //     show: true,
                    //     x: 'center',
                    //     y: '5%',
                    //     itemWidth: 45,
                    //     itemHeight: 18,
                    //     textStyle: {
                    //         color: '#fff',
                    //         fontSize: fontSize
                    //     },
                    //     data: ['完成率']
                    // },
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
                                    width: 12
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
                            data: ['8月', '9月', '10月', '11月', '12月', '1月']
                            // data: this.approvalTransactionCondition.receiptTrendList.map(item => item.date)
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
                            name: '劳务人员数',
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
                            // data: this.approvalTransactionCondition.receiptTrendList.map(item => item.count)
                            data: [11295, 15295, 17295, 18295, 18092, 10855]
                        }

                    ]
                };
                this.leftTwoFourCharts = echarts.init(document.getElementById("left-two-four-charts"));
                this.leftTwoFourCharts.setOption(option);
            }
        },
    }
</script>

<style scoped>
    div {
        box-sizing: border-box;
    }

    .left-two-four {
        width: 100%;
        height: 100%;
        /* border: 1px solid red; */
        overflow: hidden;
    }

    .left-two-four-title {
        font-size: 54px;
        color: #FFFFFF;
        font-weight: 700;
        background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#fff), to(#00C0FF));
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 60px;
        text-indent: 120px;
        position: relative;
        cursor: pointer;
    }

    .left-two-four-title::before {
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

    #left-two-four-charts {
        width: 1250px;
        height: 420px;
    }
</style>