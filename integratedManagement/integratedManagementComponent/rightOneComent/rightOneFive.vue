
<script>
    import echarts from "echarts";
    export default {
        data() {
            return {
                rightOneFiveEcharts1: null,
                rightOneFiveEcharts2: null
            }
        },
        render() {
            return (
                <div class="right-one-five">
                    <div class="right-one-five-title">
                        隐患处置情况
                        <div class="model-btn" on-click={this.showModel}>模型</div>
                    </div>
                    <div class="right-one-five-box">
                        <div id="right-one-five-echarts1"></div>
                        <div id="right-one-five-echarts2"></div>
                    </div>
                </div>
            )
        },
        mounted() {
            this.init1()
            this.init2()
            window.onresize = () => {
                return (() => {
                    this.rightOneFiveEcharts1.resize();
                    this.rightOneFiveEcharts2.resize();
                })()
            }
        },
        methods: {
            showModel() {
                this.$emit('showDialog', "zhiNengModelDiaglog")
            },
            init1() {
                const handred = 948
                let point = 191
                let option = {
                    title: {
                        text: handred,
                        x: '29%',
                        y: '25%',
                        textStyle: {
                            fontWeight: 'normal',
                            color: '#F5BB2D',
                            fontSize: '66'
                        }
                    },
                    tooltip: {
                        show: true,
                        trigger: 'item',
                        textStyle: {
                            fontSize: '46'
                        },
                        formatter: function (params) {
                            return params.name + '：' + params.percent + ' %'
                        }
                    },
                    legend: {
                        show: true,
                        itemGap: 20,
                        icon: 'circle',
                        orient: 'vertical',
                        data: ['整改完成', '进行中'],
                        top: '70%',
                        left: '5%',
                        itemHeight: 40, //改变圆圈大小
                        textStyle: {
                            color: '#fff',
                            rich: {
                                uname: {
                                    width: 300,
                                    fontSize: "42",
                                },
                                unum: {
                                    color: '#F5BB2D',
                                    width: 0,
                                    fontSize: "42",
                                    align: 'right'
                                }
                            }
                        },
                        formatter(name) {
                            return `{uname|${name}}{unum|352}`
                        }

                    },
                    series: [{
                        name: 'circle',
                        type: 'pie',
                        clockWise: true,
                        radius: ['50%', '66%'],
                        center: ['45%', '30%'],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        },

                        hoverAnimation: false,
                        data: [{
                            value: point,
                            name: '整改完成',
                            itemStyle: {
                                normal: {
                                    color: { // 颜色渐变
                                        colorStops: [{
                                            offset: 1,
                                            color: '#22AEEB' // 100% 处的颜色1
                                        }]
                                    },
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                }
                            }
                        }, {
                            name: '进行中',
                            value: handred - point,
                            itemStyle: {
                                normal: {
                                    color: '#FDA841'
                                }
                            }
                        }]
                    }]
                }
                this.$nextTick(() => {
                    this.rightOneFiveEcharts1 = echarts.init(document.getElementById("right-one-five-echarts1"));
                    this.rightOneFiveEcharts1.setOption(option);
                })
            },
            init2() {
                let option1 = {
                    grid: {
                        right: '50',
                        left: '50',
                        bottom: '100',
                    },
                    tooltip: {
                        show: true,
                        trigger: 'item',
                        textStyle: {
                            fontSize: '46'
                        },
                    },
                    xAxis: {
                        type: 'category',
                        data: ['停工', '暂缓', '整改'],
                        axisLine: {
                            lineStyle: {
                                color: "#979797"
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: '#ffffff',
                            fontSize: 40
                        },
                        offset: 20
                    },
                    yAxis: {
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#657CA8',
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            show: false,
                            color: '#eee',
                        },
                    },
                    series: [
                        {
                            type: 'bar',
                            barWidth: 45,
                            data: [24, 266, 658],
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#ffffff',
                                    fontSize: 40
                                }
                            },
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [30, 30, 0, 0],
                                    color: function (params) {
                                        var colorList = [
                                            ['#FE69A8', '#FF875E'],
                                            ['#119BD2', '#3AD1BF'],
                                            ['#9702FE', '#9702FE'],

                                        ];
                                        var index = params.dataIndex;
                                        if (params.dataIndex >= colorList.length) {
                                            index = params.dataIndex - colorList.length;
                                        }
                                        return new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                            [
                                                { offset: 0, color: colorList[index][0] },
                                                { offset: 0.5, color: colorList[index][0] },
                                                { offset: 1, color: colorList[index][1] },
                                            ]);
                                    }
                                }
                            }
                        }
                    ]
                };
                this.$nextTick(() => {
                    this.rightOneFiveEcharts2 = echarts.init(document.getElementById("right-one-five-echarts2"));
                    this.rightOneFiveEcharts2.setOption(option1);
                })
            }
        },
    }
</script>

<style scoped>
    div {
        box-sizing: border-box;
    }

    .right-one-five {
        width: 100%;
        height: 100%;
    }

    .right-one-five-box {
        width: 100%;
        height: 100%;
        display: flex;
        color: #D7E2FD;
        padding: 0 50px 0 80px;
        justify-content: space-between;
    }

    .right-one-five-title {
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

    .right-one-five-title::before {
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

    #right-one-five-echarts1 {
        width: 400px;
        height: 480px;
        /* border: 1px solid red */
    }

    #right-one-five-echarts2 {
        width: 540px;
        height: 480px;
    }

    .model-btn {
        position: absolute;
        top: 0px;
        right: 70px;
        width: 195px;
        height: 70px;
        background-color: #13446F;
        border: 1px solid #51FDFE;
        font-size: 46px;
        line-height: 70px;
        letter-spacing: 4px;
        -webkit-text-fill-color: #51FDFE;
        text-align: left;
        text-indent: 45px;
        cursor: pointer
    }

    .model-btn:hover {
        filter: brightness(1.2)
    }

    .model-btn::before {
        content: "";
        position: absolute;
        left: -12px;
        top: -24px;
        border-bottom: 1px solid #51FDFE;
        background-color: #011826;
        transform: rotateZ(-30deg);
        width: 30px;
        height: 30px
    }

    .model-btn::after {
        content: "";
        position: absolute;
        right: -12px;
        bottom: -25px;
        border-top: 1px solid #51FDFE;
        background-color: #011826;
        transform: rotateZ(-30deg);
        width: 30px;
        height: 30px
    }
</style>