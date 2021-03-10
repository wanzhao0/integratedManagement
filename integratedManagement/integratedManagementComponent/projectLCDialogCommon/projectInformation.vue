<script>
    import { leftTabList } from '../../common/formData'
    import { scrollTo } from '@/utils/scroll-to'
    import baseTable from './projectInfoComponent/baseTable'
    import { tableMap } from './projectInfoComponent/tableMap.js'
    import { mapState } from "vuex";
    export default {
        components: { baseTable },
        props: {
            infoData: {
                type: Object,
                default: {}
            },
            applicationUnitFlag: {
                type: Boolean,
                default: true
            },
        },
        data() {
            return {
                leftTabActived: "1",
                leftTabList: Object.freeze(leftTabList()),
                scrollTopNumber: 0,
                tableMap: tableMap,
                cycleContentInfoheight: 140
            }
        },
        async mounted() {
            document.querySelector(".project-life-cycle-content").addEventListener('scroll', this.handleScroll, false);
            document.querySelector(".project-life-cycle-content").addEventListener('scroll', this.handleScroll, false);
            this.$nextTick(() => {
                this.cycleContentInfoheight = parseInt(window.getComputedStyle(document.querySelector(".cycle-content-info")).height) + 320
            })
        },
        beforeDestroy() {
            document.querySelector(".project-life-cycle-content").removeEventListener('scroll', this.handleScroll, false);
        },
        render() {
            let propsData = [
                "basicsInfo",
                "constructionUnit",
                "applicationUnit",
                "projectInvestment",
                "constructionContent",
                "investment",
                "reallocationLand",
                "technicalIndex",
                "landInfo",
                "otherInfo"]
            return (
                <div class="project-info">
                    <div class={[this.scrollTopNumber >= 100 ? 'left-tab-center' : '', this.collapse ? 'left-tab-to-0' : '', "project-info-main-l"]}
                    style={{ top: `${this.cycleContentInfoheight}px` }}>
                        {
                            this.leftTabList.map(item => {
                                return <div class={[item.value === this.leftTabActived ? 'left-tab-actived' : '', "left-tab-item",
                                !this.applicationUnitFlag ? item.className : '']}
                                    onClick={this.leftTabListClick.bind(this, item)} key={item.value}>
                                    {item.title}
                                </div>
                            })
                        }
                    </div>
                    <div class="project-info-main-r">
                        <div>
                            {
                                propsData.map((item, index) => {
                                    return <div class={!this.applicationUnitFlag ? propsData[index] : ''}>
                                        <baseTable tableData={this.infoData[propsData[index]]} tableMapItem={this.tableMap[index]} />
                                        <div style="height:20px"></div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div >
            )
        },
        methods: {
            //lefttab点击
            leftTabListClick(val) {
                let to = this.scrollTopNumberLists[val.value - 1]
                scrollTo(to, 1000, ".project-life-cycle-content")
            },
            handleScroll() {
                this.scrollTopNumber = document.querySelector(".project-life-cycle-content").scrollTop
                for (let i = 0; i < this.scrollTopNumberLists.length; i++) {
                    if (this.scrollTopNumber <= this.scrollTopNumberLists[i]) {
                        return this.leftTabActived = (i + 1).toString()
                    }
                }
            },
        },
        computed: {
            ...mapState({
                'collapse': state => state.user.collapse //侧边栏展开
            }),
            //滚动距离
            scrollTopNumberLists() {
                return this.applicationUnitFlag ? [0, 510, 720, 900, 1275, 1600, 1850, 2150, 2500, 3250] : [0, 510, 720, 830, 1100, 1400, 1600, 1800, 2150, 2700]
            }
        }
    }
</script>

<style scoped>
    .project-info {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }

    .project-info-main-l {
        width: 90px;
        height: 320px;
        overflow: hidden;
        position: fixed;
        left: 90px;
        top: 300px;
        transition: all 0.4s;
    }

    .left-tab-center {
        top: 50% !important;
        transition: all 0.4s;
    }

    .left-tab-to-0 {
        left: 0;
    }

    .project-info-main-l::after {
        position: absolute;
        right: 2px;
        top: 15px;
        content: "";
        width: 1.5px;
        height: 300px;
        background-color: #e2dcdc;
    }

    .left-tab-item {
        line-height: 20px;
        position: relative;
        cursor: pointer;
        font-size: 12px;
        text-align: right;
        padding-right: 30px;
        color: #c9c9c9;

    }

    .left-tab-item:nth-of-type(3n+1) {
        margin: 15px 0;
        font-size: 13px;
        color: #fff;
    }

    .left-tab-actived {
        color: #2593FC !important;
    }

    .left-tab-actived::after {
        position: absolute;
        right: 2px;
        top: 0px;
        content: "";
        width: 2px;
        height: 20px;
        background-color: #2794FC;
        z-index: 9999;
    }

    .project-info-main-r {
        flex: 1;
        padding-left: 120px;
    }

    .application-unit {
        display: none;
    }

    .applicationUnit {
        display: none;
    }
</style>