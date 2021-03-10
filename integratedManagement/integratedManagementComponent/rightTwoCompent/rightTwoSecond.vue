
<script>
    import vueSeamlessScroll from 'vue-seamless-scroll'
    export default {
        components: {
            vueSeamlessScroll
        },
        data() {
            return {
                listData: [
                    {
                        'title': '临港基地项目二期工程室外工程三标段\t',
                        'date': '2021-01-25',
                        'type': '疫情人员登记不规范',
                        'statusTitle': '整改中',
                        'color': "#99E573"
                    }, {
                        'title': '洋山全球数字贸易综合配套服务基地项目\t',
                        'date': '2021-01-25',
                        'type': '工人工资支付未按照相关文件支付执行',
                        'statusTitle': '整改中',
                        'color': "#99E573"
                    }, {
                        'title': '上海临港地区PDC1-0402单元云榕路市政道路工程\t',
                        'date': '2021-01-25',
                        'type': '未见防疫专项教育',
                        'statusTitle': '整改中',
                        'color': "#99E573"
                    }, {
                        'title': '临港新城主城区馨尚锦苑商品房项目',
                        'date': '2021-01-25',
                        'type': '大门口污水外流，文明施工措施不到位',
                        'statusTitle': '整改中',
                        'color': "#99E573"
                    }, {
                        'title': '南汇新城NHC1030101街坊01A-03A地块项目：综合楼主体',
                        'date': '2021-01-25',
                        'type': '消控室水泵房无防淹措施',
                        'statusTitle': '完成整改',
                        'color': "#99E573"
                    }, {
                        'title': '临港重装备产业区A05-03地块标准厂房桩基工程',
                        'date': '2021-01-22',
                        'type': '现场施工围墙未做',
                        'statusTitle': '整改中',
                        'color': "#99E573"
                    }, {
                        'title': '上海锐康生物技术研发有限公司建设工程',
                        'date': '2021-01-19',
                        'type': '移动操作平台方案未见',
                        'statusTitle': '整改中',
                        'color': "#99E573"
                    }, {
                        'title': '临港重装备产业区F16-01地块项目',
                        'date': '2021-01-19',
                        'type': '总包、监理合同未签订，施工方案未审批',
                        'statusTitle': '整改中',
                        'color': "#99E573"
                    }, {
                        'title': '卡特彼勒物流（上海）有限公司办公室装修项目',
                        'date': '2021-01-19',
                        'type': '应急照明未及时联动',
                        'statusTitle': '完成整改',
                        'color': "#99E573"
                    }, {
                        'title': '临港南汇新城WNW-A1-9-1地块新建工程（主体部分）',
                        'date': '2021-01-15',
                        'type': '基坑同边管线报警后未见后续处理意见及程序',
                        'statusTitle': '整改中',
                        'color': "#99E573"
                    }, {
                        'title': '自贸区临港新片区pdc1-0102单元15-06、16-02地块项目（桩基工程）',
                        'date': '2021-01-15',
                        'type': '现场未按施工许可申领承诺事项完成门口冲洗设施',
                        'statusTitle': '完成整改',
                        'color': "#99E573"
                    }, {
                        'title': '自贸区临港新片区pdc1-0102单元15-06、16-02地块项目（桩基工程）',
                        'date': '2021-01-15',
                        'type': '未取得主体部分施工许可证情况下，擅自开启C4号楼基坑及地下室结构施工',
                        'statusTitle': '整改中',
                        'color': "#99E573"
                    }, {
                        'title': '上海中学东校高中部新建工程(桩基)',
                        'date': '2021-01-14',
                        'type': '场内堆土情况较严重',
                        'statusTitle': '整改中',
                        'color': "#99E573"
                    }, {
                        'title': '上海大名城临港科技城 B02-02 地块项目(桩基工程)',
                        'date': '2021-01-14',
                        'type': '进场冲洗、对土方开挖等过程做好相关管理，文明施工未达标',
                        'statusTitle': '整改中',
                        'color': "#99E573"
                    }, {
                        'title': '上海中允实业有限公司新建厂房工程',
                        'date': '2021-01-14',
                        'type': '北侧塔吊基础放坡无护坡措施',
                        'statusTitle': '整改中',
                        'color': "#99E573"
                    }, {
                        'title': '万达临港重装备产业区H23-01地块商住项目',
                        'date': '2021-01-14',
                        'type': '塔机基础周边有滑坡现象',
                        'statusTitle': '整改中',
                        'color': "#99E573"
                    }, {
                        'title': '临港科技创新城“先租后售”公共租赁住房项目（除桩基）',
                        'date': '2021-01-13',
                        'type': '施工现场围挡未封闭',
                        'statusTitle': '完成整改',
                        'color': "#99E573"
                    }, {
                        'title': '两港大道（S2-大治河）快速化工程',
                        'date': '2021-01-12',
                        'type': '西侧基坑（3.7M）已现场开挖，未设置围檩及角撑',
                        'statusTitle': '整改中',
                        'color': "#99E573"
                    }, {
                        'title': '海港开发区65-01区域地块租赁住宅项目（桩基工程）',
                        'date': '2021-01-08',
                        'type': '人工进场手续未见',
                        'statusTitle': '整改中',
                        'color': "#99E573"
                    }, {
                        'title': '洋山保税港区全球维修暨综合保障基地项目',
                        'date': '2021-01-08',
                        'type': '桩基施工方案未完成审批',
                        'statusTitle': '整改中',
                        'color': "#99E573"
                    }
                ]
            }
        },
        render() {
            return (
                <div class="right-two-second">
                    <div class="right-two-second-title">近一个月事件记录</div>
                    <vue-seamless-scroll data={this.listData} class="seamless-warp" class-option={this.classOption}>
                        <el-timeline hide-timestamp={false} >
                            {
                                this.listData.map((item, index) => {
                                    return <el-timeline-item
                                        key={this.index}
                                        color="#3DC5FA"
                                        size="large">
                                        <p class="title">{item.title}</p>
                                        <p class="title item-type">{item.type}</p>
                                        <p class="data">
                                            {item.date}
                                            <span style={{ color: item.color }} class="status-title">{item.statusTitle}</span>
                                        </p>
                                    </el-timeline-item>
                                })
                            }
                        </el-timeline>
                    </vue-seamless-scroll>

                </div>
            )
        },
        computed: {
            classOption() {
                return {
                    step: 0.8, // 数值越大速度滚动越快
                    limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
                    hoverStop: true, // 是否开启鼠标悬停stop
                    direction: 1, // 0向下 1向上 2向左 3向右
                    openWatch: false, // 开启数据实时监控刷新dom
                    singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
                    singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
                    waitTime: 0 // 单步运动停止的时间(默认值1000ms)
                }
            }
        },
    }
</script>

<style scoped>
    div {
        box-sizing: border-box;
    }

    .right-two-second {
        width: 100%;
        height: 100%;
    }

    .right-two-second-title {
        position: relative;
        width: 100%;
        font-size: 54px;
        color: #FFFFFF;
        font-weight: 700;
        background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#fff), to(#00C0FF));
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 20px;
        text-indent: 60px;
        position: relative;
        text-align: left;
    }

    .right-two-second-title::before {
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

    .seamless-warp {
        height: calc(100% - 120px);
        overflow: hidden;
    }

    .right-two-second>>>.el-timeline-item__content {
        font-size: 50px;
        color: #3DC5FA;
        letter-spacing: 4px;
    }

    .right-two-second>>>.el-timeline-item__timestamp {
        font-size: 46px;
        color: rgba(255, 255, 255, 0.8);
        letter-spacing: 4px;
        line-height: 2;
    }

    .right-two-second>>>.el-timeline-item__tail {
        border-left-color: #3DC5FA
    }

    .right-two-second>>>.el-timeline {
        padding-left: 40px;
        padding-top: 20px;
    }

    /* .right-two-second>>>.el-timeline-item {
        padding-bottom: 180px;
    } */

    .right-two-second>>>.el-timeline-item__wrapper {
        top: -22px;
    }

    .right-two-second>>>.el-timeline-item__node--large {
        width: 30px;
        height: 30px;
        left: -12px;
    }

    .title {
        padding-bottom: 15px;
    }

    .item-type {
        color: rgba(255, 255, 255, 0.8);
        font-size: 46px;
    }

    .data {
        font-size: 46px;
        color: #728a92;
        height: 86px;
        line-height: 86px;
        letter-spacing: 4px;

    }

    .data>.el-button {
        height: 76px;
        box-shadow: inset 0px 1px 10px 5px rgba(61, 197, 250, 0.5);
        border-radius: 16px;
        border: 1px solid rgba(61, 197, 250, 0.5);
        font-size: 42px;
        color: #3DC5FA;
        letter-spacing: 3px;
        text-align: center;
        margin-left: 50px;
        padding: 0 15px;
        max-width: 55%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .status-title {
        position: absolute;
        right: 0
    }
</style>