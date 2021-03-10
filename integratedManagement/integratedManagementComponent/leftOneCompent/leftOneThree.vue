
<template>
    <div class="left-one-three">
        <div class="left-one-three-title">工程类型分布（个）</div>
        <div class="left-one-three-content">
            <div id="project-type-charts"></div>
        </div>
    </div>
</template>

<script>
    import echarts from "echarts";
    export default {
        data() {
            return {
                projectTypeCharts: null
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                var option = {
                    grid: [
                        {
                            //左侧的柱状图grid

                            height: "90%",
                            left: '20%',
                            top: '0',
                            right: '15%'
                        }
                    ],
                    xAxis: [
                        {
                            //左侧柱状图的X轴
                            gridIndex: 0,//x 轴所在的 grid 的索引
                            show: false
                        }],
                    yAxis: [
                        {
                            //左侧柱状图的Y轴
                            gridIndex: 0,//y轴所在的 grid 的索引
                            splitLine: 'none',
                            axisTick: 'none',
                            axisLine: 'none',
                            axisLabel: {
                                verticalAlign: 'bottom',
                                align: 'left',
                                padding: [-20, 0, -30, -155],
                                textStyle: {
                                    color: '#FFFFFF',
                                    fontSize: '50',
                                }
                            },
                            data: ['房建', '市政', '水务', "能源"],
                            inverse: true,
                        },
                        {
                            //左侧柱状图的Y轴
                            gridIndex: 0,//y轴所在的 grid 的索引
                            splitLine: 'none',
                            axisTick: 'none',
                            axisLine: 'none',
                            data: [143, 80, 14, 11, 0],
                            inverse: true,
                            axisLabel: {
                                show: true,
                                verticalAlign: 'bottom',
                                align: 'right',
                                padding: [0, -150, -28, 0],
                                textStyle: {
                                    color: '#fff',
                                    fontSize: '50',
                                },
                                formatter: function (value) {
                                    return value + '个'
                                },
                                rich: {
                                    y: {
                                        color: '#befbff',
                                        fontSize: 50
                                    },
                                    x: {
                                        color: '#f6cf42',
                                        fontSize: 50
                                    }
                                }
                            }
                        },
                        {
                            //左侧柱状图的Y轴
                            gridIndex: 0,//y轴所在的 grid 的索引
                            splitLine: 'none',
                            axisTick: 'none',
                            axisLine: 'none',
                            data: []
                        }
                    ],
                    series: [{
                        name: '房建',
                        type: 'bar',
                        xAxisIndex: 0,//使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
                        yAxisIndex: 0,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                        data: [143, , , ,],
                        barWidth: 40,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    'rgba(0,230,255, 0.2)', 'rgba(0,230,255, 1)'
                                ].map((color, offset) => ({
                                    color,
                                    offset
                                })))
                            },
                        },
                        z: 2
                    }, {
                        name: '市政',
                        type: 'bar',
                        xAxisIndex: 0,//使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
                        yAxisIndex: 0,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                        data: [, 80, , ,],
                        barWidth: 40,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    'rgba(0,153,252, 0.2)', 'rgba(0,153,252, 1)'
                                ].map((color, offset) => ({
                                    color,
                                    offset
                                })))
                            },
                        },
                        z: 2
                    }, {
                        name: '水务',
                        type: 'bar',
                        xAxisIndex: 0,//使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
                        yAxisIndex: 0,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                        data: [, , 14, ,],
                        barWidth: 40,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    'rgba(255,247,25, 0.2)', 'rgba(255,247,25, 1)'
                                ].map((color, offset) => ({
                                    color,
                                    offset
                                })))
                            },
                        },
                        z: 2
                    },

                    {
                        name: '能源',
                        type: 'bar',
                        xAxisIndex: 0,//使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
                        yAxisIndex: 0,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                        data: [, , , , 0],
                        barWidth: 40,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    'rgba(255,147,20, 0.2)', 'rgba(255,147,20, 1)'
                                ].map((color, offset) => ({
                                    color,
                                    offset
                                })))
                            },
                        },
                        z: 2
                    },
                    {
                        name: '外框',
                        type: 'bar',
                        xAxisIndex: 0,//使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
                        yAxisIndex: 0,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                        barGap: '-100%',
                        data: [200, 200, 200, 200, 200],
                        barWidth: 40,
                        itemStyle: {
                            normal: {
                                color: 'rgba(255, 255, 255, 0.15)',
                                barBorderRadius: 6,
                            }
                        },
                        z: 0
                    }
                    ]
                };

                this.$nextTick(() => {
                    this.projectTypeCharts = echarts.init(document.getElementById("project-type-charts"));
                    this.projectTypeCharts.setOption(option);
                })
            }
        },
    }
</script>

<style scoped>
    div {
        box-sizing: border-box;
    }

    .left-one-three {
        width: 100%;
        height: 100%;
        /* border: 1px solid red; */
        overflow: hidden;
    }

    .left-one-three-title {
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

    .left-one-three-title::before {
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

    #project-type-charts {
        width: 1250px;
        height: 600px;
    }
</style>