<template>
    <div class="project-life">
        <el-dialog title="项目生命周期图" :fullscreen="true" :destroy-on-close="true" :modal="false" top="0"
            custom-class="project-life-dialog" :visible.sync="dialogVisible" width="100%">
            <div class="project-life-cycle-dialog">
                <div class="project-life-cycle-title">
                    <span style="display: inline-block;">项目生命周期图</span>
                    <el-button class="close-btn" @click="closeBtn">返回</el-button>
                </div>
                <div style="height: 440px;"></div>
                <div class="project-life-cycle-content">
                    <div class="cycle-content-title">
                        <span style="display: inline-block;">{{lifeCycleTopInfo.projectName}}</span>
                    </div>
                    <div class="cycle-content-info" ref="cycleContentInfo">
                        <div v-for="item in list" :key="item.id">
                            <div class="cycle-content-info-title">{{item.title}}</div>
                            <div>{{lifeCycleTopInfo[item.key]}}&nbsp;{{item.unit}}</div>
                        </div>
                       <el-divider></el-divider>
                        <div v-for="item in listBot" :key="item.id">
                            <div class="cycle-content-info-title">{{item.title}}</div>
                            <div>{{item.value}}</div>
                        </div>
                    </div>
                    <div class="cycle-content-tab">
                        <div v-for="item in tabList" :class="item.value === actived ? 'actived' : '' " :key="item.id">
                            <div class="cycle-content-item" @click="tabListClick(item)">{{ item.title }}</div>
                        </div>
                    </div>
                    <div class="content-info-container" v-show="actived == '2' ">
                    </div>
                    <div class="flow-chart">
                        <component :is='componentId' :infoData="infoData" :applicationUnitFlag="applicationUnitFlag"
                            :timeLineInfoData="timeLineInfoData" />
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>

</template>

<script>
    import filingMaterials from './projectLCDialogCommon/filingMaterials.vue'
    import regulatoryIinformation from './projectLCDialogCommon/regulatoryIinformation.vue'
    import constructionInfo from './projectLCDialogCommon/constructionInfo.vue'
    import projectInformation from './projectLCDialogCommon/projectInformation.vue'
    import { lifeCycleProjectInfo, lifeCycTimerShaft } from '@/api/projectInformationQuery.js'
    import { lifeCycleliFeCycle } from '@/api/basics.js'
    import { lifeCycleTop } from '@/api/cockpit.js'
    import { list, statusList, tabList,listBot } from '../common/formData'
    import contentInfo from './projectLCDialogCommon/contentInfo'
    import flowchartG6 from './projectLCDialogCommon/flowchartG6'
    export default {
        components: {
            filingMaterials,
            regulatoryIinformation,
            constructionInfo,
            projectInformation,
            flowchartG6
        },
        created() {
            let self = this
            //iframe地图点击事件传递
            window[this.vueid] = (val) => {
                self.changeNodeMsg(val)
            }
        },
        mounted() {
            // this.changeNodeMsg()
        },
        data() {
            return {
                iframe: null,
                iframeWindow: null,
                componentId: "flowchartG6",
                actived: "2",
                tabList: tabList(), //tab栏
                list: list(), //头部信息
                listBot: listBot(), //头部信息
                statusList: statusList(), //状态信息
                vueid: "myGisMap",
                dialogVisible: false,
                infoData: {},
                lifeCycleTopInfo: {},
                projectNo: "",
                timeLineInfoData: [], //时间轴
                applicationUnitFlag: true  //申报单位表格&&对应左侧导航 显示与隐藏
            }
        },
        methods: {
            //tab点击
            tabListClick(val) {
                this.actived = val && val.value || this.actived
                this.componentId = val && val.componentName || "flowchartG6"
                switch (this.actived) {
                    case "1":
                        this.getLifeCycleProjectInfo(this.projectNo)
                        break;
                    case "2":
                        this.getLifeCycleliFeCycle(this.projectNo)
                        this.getLifeCycTimerShaft(this.projectNo)
                        // this.$store.commit('flowchartG6/changeProjectNoG6', this.projectNo)
                        break;
                    case "4":
                        // this.getLifeCycleliFeCycle(this.projectNo)
                        break;
                    default:
                        break;
                }
            },
            closeBtn() {
                this.componentId = "flowchartG6"
                this.actived = "2"
                this.$nextTick(() => {
                    this.dialogVisible = false
                })

            },
            //iframe地图点击事件传递
            changeNodeMsg(val) {
                this.dialogVisible = true
                this.getLifeCycleTop(val.projectNo)
                // this.getLifeCycleTop("JS2021013350")
                // this.projectNo = "JS2021013350"
                this.projectNo = val.projectNo
                this.tabListClick()
                //   this.getLifeCycleliFeCycle(val.projectNo)
            },
            //获取流程图头部
            getLifeCycleTop(projectNo) {
                lifeCycleTop({ projectNo }).then(res => {
                    this.lifeCycleTopInfo = res.data.result
                })
            },
            //获取项目信息
            getLifeCycleProjectInfo() {
                lifeCycleProjectInfo({ projectNo: this.projectNo }).then(res => {
                    //判断对象值null,替换为""
                    function objKeyNull(key) {
                        for (const item in data[key]) {
                            if (data[key][item] == null || data[key][item] == undefined) {
                                data[key][item] = ""
                            }
                        }
                    }
                    //判断对象值是否为"",若true返回"",反之返回"是"或"否"
                    function objKeyValue(dataObj, arry, key) {
                        if (dataObj[key] == "") {
                            return ""
                        } else {
                            return arry[dataObj[key]]
                        }
                    }
                    let data = res.data.result
                    let isArry = ["否", "是"]
                    for (let key in data) {
                        switch (key) {
                            case "basicsInfo":
                                objKeyNull("basicsInfo")
                                let basicsInfoArry = ["isMajor", "pilotProject", "stateOwnedCapital"]
                                for (let index = 0; index < basicsInfoArry.length; index++) {
                                    data["basicsInfo"][`${basicsInfoArry[index]}Lable`] = objKeyValue(data["basicsInfo"], isArry, basicsInfoArry[index])
                                }
                                break;
                            case "applicationUnit":
                                objKeyNull("applicationUnit")
                                this.applicationUnitFlag = data["applicationUnit"].unitName && data["applicationUnit"].unitName.length ? true : false
                                // this.applicationUnitFlag = false
                                break;
                            case "projectInvestment":
                                objKeyNull("projectInvestment")
                                let projectInvestmentArry = ["isFixedAssets", "energyEvaluate", "riskEvaluate"]
                                for (let index = 0; index < projectInvestmentArry.length; index++) {
                                    data["basicsInfo"][`${projectInvestmentArry[index]}Lable`] = objKeyValue(data["projectInvestment"], isArry, projectInvestmentArry[index])
                                }
                                break;
                            case "constructionContent":
                                objKeyNull("constructionContent")
                                data["constructionContent"].belongBuildingLable = objKeyValue(data["constructionContent"], isArry, "belongBuilding")
                                break;
                            case "reallocationLand":
                                objKeyNull("reallocationLand")
                                data["reallocationLand"].isExemptionSchemeLable = objKeyValue(data["reallocationLand"], isArry, "isExemptionScheme")
                                break;
                            case "landInfo":
                                objKeyNull("landInfo")
                                let fourToScopeEastLable = data["landInfo"]["fourToScopeEast"].length ? "东至：" + data["landInfo"]["fourToScopeEast"] + "，" : ""
                                let fourToScopeWestLable = data["landInfo"]["fourToScopeWest"].length ? "南至：" + data["landInfo"]["fourToScopeWest"] + "，" : ""
                                let fourToScopeSouthLable = data["landInfo"]["fourToScopeSouth"].length ? "西至：" + data["landInfo"]["fourToScopeSouth"] + "，" : ""
                                let fourToScopeNorthLable = data["landInfo"]["fourToScopeNorth"].length ? "北至：" + data["landInfo"]["fourToScopeNorth"] + "，" : ""
                                data["landInfo"].fourToScopeLable = `${fourToScopeEastLable}${fourToScopeWestLable}${fourToScopeSouthLable}${fourToScopeNorthLable}`
                                break;
                            case "otherInfo":
                                objKeyNull("otherInfo")
                                let otherInfoArry = ["isCulturalRelic", "isHistoricBuildings", "selfBiddingConditions", "designatedBiddingMethod", "protectiveBuilding",
                                    "scenicAttraction", "energySavingRetrofit", "civilDefenseFacilities", "supportingGreening", "exceedHundred", "greenBuildingIdentification"
                                    , "prefabricatedBuilding", "bimDesignPhase", "bimConstructionPhase", "bimSpecialExpenses"
                                ]
                                for (let index = 0; index < otherInfoArry.length; index++) {
                                    data["otherInfo"][`${otherInfoArry[index]}Lable`] = objKeyValue(data["otherInfo"], isArry, otherInfoArry[index])
                                }
                                break;
                            default:
                                break;
                        }
                    }
                    this.infoData = data
                })
            },
            //获取流程图
            getLifeCycleliFeCycle() {
                lifeCycleliFeCycle({ projectNo: this.projectNo }).then(res => {
                    this.infoData = {
                        nodes: JSON.parse(res.data.result.nodes),
                        edges: JSON.parse(res.data.result.edges)
                    }
                })
            },
            //获取时间轴
            getLifeCycTimerShaft() {
                lifeCycTimerShaft({ projectNo: this.projectNo }).then(res => {
                    this.timeLineInfoData = res.data.result
                    console.log(this.timeLineInfoData)
                })
            },
        },
    }
</script>

<style scoped>
    div {
        box-sizing: border-box;
    }

    .project-life>>>.project-life-dialog {
        height: 100%;
        position: fixed;
        background-image: url("../../../assets/img/integratedManagement/projectLifeDialogImg.png");
        background-repeat: no-repeat;
        background-size: 100% 101%;
        background-position: center center;
        background-color: rgba(5, 9, 20, 0.7);
    }

    .project-life>>>.el-dialog__header {
        display: none;
    }

    .project-life>>>.el-dialog__body {
        padding: 0;
        width: 100%;
        height: 100%;
    }

    .project-life-cycle-dialog {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .project-life-cycle-content {
        padding: 0 100px;
        position: relative;
        overflow-y: auto;
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow-y: auto;

    }

    .project-life-cycle-title {
        font-size: 100px;
        color: #8FEEF5;
        text-align: center;
        height: 360px;
        line-height: 300px;
        background-repeat: no-repeat;
        background-size: 100% 101%;
        background-position: center center;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        z-index: 99999999;
    }

    .close-btn {
        position: absolute;
        right: 104px;
        top: 148px;
        width: 300px;
        height: 100px;
        box-shadow: 0px 1px 5px 0px #0A53B0;
        border: 1px solid #0A53B0;
        background-color: transparent;
        font-size: 66px;
        font-weight: 600;
        color: #68CCFF;
        letter-spacing: 2px;
        z-index: 999999999;
    }

    .cycle-content-title {
        width: 100%;
        background-image: url("../../../assets/img/workImg/cycleContentTitleImg.png");
        background-repeat: no-repeat;
        background-size: 100% 101%;
        background-position: center center;
        font-size: 78px;
        font-weight: 600;
        color: #00FFFF;
        letter-spacing: 11px;
        text-align: center;
        line-height: 177px;
    }

    .cycle-content-info {
        padding: 85px 180px 105px 180px;
        display: flex;
        flex-wrap: wrap;
        /* border: 1px solid red; */
        color: #fff;
        background-image: url("../../../assets/img/workImg/cycleContentInfoImg.png");
        background-repeat: no-repeat;
        background-size: 100% 101%;
        background-position: center center;
    }

    .cycle-content-info>div {
        display: flex;
        min-width: 26%;
        height: 130px;
        line-height: 130px;
        font-size: 50px;
        margin-right: 30px;
    }

    .cycle-content-info>>>.el-divider--horizontal {
        height: 2px;
        margin: 98px 0 73px 0;
        background-color: #979797;
    }

    .cycle-content-info .cycle-content-info-title {
        color: #68CCFF;
        font-weight: 600;
        padding-right: 5px;
        letter-spacing: 7px;
    }

    .cycle-content-tab {
        width: 100%;
        height: 300px;
        background: #0A53B0;
        display: flex;
        padding-top: 33px;
        margin-top: 30px;
    }

    .cycle-content-tab>div {
        width: 800px;
        text-align: center;
        font-size: 60px;
        color: rgba(255, 255, 255, 0.8);
        line-height: 264px;
        position: relative;
    }

    .actived {
        color: #00FFFF !important;
    }

    .cycle-content-item {
        width: 458px;
        height: 264px;
        background: #0A53B0;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
    }

    .cycle-content-item:hover {
        filter: brightness(1.2);
    }

    .actived .cycle-content-item {
        background: rgba(0, 31, 129, 0.6);
    }

    .actived .cycle-content-item:hover {
        filter: brightness(1);
    }

    .content-info-container {
        position: relative;
        top: 22px;
    }

    .content-info-container>div {
        position: relative;
        right: -82%;
        margin-top: 15px;
    }

    .content-info-tips {
        font-size: 12px;
        color: #68CCFF;
        display: flex;
        width: 340px;
    }

    .content-info-tips>div:first-of-type {
        width: 95px;
    }

    .content-info-color {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        justify-content: flex-start;
    }

    .content-info-color>div {
        width: 50%;
        padding-bottom: 10px;
        align-items: center;
    }

    .content-info-color-item {
        width: 50%;
        white-space: nowrap;
    }

    .bgc-span {
        display: inline-block;
        width: 20px;
        height: 11px;
        margin-right: 9px;
    }

    .content-info-matters {
        display: flex;
        font-size: 12px;
        width: 340px;
        color: #68CCFF;
    }

    .content-info-matters>div:first-of-type {
        width: 95px;
    }


    .content-info-matters-color {
        flex: 1;
        display: flex;
    }

    .content-info-matters-color>div {
        width: 50%;
        display: flex;
        align-items: center;

    }

    .content-info-matters-span {
        display: inline-block;
        width: 20px;
        height: 11px;
        border: 1px solid #FFFFFF;
        margin-right: 9px;
    }

    .round-corners {
        border-radius: 5px;
    }

    .flow-chart {
        margin-top: 30px;
    }


    /* 设置滚动条的样式 */
    ::-webkit-scrollbar {
        width: 10px;
        background: rgba(0, 145, 255, 0.1);
        height: 6px;
    }

    /* 滚动槽 */
    ::-webkit-scrollbar-track {
        border-radius: 10px;
    }

    /* 滚动条滑块 */
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #0091FF4D;

    }
</style>