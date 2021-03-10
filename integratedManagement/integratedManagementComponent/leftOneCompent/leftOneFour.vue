
<script>
    export default {
        props: {
            approvalTransactionCondition: {
                type: Object,
                default: () => ({
                    acceptCount: 3065,
                    completeCount: 2834,
                    onTimeRatio:97.2
                })
            }
        },
        data() {
            return {
                list: [
                    {
                        title: "累计收件",
                        unit: "件",
                        key: "acceptCount",
                        no: 3065,

                    },
                    {
                        title: "累计办结",
                        unit: "件",
                        key: "completeCount",
                        no: 2834,
                    },
                    {
                        title: "及时办结率",
                        unit: "%",
                        key: "onTimeRatio",
                        no: 97.2,
                    }
                ]
            }
        },
        render() {
            return (
                <div class="left-one-four">
                    <div class="left-one-four-title">审批办理情况</div>
                    <div class="left-one-four-content">
                        {
                            this.list.map(item => {
                                return <div key={item.key} class="examination-approval-m-t">
                                    <div>
                                        <span style={{ fontSize: '64px', color: '#ECFD21' }}>{this.approvalTransactionCondition[item.key]}</span>
                                        <span style={{ fontSize: "54px", }}>&nbsp;{item.unit}</span>
                                    </div>
                                    <div style="font-size: 46px;">{item.title}</div>
                                </div>
                            })
                        }
                    </div>
                </div >

            )
        },
        methods: {

        },
    }
</script>

<style scoped>
    div {
        box-sizing: border-box;
    }

    .left-one-four {
        width: 100%;
        height: 100%;
        /* border: 1px solid red; */
        overflow: hidden;
    }

    .left-one-four-title {
        font-size: 54px;
        color: #FFFFFF;
        font-weight: 700;
        background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#fff), to(#00C0FF));
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 100px;
        text-indent: 120px;
        position: relative;
    }

    .left-one-four-title::before {
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

    .left-one-four-content {
        display: flex;
        justify-content: space-between
    }

    .examination-approval-m-t {
        width: 366px;
        height: 366px;
        background-image: url("../../../../assets/img/workImg/construction-situation-m-t.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
        line-height: 1.5;
        object-fit: contain;
    }

    .examination-e-title {
        padding-top: 0px;
        text-indent: 15px;
        color: #FFFFFF;
        font-size: 14px;
    }
</style>