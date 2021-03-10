
<script>
    export default {
        props: {
            projectInfo: {
                type: Object,
                default: () => ({
                    projectCount: 777,
                    greatProjectCount: 247,
                    totalMoney: 172,
                    greatTotalMoney: 4875
                })
            }
        },
        data() {
            return {
                projectInfoList: [
                    {
                        title: "投资项目",
                        no: "777",
                        unit: "个",
                        key: "projectCount",
                        textColor: "#B2FD5D",
                        img: require("@/assets/img/workImg/totalProjectsIcon.png")
                    },
                    {
                        title: "财力投资项目",
                        no: "348",
                        unit: "个",
                        key: "totalMoney",
                        textColor: "#00D7FE",
                        img: require("@/assets/img/workImg/totalInvestmentIcon.png")
                    },
                    {
                        title: "重大项目",
                        no: "172",
                        unit: "个",
                        key: "greatProjectCount",
                        textColor: "#F8F907",
                        img: require("@/assets/img/workImg/majorProjectsIcon.png")
                    },
                    {
                        title: "重大项目投资额",
                        no: "4875",
                        unit: "亿元",
                        key: "greatTotalMoney",
                        textColor: "#17FDA6",
                        img: require("@/assets/img/workImg/InvestmentMajorProjects.png")
                    },
                ]
            }
        },
        render() {
            return (
                <div class="left-one-first">
                    {
                        this.projectInfoList.map(item => {
                            return <div class="project-info-content">
                                <div class="project-info-img">
                                    <img src={item.img} alt="" srcset="" />
                                </div>
                                <div class="project-info-img-text">
                                    <div style={{ color: item.textColor }}>
                                        <span style="font-size: 64px;">{this.projectInfo[item.key]}</span>
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
    .left-one-first {
        width: 100%;
        height: 100%;
        display: flex;
    }

    div {
        box-sizing: border-box;
    }

    .left-one-first {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        color: #D7E2FD
    }

    .project-info-content {
        width: 615px;
        height: 215px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: rgba(33, 34, 38, 0.8);
        box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.5), 0px 1px 3px 0px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        padding-left: 40px;
    }

    .project-info-content:nth-of-type(2n) {
        margin-left: 35px;
    }

    .project-info-img {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 63px
    }

    .project-info-content img {
        width: 100%;
        object-fit: contain;
    }

    .project-info-img-text {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        height: 100%;
        padding: 10% 0;
        object-fit: contain;
    }

    .unit {
        color: #fff;
    }
</style>