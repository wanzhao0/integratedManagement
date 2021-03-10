
<script>
    import echarts from "echarts";
    export default {
        props: {
            projectInfo: {
                type: Object,
                default: () => ({
                    projectCount: 0,
                    greatProjectCount: 0,
                    totalMoney: 0,
                    greatTotalMoney: 0
                })
            }
        },
        data() {
            return {
                governmentInvestmentEcharts: null
            }
        },
        render() {
            return (
                <div class="left-one-second">
                    <div class="left-one-second-title">投资主体分布</div>
                    <div id="government-investment-echarts" />
                    <div class="government-info">
                        <div>政府投资项目 45%</div>
                        <div>社会投资项目 55%</div>
                    </div>
                </div>
            )
        },
        mounted() {
            this.init("government-investment-echarts", "348", 0.45, "green")
        },
        methods: {
            init(id, number, num1, color) {
                let degrees = 0; //蓝色刻度尺计算
                // 蓝色背景
                let num = num1;
                let colorSet = [
                    [num, '#00C6FF'],
                    [1, '#014C80']
                ];
                let colorSet1 = [
                    [num, '#00FF82'],
                    [1, '#014C80']
                ];
                let rich = {
                    gray: {
                        fontSize: 64,
                        color: '#CECED0'
                    },
                    blue: {
                        fontSize: 64,
                        color: '#00C6FF' //B1FB5D
                    },
                    white: {
                        fontSize: 64,
                        color: '#fff'
                    },
                    green: {
                        fontSize: 64,
                        color: '#B1FB5D'
                    }
                }
                let option = {
                    series: [
                        {
                            name: '蓝圈背景', //刻度背景
                            type: 'gauge',
                            z: 1,
                            radius: '170%',
                            splitNumber: 10,
                            startAngle: 180,
                            endAngle: 0,
                            min: 0,
                            max: 50,
                            center: ["25%", "100%"], //整体的位置设置
                            axisLine: { // 坐标轴线
                                lineStyle: { // 属性lineStyle控制线条样式
                                    color: colorSet,
                                    width: 20,
                                    opacity: 1, //刻度背景宽度
                                }
                            },
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                show: false,
                            },
                            pointer: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            detail: {
                                show: 0
                            }
                        },
                        {
                            name: '刻度尺', //刻度背景
                            type: 'gauge',
                            z: 2,
                            radius: '150%',
                            splitNumber: 4,
                            startAngle: 180,
                            endAngle: 0,
                            center: ["25%", "100%"], //整体的位置设置
                            axisLine: { // 坐标轴线
                                lineStyle: { // 属性lineStyle控制线条样式
                                    color: [
                                        [1, '#00B3FE'],
                                        [1, '#212D43']
                                    ],
                                    width: 10,
                                    opacity: 0, //刻度背景宽度
                                }
                            },
                            axisLabel: {
                                show: false
                            },
                            pointer: {
                                show: false
                            },
                            axisTick: {
                                show: true,
                                lineStyle: {
                                    color: '#8A90B9',
                                    width: 14
                                },
                                length: 14,
                                splitNumber: 4,
                            },
                            detail: {
                                show: 1
                            },
                            splitLine: {
                                length: 10, //刻度节点线长度
                                lineStyle: {
                                    width: 0,
                                    color: '#fff'
                                } //刻度节点线
                            },
                        },
                        {
                            name: '蓝色刻度尺', //刻度背景
                            type: 'gauge',
                            z: 1,
                            radius: '160%',
                            splitNumber: 1,
                            startAngle: 0,
                            endAngle: degrees,
                            center: ["25%", "110%"], //整体的位置设置
                            data: [{
                                value: 348
                            }],
                            axisLabel: {
                                show: false
                            },
                            pointer: {
                                show: false
                            },
                            axisTick: {
                                show: true,
                                lineStyle: {
                                    color: '#fff',
                                    width: 1
                                },
                                length: 8,
                                splitNumber: 6,
                            },
                            detail: {
                                formatter: function (params) {
                                    console.log(params, color)
                                    if (color !== "blue") {
                                        return '{gray|' + '' + '\n' + '}{blue|' + params + '}{white|' + '  个' + '}'
                                    } else {
                                        return '{gray|' + '' + '\n' + '}{green|' + params + '}{white|' + '  个' + '}'
                                    }

                                },
                                rich: rich,
                                offsetCenter: ['0', '-40%'],
                            },
                            splitLine: {
                                length: 0, //刻度节点线长度
                                lineStyle: {
                                    width: 0.5,
                                    color: '#fff'
                                } //刻度节点线
                            },
                        },
                        {
                            name: '蓝圈背景1', //刻度背景
                            type: 'gauge',
                            z: 1,
                            radius: '170%',
                            splitNumber: 10,
                            startAngle: 180,
                            endAngle: 0,
                            min: 0,
                            max: 50,
                            center: ["78%", "100%"], //整体的位置设置
                            axisLine: { // 坐标轴线
                                lineStyle: { // 属性lineStyle控制线条样式
                                    color: colorSet1,
                                    width: 20,
                                    opacity: 1, //刻度背景宽度
                                }
                            },
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                show: false,
                            },
                            pointer: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            detail: {
                                show: 0
                            }
                        },
                        {
                            name: '刻度尺1', //刻度背景
                            type: 'gauge',
                            z: 2,
                            radius: '150%',
                            splitNumber: 4,
                            startAngle: 180,
                            endAngle: 0,
                            center: ["78%", "100%"], //整体的位置设置
                            axisLine: { // 坐标轴线
                                lineStyle: { // 属性lineStyle控制线条样式
                                    color: [
                                        [1, '#00B3FE'],
                                        [1, '#212D43']
                                    ],
                                    width: 10,
                                    opacity: 0, //刻度背景宽度
                                }
                            },
                            axisLabel: {
                                show: false
                            },
                            pointer: {
                                show: false
                            },
                            axisTick: {
                                show: true,
                                lineStyle: {
                                    color: '#8A90B9',
                                    width: 14
                                },
                                length: 14,
                                splitNumber: 4,
                            },
                            detail: {
                                show: 1
                            },
                            splitLine: {
                                length: 10, //刻度节点线长度
                                lineStyle: {
                                    width: 0,
                                    color: '#fff'
                                } //刻度节点线
                            },
                        },
                        {
                            name: '蓝色刻度尺1', //刻度背景
                            type: 'gauge',
                            z: 1,
                            radius: '160%',
                            splitNumber: 1,
                            startAngle: 0,
                            endAngle: degrees,
                            center: ["78%", "110%"], //整体的位置设置
                            data: [{
                                value: 429
                            }],
                            axisLabel: {
                                show: false
                            },
                            pointer: {
                                show: false
                            },
                            axisTick: {
                                show: true,
                                lineStyle: {
                                    color: '#fff',
                                    width: 1
                                },
                                length: 8,
                                splitNumber: 6,
                            },
                            detail: {
                                formatter: function (params) {
                                    console.log(params, color)
                                    if (color === "blue") {
                                        return '{gray|' + '' + '\n' + '}{blue|' + params + '}{white|' + '  个' + '}'
                                    } else {
                                        return '{gray|' + '' + '\n' + '}{green|' + params + '}{white|' + '  个' + '}'
                                    }

                                },
                                rich: rich,
                                offsetCenter: ['0', '-40%'],
                            },
                            splitLine: {
                                length: 0, //刻度节点线长度
                                lineStyle: {
                                    width: 0.5,
                                    color: '#fff'
                                } //刻度节点线
                            },
                        },
                    ]
                };
                this.$nextTick(() => {
                    this.governmentInvestmentEcharts = echarts.init(document.getElementById(id));
                    this.governmentInvestmentEcharts.setOption(option);
                })
            },

        },
    }
</script>

<style scoped>
    div {
        box-sizing: border-box;
    }

    .left-one-second {
        width: 100%;
        height: 100%;
        display: flex;

        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #fff;

    }

    .left-one-second-title {
        position: relative;
        width: 100%;
        font-size: 54px;
        color: #FFFFFF;
        font-weight: 700;
        background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#fff), to(#00C0FF));
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 0px;
        text-indent: 120px;
        position: relative;
        text-align: left;
    }

    .left-one-second-title::before {
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

    #government-investment-echarts {
        width: 1270px;
        height: 306px;
        overflow: hidden;
    }

    .government-info {
        display: flex;
        color: #fff;
        font-size: 54px;
        justify-content: space-between;
        width: 100%;
        padding: 0 0 0 0;
    }
</style>