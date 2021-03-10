<script>
    import G6 from '@antv/g6';
    import contentInfo from './contentInfo'
    import timeLineInfo from './timeLineInfo'
    import businessProcessDialog from './businessProcessDialog'
    import { lifeCycleHandle } from '@/api/projectInformationQuery.js'
    export default {
        components: {
            contentInfo,
            businessProcessDialog,
            timeLineInfo
        },
        props: {
            infoData: {
                type: Object,
                default: () => { }
            },
            timeLineInfoData: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                isFlow: true,
                width: null,
                businessProcessDialogVisible: false,
                businessProcessDialogData: {}
            };
        },
        watch: {
            infoData(val) {
                console.log(val)
                this.nodes = val.nodes
                this.edges = val.edges
                this.$nextTick(() => {
                    this.init()
                })
            }
        },
        computed: {
            timeLineInfoDatas() {
                return this.timeLineInfoData
            }
        },
        mounted() {
            this.width = document.getElementById('container').scrollWidth
        },
        render() {
            return (
                <div class="container-box">
                    <content-info isFlow={this.isFlow} />
                    <el-button class="container-box-btn" onClick={this.isFlowClick.bind(this)} size="mini">
                        {!this.isFlow ? " 查看流程图" : "查看时间轴"}
                    </el-button>
                    {
                        this.isFlow ? <div id="container" /> : <time-line-info timeLineInfoDatas={this.timeLineInfoDatas} />
                    }
                    <business-process-dialog businessProcessDialogVisible={this.businessProcessDialogVisible}
                        businessProcessDialogData={this.businessProcessDialogData}
                        on={{ ['update:businessProcessDialogVisible']: val => this.businessProcessDialogVisible = val }}
                    // {...{ on: { 'update:businessProcessDialogVisible': val => this.businessProcessDialogVisible = val } }}
                    />
                </div >
            )
        },
        methods: {
            isFlowClick() {
                this.isFlow = !this.isFlow
                this.isFlow && this.$nextTick(() => {
                    this.width = document.getElementById('container').scrollWidth;
                    this.init()
                })
            },
            //获取事项办理过程弹窗数据
            getLifeCycleHandle(handleCode) {
                lifeCycleHandle({ handleCode }).then(res => {
                    this.businessProcessDialogVisible = true
                    this.businessProcessDialogData = res.data.result
                }).catch(() => { })
            },
            init() {
                const data = {
                    nodes: this.nodes,
                    edges: this.edges,
                };
                G6.registerNode(
                    'sql',
                    {
                        drawShape(cfg, group) {
                            let rect = null
                            let labelPositionY = 0
                            console.log(cfg.handleCode, 999)
                            let cursor = cfg.handleCode && cfg.handleCode ? "pointer" : ''
                            switch (cfg.shape) {
                                case 'rect':
                                    labelPositionY = cfg.y + cfg.size.height / 2
                                    rect = group.addShape('rect', {
                                        attrs: {
                                            x: cfg.x,
                                            y: cfg.y,
                                            type: 'my-rect',
                                            width: cfg.size.width,
                                            height: cfg.size.height,
                                            radius: cfg.style.radius,
                                            stroke: cfg.style.outLineColor,
                                            lineDash: cfg.style.lineDash,
                                            fill: cfg.style.bgc,
                                            lineWidth: cfg.style.lineWidth,
                                            cursor: cursor
                                        },
                                        name: cfg.handleCode //绑定id
                                    });
                                    break;
                                case 'circle':
                                    labelPositionY = cfg.y
                                    rect = group.addShape('circle', {
                                        attrs: {
                                            x: cfg.x,
                                            y: cfg.y,
                                            r: 50,
                                            fill: 'blue'
                                        },
                                        name: cfg.handleCode //绑定id
                                    });
                                    break;
                                case 'ellipse':
                                    labelPositionY = cfg.y
                                    rect = group.addShape('ellipse', {
                                        attrs: {
                                            x: cfg.x * 1.5,
                                            y: cfg.y,
                                            rx: cfg.size.width / 2,
                                            ry: cfg.size.height / 2,
                                            fill: cfg.style.bgc,
                                            lineWidth: 1,

                                        },
                                        name: cfg.handleCode //绑定id
                                    });
                                    break;
                                default:
                                    break;
                            }

                            if (cfg.name) {
                                // 如果有文本
                                // 如果需要复杂的文本配置项，可以通过 labeCfg 传入
                                const label = group.addShape('text', {
                                    attrs: {
                                        text: cfg.name,
                                        x: cfg.x + cfg.size.width / 2,
                                        // y: cfg.y + cfg.size.height / 2,
                                        y: labelPositionY,
                                        fill: cfg.style.textColor,
                                        fontSize: cfg.style.fontSize || 14,
                                        textAlign: 'center',
                                        textBaseline: 'middle',
                                        fontWeight: 'normal',
                                        cursor: cursor
                                    },
                                    // must be assigned in G6 3.3 and later versions. it can be any value you want
                                    name: cfg.handleCode, //绑定id
                                    // 设置 draggable 以允许响应鼠标的图拽事件
                                });
                            }
                            return rect;
                        },

                    },
                    'single-node',
                );
                // const height = document.getElementById('container').scrollHeight
                // const toolbar = new G6.ToolBar({
                //     position: { x: 130, y: 70 }
                // });
                console.log(this.width)
                const graph = new G6.Graph({
                    container: 'container',
                    width: this.width,
                    height: this.width * 1.2,
                    modes: {
                        // default: ['drag-canvas', 'zoom-canvas']
                    },
                    // plugins: [toolbar],
                    fitView: true,//设置是否将图适配到画布中；
                    fitCenter: true,
                    transform: ['s', 2, 1.5],
                    fitViewPadding: [30, 40, 40, 40],
                    // 节点类型及样式
                    defaultNode: {
                        type: 'sql',
                        labelCfg: {
                            position: 'bottom',
                            offset: 10,
                            style: {
                                // ... 文本样式的配置
                            },
                        },

                    },
                    // 连线类型及样式
                    defaultEdge: {
                        type: 'polyline',
                        style: {
                            offset: 25,
                            endArrow: true,
                            lineWidth: 1,
                            stroke: '#333'
                        }
                    },
                });
                graph.data(data);
                graph.render('svg');
                graph.on('node:click', (ev) => {
                    const node = ev.target.cfg
                    let handleCode = node.name
                    handleCode && this.getLifeCycleHandle(handleCode) //弹窗
                });
            }
        }
    };
</script>

<style scoped>
    div {
        box-sizing: border-box;
    }

    .container-box {
        width: 100%;
        height: 100%;
        position: relative;
    }

    #container {
        width: 100%;
        height: 100%;
        position: relative;
        margin-top: 35px;
    }

    .no-Flow-btn {
        position: absolute;
        right: 30px;
        top: 70px;
    }

    .container-box-btn {
        background-color: transparent;
        width: 500px;
        height: 100px;
        border-radius: 8px;
        border: 1px solid #68CCFF;
        color: #68CCFF;
        font-size: 50px;
    }
</style>