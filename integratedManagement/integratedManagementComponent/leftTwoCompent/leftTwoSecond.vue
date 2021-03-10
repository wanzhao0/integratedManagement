
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
                list: [
                    {
                        title: "在监在建",
                        no: "247",
                        key: "projectCount",
                        textColor: "#3DC5FA",
                        img: require("@/assets/img/workImg/construction-situation-img2.png")
                    },
                    {
                        title: "暂停监督",
                        no: "24",
                        key: "projectCount",
                        textColor: "#3DC5FA",
                        img: require("@/assets/img/workImg/construction-situation-img3.png")
                    },
                    {
                        title: "完工未验",
                        no: "43",
                        key: "greatProjectCount",
                        textColor: "#3DC5FA",
                        img: require("@/assets/img/workImg/construction-situation-img1.png")
                    },
                    {
                        title: "竣工",
                        no: "146",
                        key: "totalMoney",
                        textColor: "#3DC5FA",
                        img: require("@/assets/img/workImg/construction-situation-img4.png")
                    }
                ]
            }
        },
        render() {
            return (
                <div class="left-two-second">
                    <div class="left-two-second-title">工地状态分布</div>
                    <div class="left-two-second-box">
                        {
                            this.list.map(item => {
                                return <div class="left-two-second-content">
                                    <div class="left-two-second-img">
                                        <img src={item.img} />
                                    </div>
                                    <div class="left-two-second-img-text">
                                        <div style={{ color: item.textColor }}>
                                            <span style="font-size: 64px;">{item.no}</span>
                                        </div>
                                        <div style="font-size: 44px;">{item.title}</div>
                                    </div>
                                </div>
                            })
                        }
                    </div>

                </div>
            )
        }
    }
</script>

<style scoped>
    div {
        box-sizing: border-box;
    }

    .left-two-second {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .left-two-second-box {
        width: 100%;
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        color: #D7E2FD;
    }

    .left-two-second-title {
        position: relative;
        width: 100%;
        font-size: 54px;
        color: #FFFFFF;
        font-weight: 700;
        background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#fff), to(#00C0FF));
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 50px;
        text-indent: 120px;
        position: relative;
        text-align: left;
    }

    .left-two-second-title::before {
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

    .left-two-second-content {
        width: 615px;
        height: 214px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: rgba(33, 34, 38, 0.8);
        box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.5), 0px 1px 3px 0px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        padding-left: 40px;
    }

    .left-two-second-content:nth-of-type(2n) {
        margin-left: 35px;
    }

    .left-two-second-img {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 63px
    }

    .left-two-second-content img {
        width: 100%;
        object-fit: contain;
    }

    .left-two-second-img-text {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        height: 100%;
        padding: 10% 0;
        object-fit: contain;
        font-weight: 500;
        letter-spacing: 5px;
    }
</style>