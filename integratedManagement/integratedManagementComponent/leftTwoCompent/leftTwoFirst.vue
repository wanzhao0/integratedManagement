
<script>
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
                projectInfoList: [
                    {
                        title: "在建工地数",
                        no: "247",
                        unit: "个",
                        key: "projectCount",
                        textColor: "#3DC5FA",
                        img: require("@/assets/img/urbanGovernance/urbanGovernanceLOne-1.png")
                    },
                    {
                        title: "超危大工程",
                        no: "60",
                        unit: "个",
                        key: "projectCount",
                        textColor: "#3DC5FA",
                        img: require("@/assets/img/urbanGovernance/urbanGovernanceLOne-1.png")
                    },
                    {
                        title: "工地管理人员",
                        no: "3589",
                        unit: "人",
                        key: "greatProjectCount",
                        textColor: "#3DC5FA",
                        img: require("@/assets/img/urbanGovernance/urbanGovernanceLOne-2.png")
                    },
                    {
                        title: "工地劳务人员",
                        no: "10855",
                        unit: "人",
                        key: "totalMoney",
                        textColor: "#3DC5FA",
                        img: require("@/assets/img/urbanGovernance/urbanGovernanceLOne-3.png")
                    }

                ]
            }
        },
        render() {
            return (
                <div class="left-two-first">
                    {
                        this.projectInfoList.map(item => {
                            return <div class="left-two-first-content">
                                <div class="left-two-first-img">
                                    <img src={item.img} />
                                </div>
                                <div class="left-two-first-img-text">
                                    <div style={{ color: item.textColor }}>
                                        <span style="font-size: 64px;">{item.no}</span>
                                        <span style="font-size: 46px;" class="unit">&nbsp;{item.unit}</span>
                                    </div>
                                    <div style="font-size: 44px;">{item.title}</div>
                                </div>
                            </div>
                        })
                    }
                </div>
            )
        }
    }
</script>

<style scoped>
    .left-two-first {
        width: 100%;
        height: 100%;
        display: flex;
    }

    div {
        box-sizing: border-box;
    }

    .left-two-first {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

    }

    .left-two-first-content {
        width: 615px;
        height: 215px;
        display: flex;
        color: #FFFFFF;
        align-items: center;
        justify-content: flex-start;
        background: rgba(33, 34, 38, 0.8);
        box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.5), 0px 1px 3px 0px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        padding-left: 40px;
    }

    .left-two-first-content:nth-of-type(2n) {
        margin-left: 35px;
    }

    .left-two-first-img {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 63px
    }

    .left-two-first-content img {
        width: 100%;
        object-fit: contain;
    }

    .left-two-first-img-text {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        height: 100%;
        padding: 10% 0;
        object-fit: contain;
        color: #D7E2FD
    }

    .unit {
        color: #fff;
    }
</style>